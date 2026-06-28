import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Kpi } from "../data";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const up = kpi.delta >= 0;
  const good = up === kpi.goodWhenUp;

  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5 transition-colors hover:border-white/10">
      <div className="text-sm text-gray-400">{kpi.label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-bold text-white">{kpi.value}</div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            good ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {up ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
          {Math.abs(kpi.delta)}%
        </div>
      </div>
    </div>
  );
}
