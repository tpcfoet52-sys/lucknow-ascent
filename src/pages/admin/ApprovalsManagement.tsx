import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import {
  CheckCircle2, XCircle, Clock, Filter,
  Calendar, ImageIcon, FileText, Loader2, MessageSquare, Briefcase, Users, Trophy
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { deleteFromCloudinary } from "@/lib/cloudinary";

// Define the shape of our unified data
interface ApprovalItem {
  id: string;
  type: 'drive' | 'event' | 'seminar' | 'top_performer' | 'press_release';
  title: string;
  description: string;
  image_url: string;
  cloudinary_public_id?: string; // For deletion when rejected
  status: 'pending' | 'approved' | 'rejected' | 'pending_deletion';
  created_at: string;
  details: Record<string, unknown> | null; // JSONB data
  feedback?: string;
  source: 'unified' | 'events_table'; // To know which table to update
}

const ApprovalsManagement = () => {
  const [items, setItems] = useState<ApprovalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>("all");

  // Rejection Dialog State
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const fetchApprovals = async () => {
    setIsLoading(true);
    if (!supabase) return;

    // 1. Fetch Unified Approvals
    const { data: unifiedData, error: unifiedError } = await supabase
      .from('unified_approvals')
      .select('*')
      .order('created_at', { ascending: false });

    // 2. Fetch Events (from events team)
    const { data: eventsData, error: eventsError } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (unifiedError || eventsError) {
      toast({ title: "Error", description: "Failed to load approvals", variant: "destructive" });
    }

    const unifiedItems: ApprovalItem[] = (unifiedData || []).map((i: any) => ({ ...i, source: 'unified' }));

    const eventItems: ApprovalItem[] = (eventsData || []).map((e: any) => ({
      id: e.id.toString(),
      type: 'event',
      title: e.title,
      description: e.description,
      image_url: '', // Events table has no image apparently
      status: e.status === 'deletion_requested' ? 'pending_deletion' : e.status, // Map status
      created_at: e.created_at || new Date().toISOString(),
      details: { venue: e.location, date: e.event_date, team: e.team_name },
      source: 'events_table'
    }));

    // Merge and Sort
    const allItems = [...unifiedItems, ...eventItems].sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    setItems(allItems);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApprovals();
  }, []);

  const handleStatusUpdate = async (item: ApprovalItem, newStatus: 'approved' | 'rejected', feedback?: string) => {
    if (!supabase) return;

    // Map status for events table (it might use different strings? EventsManagement uses 'approved'/'pending')
    // unified uses: pending, approved, rejected, pending_deletion

    let dbStatus = newStatus;
    // If it's the events table, rejection might just be 'pending' or 'rejected' depending on logic?
    // EventsManagement delete logic: deleteEvent (permanent) or updateStatus.

    const table = item.source === 'unified' ? 'unified_approvals' : 'events';
    const id = item.id;

    // Prepare payload
    const updatePayload: any = { status: dbStatus };
    if (feedback && item.source === 'unified') updatePayload.feedback = feedback;

    const { error } = await supabase
      .from(table)
      .update(updatePayload)
      .eq('id', id);

    if (error) {
      toast({ title: "Update Failed", description: error.message, variant: "destructive" });
    } else {
      toast({
        title: newStatus === 'approved' ? "Approved" : "Rejected",
        description: `Item has been ${newStatus}.`
      });
      fetchApprovals(); // Refresh UI
    }
  };

  // Wrapper for existing calls (adapter)
  const handleApprove = (item: ApprovalItem) => handleStatusUpdate(item, 'approved');
  const handleReject = (item: ApprovalItem) => {
    setRejectId(item.id);
    // Note: We need to store the item to know the source in confirmRejection. 
    // I'll update confirmRejection to find the item.
  };

  const handleDeleteConfirm = async (item: ApprovalItem) => {
    if (!supabase) return;

    if (item.source === 'unified') {
      // 1. Delete from Cloudinary if public_id exists
      if (item.cloudinary_public_id) {
        await deleteFromCloudinary(item.cloudinary_public_id);
      }
      // 2. Delete from Supabase
      const { error } = await supabase.from('unified_approvals').delete().eq('id', item.id);
      if (error) toast({ title: "Deletion Failed", description: error.message, variant: "destructive" });
      else { toast({ title: "Deleted", description: "Item permanently deleted." }); fetchApprovals(); }
    } else {
      // Events Table Deletion
      const { error } = await supabase.from('events').delete().eq('id', item.id);
      if (error) toast({ title: "Deletion Failed", description: error.message, variant: "destructive" });
      else { toast({ title: "Deleted", description: "Event permanently deleted." }); fetchApprovals(); }
    }
  };

  const handleRejectDeletion = async (item: ApprovalItem) => {
    // Revert to approved status
    const table = item.source === 'unified' ? 'unified_approvals' : 'events';
    const { error } = await supabase
      .from(table)
      .update({ status: 'approved' })
      .eq('id', item.id);

    if (error) {
      toast({ title: "Update Failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Deletion Rejected", description: "Item restored to approved status." });
      fetchApprovals();
    }
  };



  const confirmRejection = () => {
    if (rejectId) {
      const item = items.find(i => i.id === rejectId);
      if (item) {
        handleStatusUpdate(item, 'rejected', rejectReason);
      }
      setRejectId(null);
      setRejectReason("");
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar className="w-4 h-4" />;
      case 'drive': return <Briefcase className="w-4 h-4" />; // Will need to import Briefcase
      case 'seminar': return <Users className="w-4 h-4" />; // Will need to import Users, GraduationCap
      case 'top_performer': return <Trophy className="w-4 h-4" />; // Will need to import Trophy
      case 'press_release': return <FileText className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event': return "bg-blue-100 text-blue-800 border-blue-200";
      case 'drive': return "bg-slate-100 text-slate-800 border-slate-200";
      case 'seminar': return "bg-purple-100 text-purple-800 border-purple-200";
      case 'top_performer': return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 'press_release': return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // No explicit filtering by type anymore
  const filteredItems = items;

  // Group Pending items (New Submissions & Deletion Requests)
  const PendingList = filteredItems.filter(i => i.status === 'pending' || i.status === 'pending_deletion');
  const HistoryList = filteredItems.filter(i => i.status !== 'pending' && i.status !== 'pending_deletion');

  return (
    <div className="space-y-6 p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Approvals & Requests</h1>
          <p className="text-muted-foreground mt-1">Unified inbox for all coordinator submissions.</p>
        </div>

        <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
          <Filter className="w-4 h-4 ml-2 text-muted-foreground" />
          <span className="text-xs text-muted-foreground px-2">Showing All Types</span>
        </div>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2">
          <TabsTrigger value="pending">Pending Review ({PendingList.length})</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6 space-y-4">
          {isLoading ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>
          ) : PendingList.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed rounded-xl bg-muted/30">
              <CheckCircle2 className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
              <p className="text-lg font-medium">All caught up!</p>
              <p className="text-muted-foreground">No pending requests found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {PendingList.map((item) => (
                <ApprovalCard
                  key={item.id}
                  item={item}
                  onApprove={() => handleApprove(item)}
                  onReject={() => handleReject(item)}
                  onConfirmDelete={() => handleDeleteConfirm(item)}
                  onRejectDelete={() => handleRejectDeletion(item)}
                  getTypeIcon={getTypeIcon}
                  getTypeColor={getTypeColor}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <div className="space-y-4">
            {HistoryList.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 rounded bg-muted overflow-hidden shrink-0">
                    {item.image_url && <img src={item.image_url} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={getTypeColor(item.type)}>
                        {item.type.replace('_', ' ')}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{format(new Date(item.created_at), "MMM d, yyyy")}</span>
                    </div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                  </div>
                </div>
                <Badge variant={item.status === 'approved' ? 'default' : 'destructive'} className="capitalize">
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Rejection Dialog */}
      <Dialog open={!!rejectId} onOpenChange={(open) => !open && setRejectId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Submission</DialogTitle>
            <CardDescription>Please provide a reason for rejection to help the coordinator.</CardDescription>
          </DialogHeader>
          <div className="py-4">
            <Label>Feedback / Reason</Label>
            <Textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="e.g. Image quality is too low..."
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmRejection}>Reject Content</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div >
  );
};

interface ApprovalCardProps {
  item: ApprovalItem;
  onApprove: () => void;
  onReject: () => void;
  onConfirmDelete: () => void;
  onRejectDelete: () => void;
  getTypeIcon: (type: string) => React.ReactNode;
  getTypeColor: (type: string) => string;
}

// Helper Component for the Card
const ApprovalCard = ({ item, onApprove, onReject, onConfirmDelete, onRejectDelete, getTypeIcon, getTypeColor }: ApprovalCardProps) => (
  <Card className={`flex flex-col overflow-hidden border-l-4 ${item.status === 'pending_deletion' ? 'border-l-red-500' : 'border-l-primary/20'}`}>
    <div className="aspect-video bg-muted relative overflow-hidden group">
      {item.image_url ? (
        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground bg-secondary/50">No Image</div>
      )}
      <div className="absolute top-2 right-2">
        <Badge className={`shadow-sm ${getTypeColor(item.type)}`}>
          <span className="flex items-center gap-1">
            {getTypeIcon(item.type)} {item.type.replace('_', ' ')}
          </span>
        </Badge>
      </div>
      {item.status === 'pending_deletion' && (
        <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
          <Badge variant="destructive" className="text-lg py-1 px-4 shadow-lg border-2 border-white">DELETION REQUESTED</Badge>
        </div>
      )}
    </div>
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start text-xs text-muted-foreground mb-2">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {format(new Date(item.created_at), "MMM d, p")}</span>
      </div>
      <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-3">
      <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>

      {/* Show Event Details if available */}
      {item.type === 'event' && item.details && typeof item.details === 'object' && (
        <div className="mt-3 p-2 bg-secondary/50 rounded text-xs space-y-1">
          {(item.details as any).venue && <div><strong>Venue:</strong> {(item.details as any).venue}</div>}
          {(item.details as any).date && <div><strong>Date:</strong> {(item.details as any).date}</div>}
          {(item.details as any).team && <div><strong>By:</strong> {(item.details as any).team}</div>}
        </div>
      )}
    </CardContent>
    <CardFooter className="pt-0 gap-3 border-t bg-muted/20 p-4">
      {item.status === 'pending_deletion' ? (
        <>
          <Button variant="outline" className="flex-1 hover:bg-blue-50 hover:text-blue-600 border-blue-200" onClick={onRejectDelete}>
            <XCircle className="w-4 h-4 mr-2" /> Keep Item (Reject)
          </Button>
          <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={onConfirmDelete}>
            <CheckCircle2 className="w-4 h-4 mr-2" /> Confirm Delete
          </Button>
        </>
      ) : (
        <>
          <Button variant="outline" className="flex-1 hover:bg-red-50 hover:text-red-600 border-red-200" onClick={onReject}>
            <XCircle className="w-4 h-4 mr-2" /> Reject
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={onApprove}>
            <CheckCircle2 className="w-4 h-4 mr-2" /> Approve
          </Button>
        </>
      )}
    </CardFooter>
  </Card>
);

export default ApprovalsManagement;
