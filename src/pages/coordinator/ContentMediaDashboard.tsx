import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Loader2, FileText, Image as ImageIcon, Send, Clock, CheckCircle2, XCircle, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { ImageUpload } from "@/components/ui/image-upload";
import { supabase } from "@/lib/supabase";

// --- Form Schema ---
const mediaFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  type: z.enum(["gallery", "press_release", "achievement"]),
  image_url: z.string().min(1, "An image is required"),
  date: z.string().optional(),
});

type MediaFormValues = z.infer<typeof mediaFormSchema>;

// --- Type Definition ---
interface MediaSubmission {
  id: string;
  title: string;
  description: string;
  type: 'gallery' | 'press_release' | 'achievement';
  image_url: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  feedback?: string;
}

const ContentMediaDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submissions, setSubmissions] = useState<MediaSubmission[]>([]);

  // Initialize Form
  const form = useForm<MediaFormValues>({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "gallery",
      image_url: "",
      date: new Date().toISOString().split('T')[0],
    },
  });

  // Fetch Submissions (Mocked for now - replace with real Supabase query)
  useEffect(() => {
    // In a real app:
    // const { data } = await supabase.from('media_submissions').select('*').eq('user_id', user.id);
    // setSubmissions(data);

    // MOCK DATA for demonstration
    setSubmissions([
      {
        id: "1",
        title: "Convocation Ceremony 2024",
        description: "Photos from the annual convocation ceremony held at the main auditorium.",
        type: "gallery",
        image_url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
        status: "approved",
        created_at: "2024-03-15T10:00:00Z"
      },
      {
        id: "2",
        title: "TCS Recruitment Drive Results",
        description: "Press release regarding the successful placement of 50 students.",
        type: "press_release",
        image_url: "https://images.unsplash.com/photo-1560439514-4e9645039924",
        status: "pending",
        created_at: "2024-03-20T14:30:00Z"
      }
    ]);
  }, []);

  const onSubmit = async (data: MediaFormValues) => {
    setIsLoading(true);
    try {
      // 1. Submit to Supabase
      // const { error } = await supabase.from('media_submissions').insert([{ ...data, status: 'pending', user_id: user.id }]);
      // if (error) throw error;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newSubmission: MediaSubmission = {
        id: Math.random().toString(),
        ...data,
        status: 'pending',
        created_at: new Date().toISOString(),
      };

      setSubmissions([newSubmission, ...submissions]);
      toast({
        title: "Submission Received",
        description: "Your content has been sent for admin approval.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-green-500 hover:bg-green-600"><CheckCircle2 className="w-3 h-3 mr-1"/> Published</Badge>;
      case 'rejected': return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1"/> Rejected</Badge>;
      default: return <Badge variant="secondary" className="bg-yellow-500/15 text-yellow-600 hover:bg-yellow-500/25"><Clock className="w-3 h-3 mr-1"/> Pending Review</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-primary">Content & Media Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage press releases, gallery photos, and news updates.</p>
        </div>
        <Button onClick={() => document.getElementById('new-post-tab')?.click()}>
          <Plus className="w-4 h-4 mr-2" /> New Submission
        </Button>
      </div>

      <Tabs defaultValue="submissions" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="new" id="new-post-tab">Create New</TabsTrigger>
        </TabsList>

        {/* --- View Submissions Tab --- */}
        <TabsContent value="submissions" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    {getStatusBadge(item.status)}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="uppercase text-[10px] tracking-wider mb-2">
                      {item.type.replace('_', ' ')}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{format(new Date(item.created_at), 'MMM d, yyyy')}</span>
                  </div>
                  <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  {item.status === 'rejected' && item.feedback && (
                    <div className="bg-red-50 p-3 rounded-md text-xs text-red-600 border border-red-100">
                      <strong>Admin Feedback:</strong> {item.feedback}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {submissions.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No submissions yet. Create your first post!</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* --- Create New Tab --- */}
        <TabsContent value="new" className="mt-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Submit Content for Approval</CardTitle>
              <CardDescription>
                Upload high-quality images and write detailed descriptions. All content requires admin approval before publishing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Image Upload */}
                  <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image</FormLabel>
                        <FormControl>
                          <ImageUpload 
                            value={field.value} 
                            onChange={field.onChange} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>Recommended ratio 16:9. Max size 5MB.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Annual Placement Drive 2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="gallery">Photo Gallery</SelectItem>
                              <SelectItem value="press_release">Press Release</SelectItem>
                              <SelectItem value="achievement">Student Achievement</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description / Article Body</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write the full details here..." 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                      Reset
                    </Button>
                    <Button type="submit" disabled={isLoading} className="min-w-[120px]">
                      {isLoading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" /> Submit for Review</>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentMediaDashboard;