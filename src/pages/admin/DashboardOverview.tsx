import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          This module is currently under development.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center bg-gray-50/50 dark:bg-gray-800/50 w-full max-w-2xl">
        <div className="rounded-full bg-gray-100 p-3 mb-4 dark:bg-gray-800">
          <svg
            className="h-8 w-8 text-gray-400"
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
        <h3 className="text-xl font-medium">Coming Soon</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-2">
          We are working hard to build a comprehensive dashboard for you. Check back later for updates.
        </p>
      </div>
    </div>
  );
};

export default DashboardOverview;