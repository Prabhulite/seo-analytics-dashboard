import { StatCard } from "../components/StatCard";
import { KeywordsTable } from "../components/KeywordsTable";
import { keywords } from "../data";

export function Keywords() {
  const top3 = keywords.filter((k) => k.position <= 3).length;
  const top10 = keywords.filter((k) => k.position <= 10).length;
  const avg = (keywords.reduce((a, k) => a + k.position, 0) / keywords.length).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Tracked keywords" value={keywords.length.toString()} />
        <StatCard label="In top 3" value={top3.toString()} />
        <StatCard label="In top 10" value={top10.toString()} />
        <StatCard label="Avg. position" value={avg} />
      </div>
      <KeywordsTable />
    </div>
  );
}
