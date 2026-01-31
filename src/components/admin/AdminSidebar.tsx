import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  CheckSquare, // <-- Changed from Calendar to CheckSquare
  FileEdit,
  LogOut,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Briefcase, label: 'Jobs', href: '/admin/jobs' },
  { icon: FileText, label: 'Applications', href: '/admin/applications' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  // REPLACED: Events with Approvals
  { icon: CheckSquare, label: 'Approvals', href: '/admin/approvals' },
  { icon: FileEdit, label: 'CMS', href: '/admin/cms' },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col justify-between border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="px-4 py-6">
        <h2 className="mb-6 px-2 text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
          Lucknow Ascent
        </h2>
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-navy-100 text-navy-900 dark:bg-navy-800 dark:text-navy-50" 
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className={cn("mr-2 h-4 w-4", isActive ? "text-navy-700 dark:text-navy-300" : "")} />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="px-4 py-6 border-t">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="h-8 w-8 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                <User className="h-4 w-4 text-navy-700 dark:text-navy-300" />
            </div>
            <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@tpc.com</p>
            </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </Button>
      </div>
    </div>
  );
};