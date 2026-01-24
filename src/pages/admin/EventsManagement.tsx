import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, X, Calendar, MapPin, Trash2, RotateCcw } from "lucide-react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  location: string;
  status: 'pending' | 'approved' | 'deletion_requested';
  team_name: string;
}

const EventsManagement = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) setEvents(data);
    setIsLoading(false);
  };

  useEffect(() => { fetchEvents(); }, []);

  // --- Actions ---
  const updateStatus = async (id: number, newStatus: string) => {
    const { error } = await supabase.from('events').update({ status: newStatus }).eq('id', id);
    if (error) toast.error("Update failed");
    else {
      toast.success(`Event ${newStatus === 'approved' ? 'Approved' : 'Restored'}`);
      fetchEvents();
    }
  };

  const deleteEvent = async (id: number) => {
    if (!confirm("Permanently delete this event and all registrations?")) return;
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) toast.error("Delete failed");
    else {
      toast.success("Event permanently deleted");
      fetchEvents();
    }
  };

  const EventCard = ({ event, actionType }: { event: Event, actionType: 'approve' | 'active' | 'delete' }) => (
    <Card key={event.id} className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription className="mt-1 flex items-center gap-2">
              <Calendar className="h-3 w-3" /> {new Date(event.event_date).toLocaleString()}
              <MapPin className="h-3 w-3" /> {event.location}
            </CardDescription>
          </div>
          <Badge variant={event.status === 'approved' ? 'default' : 'secondary'}>{event.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
        <p className="text-xs font-semibold text-navy-700">By: {event.team_name}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-2 border-t">
        {actionType === 'approve' && (
          <>
            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => deleteEvent(event.id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
            <Button size="sm" variant="navy" onClick={() => updateStatus(event.id, 'approved')}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
          </>
        )}
        {actionType === 'delete' && (
          <>
            <Button size="sm" variant="outline" onClick={() => updateStatus(event.id, 'approved')}>
              <RotateCcw className="h-4 w-4 mr-1" /> Reject Request (Restore)
            </Button>
            <Button size="sm" variant="destructive" onClick={() => deleteEvent(event.id)}>
              <Trash2 className="h-4 w-4 mr-1" /> Approve Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );

  const pendingEvents = events.filter(e => e.status === 'pending');
  const activeEvents = events.filter(e => e.status === 'approved');
  const deletionRequests = events.filter(e => e.status === 'deletion_requested');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">Events Management</h1>
        <p className="text-muted-foreground mt-2">Approve creation requests and handle deletion requests.</p>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
          <TabsTrigger value="pending">Pending ({pendingEvents.length})</TabsTrigger>
          <TabsTrigger value="delete">Deletion Req ({deletionRequests.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({activeEvents.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="mt-4 space-y-4">
          {pendingEvents.length === 0 ? <p className="text-muted-foreground">No pending approvals.</p> : pendingEvents.map(e => <EventCard key={e.id} event={e} actionType="approve" />)}
        </TabsContent>
        
        <TabsContent value="delete" className="mt-4 space-y-4">
          {deletionRequests.length === 0 ? <p className="text-muted-foreground">No deletion requests.</p> : deletionRequests.map(e => <EventCard key={e.id} event={e} actionType="delete" />)}
        </TabsContent>
        
        <TabsContent value="active" className="mt-4 space-y-4">
          {activeEvents.length === 0 ? <p className="text-muted-foreground">No active events.</p> : activeEvents.map(e => <EventCard key={e.id} event={e} actionType="active" />)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsManagement;