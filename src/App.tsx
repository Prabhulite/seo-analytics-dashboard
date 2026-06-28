import { Bell, Search } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { KpiCard } from "./components/KpiCard";
import { TrafficChart } from "./components/TrafficChart";
import { SourcesChart } from "./components/SourcesChart";
import { BacklinksChart } from "./components/BacklinksChart";
import { KeywordsTable } from "./components/KeywordsTable";
import { kpis } from "./data";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/5 bg-[#0b0f17]/80 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold text-white">SEO Overview</h1>
            <p className="text-xs text-gray-500">example.com · last 30 days</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="hidden items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-400 sm:flex">
              <Search className="size-4" />
              <input
                placeholder="Search…"
                className="w-28 bg-transparent outline-none placeholder:text-gray-600"
              />
            </label>
            <button className="grid size-9 place-items-center rounded-lg border border-white/5 bg-white/[0.03] text-gray-400 hover:text-white">
              <Bell className="size-4" />
            </button>
            <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-semibold text-white">
              PV
            </div>
          </div>
        </header>

        <main className="space-y-6 p-6">
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
        </main>
      </div>
    </div>
  );
}
