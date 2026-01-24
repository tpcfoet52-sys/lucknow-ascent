import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/admin/StatsCard';
import { RecentApplications } from '@/components/admin/RecentApplications';
import QuickActions from "@/components/admin/QuickActions";
import { TrendingUp, TrendingDown, Plus } from 'lucide-react';

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your placement cell today.</p>
        </div>
        <Button variant="navy" className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Post
        </Button>
      </div>

      {/* Stats Cards Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="1,234"
          trend="+12% from last month"
          trendIcon={TrendingUp}
          trendDirection="up"
        />
        <StatsCard
          title="Active Jobs"
          value="56"
          trend="+4% from last month"
          trendIcon={TrendingUp}
          trendDirection="up"
        />
        <StatsCard
          title="Applications"
          value="892"
          trend="+8% from last month"
          trendIcon={TrendingUp}
          trendDirection="up"
        />
        <StatsCard
          title="Upcoming Events"
          value="12"
          trend="-2% from last month"
          trendIcon={TrendingDown}
          trendDirection="down"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-7">
        {/* Left Column: Recent Applications */}
        <div className="col-span-4">
          <RecentApplications />
        </div>
        {/* Right Column: Quick Actions */}
        <div className="col-span-3">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;