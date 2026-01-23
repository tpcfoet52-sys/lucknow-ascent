import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TeamStructure from "./pages/TeamStructure";
import AboutUniversity from "./pages/AboutUniversity";
import AboutTPC from "./pages/AboutTPC";
import AdminLogin from "./pages/AdminLogin";
import EventsPage from "./pages/Events";

// Import Admin components
import AdminLayout from "./components/admin/AdminLayout";
import DashboardOverview from "./pages/admin/DashboardOverview";
import EventHospitalityDashboard from "./pages/coordinator/EventHospitalityDashboard";
import EventsManagement from "./pages/admin/EventsManagement";
import UserManagement from "./pages/admin/UserManagement";

const queryClient = new QueryClient();

// A simple placeholder component for admin pages that are under construction
const PlaceholderAdminPage = ({ title }: { title: string }) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">{title}</h1>
      <p className="text-muted-foreground mt-2">This module is currently under development.</p>
    </div>
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center bg-gray-50/50 dark:bg-gray-800/50">
      <div className="rounded-full bg-gray-100 p-3 mb-4 dark:bg-gray-800">
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium">Content coming soon</h3>
      <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-1">
        We are working hard to bring you the {title.toLowerCase()} feature.
      </p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/team-structure" element={<TeamStructure />} />
          <Route path="/about-university" element={<AboutUniversity />} />
          <Route path="/about-tpc" element={<AboutTPC />} />
          <Route path="/events" element={<EventsPage />} />
          
          {/* Admin Login - Standalone Page */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Dashboard - Protected Area with Sidebar Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="events" element={<EventsManagement />} />
            
            {/* Dashboard Overview */}
            <Route path="dashboard" element={<DashboardOverview />} />
            
            {/* Placeholder Pages for Sidebar Links */}
            <Route path="jobs" element={<PlaceholderAdminPage title="Jobs Management" />} />
            <Route path="applications" element={<PlaceholderAdminPage title="Applications" />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="events" element={<PlaceholderAdminPage title="Events & Calendar" />} />
            <Route path="cms" element={<PlaceholderAdminPage title="Content Management" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;