import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Check, X, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface MediaRequest {
  id: string;
  title: string;
  description: string;
  image_url: string;
  type: string;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function MediaRequests() {
  const [requests, setRequests] = useState<MediaRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    if (!supabase) return;
    setLoading(true);
    // Fetch only pending requests
    const { data, error } = await supabase
      .from('media_submissions')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: true });

    if (!error && data) {
      setRequests(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAction = async (id: string, action: 'approved' | 'rejected') => {
    if (!supabase) return;

    const { error } = await supabase
      .from('media_submissions')
      .update({ status: action })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    } else {
      toast({ title: "Success", description: `Request ${action}` });
      fetchRequests(); // Refresh list
    }
  };

  if (loading) return <div className="p-8 flex justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Media Approvals</h1>
        <p className="text-muted-foreground">Review and approve content submissions.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.length === 0 ? (
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Check className="w-10 h-10 text-muted-foreground mb-4" />
              <p>No pending media requests.</p>
            </CardContent>
          </Card>
        ) : (
          requests.map((req) => (
            <Card key={req.id} className="flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-64 h-48 md:h-auto bg-muted relative">
                <img src={req.image_url} alt={req.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{req.type}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {format(new Date(req.created_at), 'PPP')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{req.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{req.description}</p>
                </div>
                <div className="flex gap-3 mt-6 justify-end">
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleAction(req.id, 'rejected')}>
                    <X className="w-4 h-4 mr-2" /> Reject
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleAction(req.id, 'approved')}>
                    <Check className="w-4 h-4 mr-2" /> Approve
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}