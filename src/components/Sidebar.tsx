import { LayoutDashboard, Search, Link2, FileText, Globe, Settings } from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Search, label: "Keywords" },
  { icon: Link2, label: "Backlinks" },
  { icon: FileText, label: "Content" },
  { icon: Globe, label: "Site Audit" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
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
          <a
            key={n.label}
            href="#"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              n.active
                ? "bg-indigo-500/15 text-indigo-300"
                : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
            }`}
          >
            <n.icon className="size-4" />
            {n.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-gray-400">
        <div className="font-medium text-gray-200">Pro tip</div>
        Track 3,000+ keywords across competitors in real time.
      </div>
    </aside>
  );
}
