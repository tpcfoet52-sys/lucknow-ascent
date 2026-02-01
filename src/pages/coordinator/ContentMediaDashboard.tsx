import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Loader2, FileText, CheckCircle2, XCircle, Plus, UploadCloud, Clock, ImagePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { uploadToCloudinary } from "@/lib/cloudinary";

// --- Form Schema ---
const mediaFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  type: z.enum(["gallery", "press_release", "achievement"]),
});

type MediaFormValues = z.infer<typeof mediaFormSchema>;

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // State to control tabs programmatically
  const [activeTab, setActiveTab] = useState("submissions");

  const form = useForm<MediaFormValues>({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "gallery",
    },
  });

  // Fetch real data from Supabase
  const fetchSubmissions = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from('unified_approvals')
      .select('*')
      .in('type', ['gallery', 'press_release', 'achievement'])
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching submissions:", error);
    } else {
      setSubmissions(data as MediaSubmission[]);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const onSubmit = async (data: MediaFormValues) => {
    if (!selectedFile) {
      toast({
        title: "Image Required",
        description: "Please select an image to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // 1. Upload Image to Cloudinary
      const uploadResult = await uploadToCloudinary(selectedFile);

      // 2. Insert Record into Supabase with Cloudinary public_id
      if (supabase) {
        const { error } = await supabase.from('unified_approvals').insert([{
          title: data.title,
          description: data.description,
          type: data.type,
          image_url: uploadResult.secure_url,
          cloudinary_public_id: uploadResult.public_id, // Store for deletion if rejected
          status: 'pending',
          details: {},
        }]);

        if (error) throw error;
      }

      toast({ title: "Submission Successful", description: "Your content has been sent for admin approval." });
      
      // Reset and switch back to list view
      form.reset();
      setSelectedFile(null);
      fetchSubmissions();
      setActiveTab("submissions");
      
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit content.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-green-500 hover:bg-green-600"><CheckCircle2 className="w-3 h-3 mr-1" /> Published</Badge>;
      case 'rejected': return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Rejected</Badge>;
      default: return <Badge variant="secondary" className="bg-yellow-500/15 text-yellow-600 hover:bg-yellow-500/25"><Clock className="w-3 h-3 mr-1" /> Pending Review</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-6 pt-24 md:pt-28 space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-primary">Content & Media Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage press releases, gallery photos, and news updates.</p>
        </div>
        
        {/* Main Add Button */}
        <Button onClick={() => setActiveTab("new")} className="shadow-md">
          <Plus className="w-4 h-4 mr-2" /> New Submission
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="new">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative bg-muted">
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
            
            {/* Empty State with Explicit Button */}
            {submissions.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/30">
                <div className="bg-muted p-4 rounded-full mb-4">
                   <ImagePlus className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">No submissions yet</h3>
                <p className="mb-6 max-w-sm text-center">Get started by uploading your first press release, gallery photo, or student achievement.</p>
                <Button onClick={() => setActiveTab("new")} variant="default">
                  <Plus className="w-4 h-4 mr-2" /> Create First Submission
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <Card className="max-w-2xl mx-auto border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle>Submit Content for Approval</CardTitle>
              <CardDescription>
                Upload high-quality images and write detailed descriptions. All content requires admin approval before publishing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  {/* File Input */}
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg bg-muted/20 hover:bg-muted/50 transition-colors">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <UploadCloud className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                                className="cursor-pointer file:text-primary file:font-medium"
                                />
                            </div>
                        </div>
                        {selectedFile && (
                          <span className="text-sm text-green-600 flex items-center px-2">
                            <CheckCircle2 className="w-4 h-4 mr-1" /> {selectedFile.name} selected
                          </span>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription>Recommended ratio 16:9. Max size 5MB.</FormDescription>
                  </FormItem>

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
                        <FormLabel>Description</FormLabel>
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

                  <div className="flex justify-end gap-4 pt-4 border-t">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("submissions")}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading} className="min-w-[150px]">
                      {isLoading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</>
                      ) : (
                        <><UploadCloud className="mr-2 h-4 w-4" /> Submit for Approval</>
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
