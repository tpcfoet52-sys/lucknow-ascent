import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ExternalLink, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
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
    <section id="events" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle monochromatic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        {/* Hero Section - Monochromatic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span>Events & Activities</span>
          </motion.div>


          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Stay updated with upcoming placement drives, workshops, and career development sessions designed to accelerate your journey.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Upcoming Events</h3>
            {upcomingEvents.length > 0 && (
              <span className="bg-primary/15 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                {upcomingEvents.length} scheduled
              </span>
            )}
          </motion.div>

          {upcomingEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-2xl border border-dashed border-border"
            >
              <Calendar className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No upcoming events scheduled</p>
              <p className="text-muted-foreground/70 text-sm mt-1">Check back soon for new events!</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Monochromatic Glassmorphism Card */}
                  <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Monochromatic gradient header */}
                    <div className="relative h-24 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-between px-6">
                      {/* Calendar Date Display */}
                      <div className="bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border/50">
                        <div className="text-2xl font-bold text-foreground leading-none">{event.day}</div>
                        <div className="text-xs font-semibold text-primary tracking-wide">{event.month}</div>
                      </div>

                      {event.registrationOpen && (
                        <motion.div
                          className="flex items-center gap-2 bg-primary/15 backdrop-blur-sm text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/25"
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          Registration Open
                        </motion.div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative p-6 pt-4">
                      <h4 className="font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-5 line-clamp-2">{event.description}</p>

                      {/* Event Details */}
                      <div className="space-y-2.5 mb-5">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="p-1.5 bg-primary/10 rounded-lg">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{event.formattedTime}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="p-1.5 bg-primary/10 rounded-lg">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1">{event.location}</span>
                        </div>
                      </div>

                      {event.registrationOpen && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                            onClick={() => handleRegister(event)}
                          >
                            Register Now
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Past Events - Timeline Style */}
        {pastEvents.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-muted rounded-lg">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Past Events</h3>
              <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-1 rounded-full">
                {pastEvents.length} completed
              </span>
            </motion.div>

            <div className="relative">
              {/* Timeline line - monochromatic */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent hidden md:block" />

              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="group relative md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-muted border-2 border-border hidden md:block group-hover:bg-primary/30 group-hover:border-primary/50 transition-colors duration-300" />

                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/30 hover:border-primary/20 hover:bg-card/70 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{event.title}</h4>
                          <p className="text-muted-foreground/70 text-sm mt-1">{event.location}</p>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          {event.formattedDate}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Registration Modal - Monochromatic */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-border/50 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitSuccess ? (
                <>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Register for Event
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{selectedEvent.title}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Enter your full name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your.email@lkouniv.ac.in"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="10-digit mobile number"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rollNumber" className="text-sm font-medium">Roll Number</Label>
                      <Input
                        id="rollNumber"
                        value={formData.rollNumber}
                        onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                        required
                        placeholder="Your university roll number"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department" className="text-sm font-medium">Department</Label>
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        required
                        placeholder="e.g., Computer Science"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={closeModal} className="flex-1">
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Registration Successful!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    You have been registered for <span className="text-foreground font-medium">{selectedEvent.title}</span>. Check your email for confirmation details.
                  </p>
                  <Button onClick={closeModal} className="bg-primary hover:bg-primary/90">
                    Done
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;