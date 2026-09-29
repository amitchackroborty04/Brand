import { AnalyticsControls } from "./_components/analytics-controls";
import { PerformanceChart } from "./_components/performance-chart";
import { StatsGrid } from "./_components/stats-grid";

export default function AnalyticsPage() {
  return (
    <main className="analytics-page">
      <section className="analytics-content">
        <div className="analytics-intro"><h1>Analytics</h1><p>Discover active campaigns from this Content Rewards community</p></div>
        <AnalyticsControls />
        <StatsGrid />
        <PerformanceChart />
      </section>
    </main>
  );
}
