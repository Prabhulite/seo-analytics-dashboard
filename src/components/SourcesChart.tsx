import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { COLORS, sources } from "../data";

export function SourcesChart() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
      <h3 className="text-sm font-semibold text-white">Traffic Sources</h3>
      <p className="text-xs text-gray-500">Share of total sessions</p>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sources}
              dataKey="value"
              nameKey="name"
              innerRadius={52}
              outerRadius={78}
              paddingAngle={3}
              stroke="none"
            >
              {sources.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#0e131d",
                border: "1px solid #1f2937",
                borderRadius: 12,
                color: "#e5e7eb",
                fontSize: 12,
              }}
              formatter={(v: number, n: string) => [`${v}%`, n]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 space-y-1.5">
        {sources.map((s, i) => (
          <div key={s.name} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-gray-400">
              <span
                className="size-2 rounded-full"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              {s.name}
            </span>
            <span className="text-gray-200">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
