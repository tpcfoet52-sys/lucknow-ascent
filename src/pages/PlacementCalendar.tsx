import { useState } from "react";
import { Link } from "react-router-dom";
import { format, isSameDay, parseISO, addDays } from "date-fns";
import { Calendar as CalendarIcon, Clock, MapPin, Plus, Filter, Search, ChevronRight, Briefcase, GraduationCap, Users, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Types
type EventType = "drive" | "workshop" | "interview" | "seminar";
type EventStatus = "upcoming" | "completed" | "cancelled" | "live";

interface PlacementEvent {
    id: string;
    title: string;
    company: string;
    role?: string;
    date: Date;
    time: string;
    venue: string;
    type: EventType;
    status: EventStatus;
    description: string;
}

// Mock Data
const INITIAL_EVENTS: PlacementEvent[] = [
    {
        id: "1",
        title: "Campus Recruitment Drive",
        company: "TCS",
        role: "System Engineer",
        date: addDays(new Date(), 2),
        time: "09:00 AM",
        venue: "Main Auditorium",
        type: "drive",
        status: "upcoming",
        description: "Written test and technical interviews for final year students."
    },
    {
        id: "2",
        title: "Resume Building Workshop",
        company: "Internal",
        date: new Date(),
        time: "02:00 PM",
        venue: "Seminar Hall 1",
        type: "workshop",
        status: "live",
        description: "Expert session on crafting ATS-friendly resumes."
    },
    {
        id: "3",
        title: "Pre-Placement Talk",
        company: "Infosys",
        role: "Specialist Programmer",
        date: addDays(new Date(), 5),
        time: "11:00 AM",
        venue: "Online (Zoom)",
        type: "seminar",
        status: "upcoming",
        description: "Introduction to company culture and role expectations."
    }
];

const PlacementCalendar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [events, setEvents] = useState<PlacementEvent[]>(INITIAL_EVENTS);
    const [filterType, setFilterType] = useState<string>("all");
    const [isAddEventOpen, setIsAddEventOpen] = useState(false);
    const [newEvent, setNewEvent] = useState<Partial<PlacementEvent>>({
        type: "drive",
        status: "upcoming",
        date: new Date()
    });

    // Filtered Events
    const filteredEvents = events.filter(event => {
        if (filterType !== "all" && event.type !== filterType) return false;
        return true;
    });

    const selectedDateEvents = filteredEvents.filter(event =>
        date && isSameDay(event.date, date)
    );

    const upcomingEvents = filteredEvents
        .filter(event => event.status === "upcoming" || event.status === "live")
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    // Event Handlers
    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEvent.title || !newEvent.date) return;

        const event: PlacementEvent = {
            id: Math.random().toString(36).substr(2, 9),
            title: newEvent.title,
            company: newEvent.company || "TBD",
            role: newEvent.role,
            date: newEvent.date,
            time: newEvent.time || "10:00 AM",
            venue: newEvent.venue || "TBD",
            type: (newEvent.type as EventType) || "drive",
            status: (newEvent.status as EventStatus) || "upcoming",
            description: newEvent.description || "No description provided."
        };

        setEvents([...events, event]);
        setIsAddEventOpen(false);
        setNewEvent({ type: "drive", status: "upcoming", date: new Date() });
    };

    const getStatusColor = (status: EventStatus) => {
        switch (status) {
            case "upcoming": return "bg-blue-100 text-blue-700 border-blue-200";
            case "live": return "bg-green-100 text-green-700 border-green-200 animate-pulse";
            case "completed": return "bg-gray-100 text-gray-700 border-gray-200";
            case "cancelled": return "bg-red-100 text-red-700 border-red-200";
            default: return "bg-gray-100";
        }
    };

    const getTypeIcon = (type: EventType) => {
        switch (type) {
            case "drive": return <Briefcase className="w-4 h-4" />;
            case "workshop": return <GraduationCap className="w-4 h-4" />;
            case "interview": return <Users className="w-4 h-4" />;
            default: return <CalendarIcon className="w-4 h-4" />;
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 container-narrow py-8 md:py-12 pt-24 md:pt-32">


                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="heading-display text-3xl md:text-4xl text-foreground">Placement Calendar</h1>
                        <p className="text-muted-foreground mt-1">Track upcoming drives, deadlines, and events.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                            <DialogTrigger asChild>
                                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <Plus className="w-4 h-4" /> Add Event
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Event</DialogTitle>
                                    <DialogDescription>Create a new placement drive or activity schedule.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleAddEvent} className="space-y-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Event Title</Label>
                                            <Input
                                                id="title"
                                                placeholder="e.g. Campus Drive"
                                                value={newEvent.title || ""}
                                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                placeholder="e.g. Google"
                                                value={newEvent.company || ""}
                                                onChange={(e) => setNewEvent({ ...newEvent, company: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {newEvent.date ? format(newEvent.date, "PPP") : "Pick a date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={newEvent.date}
                                                        onSelect={(d) => d && setNewEvent({ ...newEvent, date: d })}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="time">Time</Label>
                                            <Input
                                                id="time"
                                                type="time"
                                                value={newEvent.time || ""}
                                                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Type</Label>
                                            <Select
                                                value={newEvent.type}
                                                onValueChange={(val: EventType) => setNewEvent({ ...newEvent, type: val })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="drive">Drive</SelectItem>
                                                    <SelectItem value="workshop">Workshop</SelectItem>
                                                    <SelectItem value="interview">Interview</SelectItem>
                                                    <SelectItem value="seminar">Seminar</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="venue">Venue</Label>
                                            <Input
                                                id="venue"
                                                placeholder="e.g. Auditorium"
                                                value={newEvent.venue || ""}
                                                onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <DialogFooter>
                                        <Button type="button" variant="outline" onClick={() => setIsAddEventOpen(false)}>Cancel</Button>
                                        <Button type="submit">Create Event</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="border-border/50 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Filter Events</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {["all", "drive", "workshop", "interview", "seminar"].map((type) => (
                                        <Button
                                            key={type}
                                            variant={filterType === type ? "secondary" : "ghost"}
                                            className="w-full justify-start capitalize"
                                            onClick={() => setFilterType(type)}
                                        >
                                            {type === "all" ? <Filter className="w-4 h-4 mr-2" /> : getTypeIcon(type as EventType)}
                                            <span className="ml-2">{type}</span>
                                            <span className="ml-auto text-xs text-muted-foreground bg-background px-2 py-0.5 rounded-full border">
                                                {type === "all"
                                                    ? events.length
                                                    : events.filter(e => e.type === type).length}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-accent" /> Upcoming
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {upcomingEvents.slice(0, 3).map(event => (
                                    <div key={event.id} className="group relative pl-4 border-l-2 border-border hover:border-accent transition-colors">
                                        <p className="text-xs text-muted-foreground mb-0.5">{format(event.date, "MMM dd, yyyy")}</p>
                                        <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">{event.title}</h4>
                                        <p className="text-sm text-muted-foreground/80">{event.company}</p>
                                    </div>
                                ))}
                                {upcomingEvents.length === 0 && (
                                    <p className="text-sm text-muted-foreground">No upcoming events scheduled.</p>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Calendar Area */}
                    <div className="lg:col-span-8 space-y-6">
                        <Card className="border-border/50 shadow-sm min-h-[500px]">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-auto mx-auto md:mx-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-md border shadow-sm p-4 bg-card"
                                            modifiers={{
                                                hasEvent: (date) => events.some(e => isSameDay(e.date, date))
                                            }}
                                            modifiersStyles={{
                                                hasEvent: { fontWeight: 'bold', textDecoration: 'underline decoration-accent' }
                                            }}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-xl font-semibold">
                                                {date ? format(date, "MMMM dd, yyyy") : "Select a date"}
                                            </h3>
                                            {selectedDateEvents.length > 0 && (
                                                <Badge variant="outline">{selectedDateEvents.length} Events</Badge>
                                            )}
                                        </div>

                                        <div className="space-y-4">
                                            {selectedDateEvents.length > 0 ? (
                                                selectedDateEvents.map((event) => (
                                                    <motion.div
                                                        key={event.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-secondary/30 rounded-lg p-4 border border-border/60 hover:border-accent/40 transition-colors"
                                                    >
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <h4 className="font-medium text-lg text-foreground">{event.title}</h4>
                                                                <p className="text-sm text-muted-foreground font-medium">{event.company}</p>
                                                            </div>
                                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${getStatusColor(event.status)}`}>
                                                                {event.status}
                                                            </span>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-y-2 mt-3 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="w-3.5 h-3.5" /> {event.time}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-3.5 h-3.5" /> {event.venue}
                                                            </div>
                                                            <div className="flex items-center gap-2 col-span-2">
                                                                {getTypeIcon(event.type)} <span className="capitalize">{event.type}</span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <div className="text-center py-12 border-2 border-dashed border-border/50 rounded-lg">
                                                    <CalendarIcon className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                                                    <p className="text-muted-foreground">No events scheduled for this date.</p>
                                                    <Button variant="link" onClick={() => setIsAddEventOpen(true)}>Schedule an event</Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PlacementCalendar;
