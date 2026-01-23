import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  type: "upcoming" | "past";
  registrationOpen: boolean;
  capacity?: number;
  registered?: number;
}

const events: Event[] = [
  {
    id: "1",
    title: "Campus Recruitment Drive 2026",
    date: "February 15-20, 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "University Auditorium",
    description: "Annual mega recruitment drive featuring top companies including TCS, Wipro, Infosys, and more. Pre-placement talks, interviews, and on-spot offers.",
    type: "upcoming",
    registrationOpen: true,
    capacity: 500,
    registered: 342,
  },
  {
    id: "2",
    title: "Resume Building Workshop",
    date: "January 25, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Seminar Hall, FoET",
    description: "Learn how to craft an impressive resume that catches recruiters' attention. Industry experts will share tips and provide personalized feedback.",
    type: "upcoming",
    registrationOpen: true,
    capacity: 200,
    registered: 156,
  },
  {
    id: "3",
    title: "Mock Interview Sessions",
    date: "February 1-5, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Placement Cell Office",
    description: "Prepare for the placement season with mock interviews conducted by HR professionals from leading companies.",
    type: "upcoming",
    registrationOpen: true,
    capacity: 300,
    registered: 278,
  },
  {
    id: "4",
    title: "Industry Interaction Session - Banking Sector",
    date: "January 30, 2026",
    time: "11:00 AM - 1:00 PM",
    venue: "Conference Room, Admin Block",
    description: "Exclusive session with senior executives from HDFC Bank, ICICI Bank, and Axis Bank. Learn about career opportunities in the banking sector.",
    type: "upcoming",
    registrationOpen: true,
    capacity: 150,
    registered: 98,
  },
  {
    id: "5",
    title: "Pre-Placement Talk - Deloitte",
    date: "December 15, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Auditorium",
    description: "Deloitte conducted a pre-placement talk covering company culture, roles, and career growth opportunities.",
    type: "past",
    registrationOpen: false,
  },
  {
    id: "6",
    title: "Technical Aptitude Workshop",
    date: "November 20, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Computer Lab, FoET",
    description: "Comprehensive workshop on aptitude tests, coding challenges, and technical interview preparation.",
    type: "past",
    registrationOpen: false,
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    department: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const pastEvents = events.filter((e) => e.type === "past");

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setSubmitSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", rollNumber: "", department: "" });
    }, 1500);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setSubmitSuccess(false);
  };

  return (
    <section id="events" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Events</span>
          <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
            Placement Events & Activities
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mt-3 text-base">
            Stay updated with upcoming placement drives, workshops, and career development sessions.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="group bg-card rounded-lg p-6 shadow-elevated-sm border border-border/50 hover:shadow-elevated hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Animated accent line */}
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
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{event.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{event.time}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.venue}</span>
                    </motion.div>
                    {event.capacity && (
                      <motion.div 
                        className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ x: 4 }}
                      >
                        <Users className="w-4 h-4 text-accent" />
                        <div className="flex-1">
                          <span>{event.registered}/{event.capacity} registered</span>
                          {/* Progress bar */}
                          <div className="mt-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(event.registered! / event.capacity) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {event.registrationOpen && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
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
        </div>

        {/* Past Events */}
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
                <p className="text-muted-foreground text-sm mt-1">{event.date}</p>
                <p className="text-muted-foreground/70 text-xs mt-2">{event.venue}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Modal */}
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
    </section>
  );
};

export default Events;
