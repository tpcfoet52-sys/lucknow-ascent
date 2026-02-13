import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface Event {
  id: number;
  title: string;
  event_date: string;
  location: string;
  description: string;
  banner_url?: string;
  status: string;
  formattedDate?: string;
  formattedTime?: string;
  day?: string;
  month?: string;
  type?: "upcoming" | "past";
  registrationOpen?: boolean;
}

const Events = () => {
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    department: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch Events from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'approved')
          .order('event_date', { ascending: true });

        if (error) throw error;

        if (data) {
          const processedEvents: Event[] = data.map((event) => {
            const eventDate = new Date(event.event_date);
            const now = new Date();
            const isUpcoming = eventDate > now;

            return {
              ...event,
              formattedDate: eventDate.toLocaleDateString("en-US", {
                month: "long", day: "numeric", year: "numeric"
              }),
              formattedTime: eventDate.toLocaleTimeString("en-US", {
                hour: "2-digit", minute: "2-digit"
              }),
              day: eventDate.getDate().toString().padStart(2, '0'),
              month: eventDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
              type: isUpcoming ? "upcoming" : "past",
              registrationOpen: isUpcoming,
            };
          }).filter(e => !e.title.toLowerCase().includes("raj mistri"));
          setEventsList(processedEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        toast.error("Failed to load events.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = eventsList.filter((e) => e.type === "upcoming");
  const pastEvents = eventsList.filter((e) => e.type === "past");

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('registrations').insert([
        {
          event_id: selectedEvent.id,
          student_name: formData.name,
          student_email: formData.email,
          student_roll: formData.rollNumber,
          branch: formData.department,
          mobile_number: formData.phone
        }
      ]);

      if (error) throw error;
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", rollNumber: "", department: "" });
      toast.success("Registration successful!");

    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setSubmitSuccess(false);
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <section className="section-padding bg-background min-h-[60vh]">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="h-6 w-24 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-10 w-80 bg-primary/10 rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-5 w-96 bg-primary/5 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-72 bg-primary/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="section-padding bg-muted/20 relative">
      {/* Animated Background Blobs */}
      <div className="container-narrow absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Active Events
          </h3>

          {upcomingEvents.length === 0 ? (
            <div className="text-center p-12 bg-card rounded-lg border border-dashed border-border text-muted-foreground">
              No active events scheduled at the moment.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} onRegister={handleRegister} />
              ))}
            </div>
          )}
        </div>

        {pastEvents.length > 0 && (
          <div className="pt-8 border-t border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              Past Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} onRegister={handleRegister} isPast={true} />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 md:p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitSuccess ? (
              <>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  Register for Event
                </h3>
                <p className="text-muted-foreground text-sm mb-6 pb-4 border-b">
                  {selectedEvent.title} • {selectedEvent.formattedDate}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Enter your full name"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@lkouniv.ac.in"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="10-digit mobile number"
                      className="bg-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rollNumber">Roll Number *</Label>
                      <Input
                        id="rollNumber"
                        value={formData.rollNumber}
                        onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                        required
                        placeholder="Roll No."
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department *</Label>
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        required
                        placeholder="e.g. CSE"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6">
                    <Button type="button" variant="outline" onClick={closeModal} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="flex-1">
                      {isSubmitting ? "Submitting..." : "Confirm Registration"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Registration Successful!
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  You have been registered for <span className="font-semibold text-foreground">{selectedEvent.title}</span>.
                </p>
                <Button onClick={closeModal} className="w-full">Close</Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

// Extracted Event Card Component for consistency
const EventCard = ({ event, index, onRegister, isPast = false }: { event: Event, index: number, onRegister: (e: Event) => void, isPast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    variants={{
      hover: { y: -5, transition: { duration: 0.3 } }
    }}
    whileHover="hover"
    className={`group relative overflow-hidden rounded-xl border border-border shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-accent/30 ${isPast ? 'opacity-80' : ''}`}
  >
    {/* Image Section */}
    <div className="aspect-video overflow-hidden relative bg-muted">
      {event.banner_url ? (
        <>
          <img
            src={event.banner_url}
            alt={event.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isPast ? 'grayscale' : ''}`}
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/5">
          <Calendar className="h-10 w-10 text-primary/40" />
        </div>
      )}
      {/* Badge overlay */}
      <div className="absolute top-3 right-3">
        {event.registrationOpen && !isPast && (
          <Badge className="bg-green-600 text-white hover:bg-green-700 backdrop-blur-sm shadow-sm font-semibold border-none">
            Open Now
          </Badge>
        )}
        {isPast && (
          <Badge variant="secondary" className="backdrop-blur-sm shadow-sm font-semibold">
            Ended
          </Badge>
        )}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-4 relative z-10 bg-card">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Calendar className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-tight line-clamp-2">
            {event.title}
          </h3>
        </div>
      </div>

      <div className="space-y-1.5 mb-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5 text-accent" />
          <span>{event.formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>{event.formattedTime}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2 leading-relaxed line-clamp-3">
        {event.description}
      </p>

      <div className="mt-3">
        {isPast ? (
          <Button disabled variant="outline" size="sm" className="w-full">
            Event Ended
          </Button>
        ) : event.registrationOpen ? (
          <Button
            variant="default"
            size="sm"
            className="w-full shadow-sm hover:shadow-md transition-all font-semibold"
            onClick={() => onRegister(event)}
          >
            Register Now
          </Button>
        ) : (
          <Button disabled variant="secondary" size="sm" className="w-full opacity-70">
            Registration Closed
          </Button>
        )}
      </div>
    </div>
  </motion.div>
);

export default Events;
