import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm h-full">
      <div className="p-6 pb-4 border-b">
        <h3 className="text-lg font-semibold">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common tasks and shortcuts.</p>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <Link to="/admin/users">
          <Button variant="outline" className="w-full justify-start gap-3" size="lg">
            <Users className="h-5 w-5" />
            Verify Students
          </Button>
        </Link>

        <Link to="/admin/events">
          <Button variant="outline" className="w-full justify-start gap-3" size="lg">
            <Calendar className="h-5 w-5" />
            Schedule Event
          </Button>
        </Link>

        <Link to="/admin/cms">
          <Button variant="outline" className="w-full justify-start gap-3" size="lg">
            <FileText className="h-5 w-5" />
            Manage Content
          </Button>
        </Link>

        <Link to="/admin/settings">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;