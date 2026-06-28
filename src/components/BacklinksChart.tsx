import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { backlinks } from "../data";

export function BacklinksChart() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
      <h3 className="text-sm font-semibold text-white">New Backlinks</h3>
      <p className="text-xs text-gray-500">Referring links acquired per month</p>
      <div className="mt-2 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={backlinks} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{
                background: "#0e131d",
                border: "1px solid #1f2937",
                borderRadius: 12,
                color: "#e5e7eb",
                fontSize: 12,
              }}
            />
            <Bar dataKey="links" radius={[6, 6, 0, 0]} fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
