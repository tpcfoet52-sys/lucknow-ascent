import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  CheckSquare,
  FileEdit,
  LogOut,
  User,
  Users,
  UserCog
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLogout } from '@/hooks/useLogout';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: CheckSquare, label: 'Approvals', href: '/admin/approvals' },
  { icon: UserCog, label: 'Manage Team', href: '/admin/team' },
  { icon: Users, label: 'Coordinators', href: '/admin/users' },
  { icon: FileEdit, label: 'CMS', href: '/admin/cms' },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useLogout();

  return (
    <div className="flex h-full flex-col justify-between bg-card border-r border-border">
      <div className="px-4 py-6">
        {/* Brand */}
        <div className="mb-6 px-2">
          <p className="text-accent font-medium text-sm uppercase tracking-wider">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
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
                    "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/15"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                  )}
                >
                  <item.icon className={cn("mr-2.5 h-4 w-4", isActive ? "text-accent" : "")} />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-4 py-5 border-t border-border">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Admin User</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};
