import { Campaign, ChartData, MetricCard } from '@/types/dashboard';
import { addDays, format, subDays } from 'date-fns';

export const generateMetricCards = (): MetricCard[] => {
  return [
    {
      title: 'Total Views',
      value: 2457,
      change: 12.5,
      trend: 'up',
    },
    {
      title: 'Total Clicks',
      value: 427,
      change: 8.2,
      trend: 'up',
    },
    {
      title: 'Conversions',
      value: 64,
      change: -3.1,
      trend: 'down',
    },
    {
      title: 'CTR',
      value: 3.2,
      change: 1.5,
      trend: 'up',
    },
  ];
};

export const generateChartData = (days: number): ChartData[] => {
  const data: ChartData[] = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, 'MMM dd'),
      views: Math.floor(Math.random() * 500) + 100,
      clicks: Math.floor(Math.random() * 100) + 20,
      conversions: Math.floor(Math.random() * 20) + 5,
    });
  }

  return data;
};

export const generateCampaigns = (): Campaign[] => {
  const campaigns: Campaign[] = [];
  const statuses: Campaign['status'][] = ['active', 'paused', 'completed'];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    const startDate = subDays(today, Math.floor(Math.random() * 90));
    const impressions = Math.floor(Math.random() * 10000) + 1000;
    const clicks = Math.floor(impressions * (Math.random() * 0.2));
    const conversions = Math.floor(clicks * (Math.random() * 0.15));
    const budget = Math.floor(Math.random() * 10000) + 5000;
    const spent = Math.floor(budget * (Math.random() * 0.9));

    campaigns.push({
      id: `camp-${i + 1}`,
      name: `Campaign ${i + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      budget,
      spent,
      impressions,
      clicks,
      conversions,
      startDate: format(startDate, 'yyyy-MM-dd'),
    });
  }

  return campaigns;
};
