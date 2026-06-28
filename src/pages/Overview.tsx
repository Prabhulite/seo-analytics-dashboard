import { KpiCard } from "../components/KpiCard";
import { TrafficChart } from "../components/TrafficChart";
import { SourcesChart } from "../components/SourcesChart";
import { BacklinksChart } from "../components/BacklinksChart";
import { KeywordsTable } from "../components/KeywordsTable";
import { kpis } from "../data";

export function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.id} kpi={k} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrafficChart />
        </div>
        <SourcesChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <KeywordsTable />
        </div>
        <BacklinksChart />
      </div>
    </div>
  );
}
