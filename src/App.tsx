import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Overview } from "./pages/Overview";
import { Keywords } from "./pages/Keywords";
import { Backlinks } from "./pages/Backlinks";
import { Content } from "./pages/Content";
import { SiteAudit } from "./pages/SiteAudit";
import { Settings } from "./pages/Settings";

export type View = "overview" | "keywords" | "backlinks" | "content" | "audit" | "settings";

const META: Record<View, { title: string; subtitle: string }> = {
  overview: { title: "SEO Overview", subtitle: "example.com · last 30 days" },
  keywords: { title: "Keywords", subtitle: "Tracked keyword rankings" },
  backlinks: { title: "Backlinks", subtitle: "Referring domains & link growth" },
  content: { title: "Content", subtitle: "Top performing pages" },
  audit: { title: "Site Audit", subtitle: "Technical health & issues" },
  settings: { title: "Settings", subtitle: "Project & notifications" },
};

export default function App() {
  const [view, setView] = useState<View>("overview");
  const meta = META[view];

  return (
    <div className="flex min-h-screen">
      <Sidebar active={view} onSelect={setView} />

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/5 bg-[#0b0f17]/80 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold text-white">{meta.title}</h1>
            <p className="text-xs text-gray-500">{meta.subtitle}</p>
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

        <main className="p-6">
          {view === "overview" && <Overview />}
          {view === "keywords" && <Keywords />}
          {view === "backlinks" && <Backlinks />}
          {view === "content" && <Content />}
          {view === "audit" && <SiteAudit />}
          {view === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
}
