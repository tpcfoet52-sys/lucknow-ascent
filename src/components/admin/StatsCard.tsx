import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendIcon: LucideIcon;
  trendDirection: 'up' | 'down';
}

export const StatsCard = ({ title, value, trend, trendIcon: TrendIcon, trendDirection }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          <TrendIcon className={cn("h-4 w-4 mr-1", trendDirection === 'up' ? "text-green-500" : "text-red-500")} />
          <span className={trendDirection === 'up' ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
            {trend}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};