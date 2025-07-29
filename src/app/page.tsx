import { MetricCardComponent } from '@/components/metric-card';
import { AnalyticsChart } from '@/components/analytics-chart';
import { CampaignsTable } from '@/components/campaigns-table';
import { generateChartData, generateMetricCards, generateCampaigns } from '@/lib/mock-data';

export default function Home() {
  const metrics = generateMetricCards();
  const chartData = generateChartData(30);
  const campaigns = generateCampaigns();

  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-4xl font-bold">ADmyBRAND Insights</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCardComponent key={index} data={metric} />
        ))}
      </div>

      <AnalyticsChart data={chartData} />
      
      <CampaignsTable campaigns={campaigns} />
    </main>
  );
}
