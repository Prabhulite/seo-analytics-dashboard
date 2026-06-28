import { LayoutDashboard, Search, Link2, FileText, Globe, Settings } from "lucide-react";
import type { View } from "../App";

const nav: { id: View; icon: typeof LayoutDashboard; label: string }[] = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "keywords", icon: Search, label: "Keywords" },
  { id: "backlinks", icon: Link2, label: "Backlinks" },
  { id: "content", icon: FileText, label: "Content" },
  { id: "audit", icon: Globe, label: "Site Audit" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ active, onSelect }: { active: View; onSelect: (v: View) => void }) {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-white/5 bg-[#0e131d] p-4 md:flex">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
          S
        </div>
        <div>
          <div className="text-sm font-semibold text-white">SEOscope</div>
          <div className="text-[11px] text-gray-500">Analytics</div>
        </div>
      </div>

      <nav className="mt-6 space-y-1">
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => onSelect(n.id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              active === n.id
                ? "bg-indigo-500/15 text-indigo-300"
                : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
            }`}
          >
            <n.icon className="size-4" />
            {n.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-gray-400">
        <div className="font-medium text-gray-200">Pro tip</div>
        Track 3,000+ keywords across competitors in real time.
      </div>
    </aside>
  );
}
