import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data based on the image
const recentApplications = [
  {
    id: "APP-001",
    applicant: { name: "John Doe", email: "john@example.com" },
    job: "Software Engineer",
    date: "2023-10-26",
    status: "Pending",
  },
  {
    id: "APP-002",
    applicant: { name: "Jane Smith", email: "jane@example.com" },
    job: "Product Manager",
    date: "2023-10-25",
    status: "Reviewed",
  },
  {
    id: "APP-003",
    applicant: { name: "Robert Johnson", email: "robert@example.com" },
    job: "Data Analyst",
    date: "2023-10-24",
    status: "Pending",
  },
  {
    id: "APP-004",
    applicant: { name: "Emily Davis", email: "emily@example.com" },
    job: "UX Designer",
    date: "2023-10-23",
    status: "Rejected",
  },
];

export const RecentApplications = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="p-6 pb-4 border-b">
        <h3 className="text-lg font-semibold">Recent Applications</h3>
        <p className="text-sm text-muted-foreground">A list of recent job applications.</p>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Job</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentApplications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${app.applicant.name}`} alt={app.applicant.name} />
                        <AvatarFallback>{app.applicant.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium leading-none">{app.applicant.name}</p>
                        <p className="text-sm text-muted-foreground">{app.applicant.email}</p>
                    </div>
                </TableCell>
                <TableCell>{app.job}</TableCell>
                <TableCell className="text-muted-foreground">{app.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary"
                    className={
                        app.status === 'Pending' ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        app.status === 'Reviewed' ? "bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900/30 dark:text-blue-400" :
                        "bg-gray-100 text-gray-800 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-300"
                    }
                  >
                    {app.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};