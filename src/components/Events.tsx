import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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
          });
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
          mobile_number: formData.phone // Matching the renamed column
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
    <section id="events" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Events</span>
          <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
            Placement Events & Activities
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base">
            Stay updated with upcoming placement drives, workshops, and career development sessions.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Upcoming Events
          </h3>

          {upcomingEvents.length === 0 ? (
            <div className="text-center p-8 bg-card rounded-lg border border-dashed border-border text-muted-foreground">
              No upcoming events scheduled at the moment.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group bg-card rounded-lg p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                      {event.registrationOpen && (
                        <motion.span
                          className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Open
                        </motion.span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 text-sm mb-4">
                      <motion.div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{event.formattedDate}</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{event.formattedTime}</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{event.location}</span>
                      </motion.div>
                    </div>

                    {event.registrationOpen && (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:shadow-md transition-all duration-300"
                          onClick={() => handleRegister(event)}
                        >
                          Register Now
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {
          pastEvents.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                Past Events
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-card/50 rounded-md p-5 border border-border/30"
                  >
                    <h4 className="font-serif font-medium text-foreground">{event.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{event.formattedDate}</p>
                    <p className="text-muted-foreground/70 text-xs mt-2">{event.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        }
      </div >

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-lg p-6 md:p-8 max-w-md w-full shadow-elevated max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitSuccess ? (
              <>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Register for Event
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{selectedEvent.title}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Enter your full name"
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
                    />
                  </div>

                  <div>
                    <Label htmlFor="rollNumber">Roll Number *</Label>
                    <Input
                      id="rollNumber"
                      value={formData.rollNumber}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      required
                      placeholder="Your university roll number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={closeModal} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="flex-1">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Registration Successful!
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  You have been registered for {selectedEvent.title}. Check your email for confirmation details.
                </p>
                <Button onClick={closeModal}>Close</Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section >
  );
};

export default Events;