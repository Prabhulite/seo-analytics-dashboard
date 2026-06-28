import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { trafficData } from "../data";

const tooltipStyle = {
  background: "#0e131d",
  border: "1px solid #1f2937",
  borderRadius: 12,
  color: "#e5e7eb",
  fontSize: 12,
};

export function TrafficChart() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">Traffic Overview</h3>
        <p className="text-xs text-gray-500">Sessions by channel (thousands)</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trafficData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="g-organic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-direct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-referral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey="organic" stroke="#6366f1" strokeWidth={2} fill="url(#g-organic)" />
            <Area type="monotone" dataKey="direct" stroke="#22d3ee" strokeWidth={2} fill="url(#g-direct)" />
            <Area type="monotone" dataKey="referral" stroke="#34d399" strokeWidth={2} fill="url(#g-referral)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
