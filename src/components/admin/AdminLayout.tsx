import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

const AdminLayout = () => {
  return (
    // Added pt-16 md:pt-20 to account for the fixed Header
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 font-sans pt-16 md:pt-20">
      <aside className="w-64 hidden md:block flex-shrink-0 overflow-y-auto">
        <AdminSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        {/* The nested admin page will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;