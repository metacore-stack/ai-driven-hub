import { MetricCard } from '@/types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  data: MetricCard;
}

export function MetricCardComponent({ data }: MetricCardProps) {
  const { title, value, change, trend } = data;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {trend === 'up' ? (
          <TrendingUp
            className="h-4 w-4 text-green-500"
            aria-hidden="true"
          />
        ) : (
          <TrendingDown
            className="h-4 w-4 text-red-500"
            aria-hidden="true"
          />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {change > 0 ? '+' : ''}
          {change}% from last period
        </p>
      </CardContent>
    </Card>
  );
}
