import { useState } from "react";
import { Check } from "lucide-react";

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        enabled ? "bg-indigo-500" : "bg-white/10"
      }`}
      aria-pressed={enabled}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white transition-all ${
          enabled ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-200 outline-none focus:border-indigo-500/60";

export function Settings() {
  const [project, setProject] = useState("My Website");
  const [domain, setDomain] = useState("example.com");
  const [country, setCountry] = useState("India");
  const [weekly, setWeekly] = useState(true);
  const [rankAlerts, setRankAlerts] = useState(true);
  const [auditAlerts, setAuditAlerts] = useState(false);
  const [saved, setSaved] = useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <form onSubmit={save} className="max-w-2xl space-y-6">
      <section className="rounded-2xl border border-white/5 bg-[#121826] p-5">
        <h3 className="text-sm font-semibold text-white">Project</h3>
        <p className="mb-4 text-xs text-gray-500">The site this dashboard is tracking.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs text-gray-400">Project name</span>
            <input className={inputCls} value={project} onChange={(e) => setProject(e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-gray-400">Domain</span>
            <input className={inputCls} value={domain} onChange={(e) => setDomain(e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-gray-400">Target country</span>
            <select className={inputCls} value={country} onChange={(e) => setCountry(e.target.value)}>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Global</option>
            </select>
          </label>
        </div>
      </section>

      <section className="rounded-2xl border border-white/5 bg-[#121826] p-5">
        <h3 className="text-sm font-semibold text-white">Notifications</h3>
        <p className="mb-4 text-xs text-gray-500">Choose what we email you about.</p>
        <div className="space-y-3">
          {[
            ["Weekly performance report", weekly, setWeekly],
            ["Keyword ranking change alerts", rankAlerts, setRankAlerts],
            ["Site audit issue alerts", auditAlerts, setAuditAlerts],
          ].map(([label, value, setter]) => (
            <div key={label as string} className="flex items-center justify-between">
              <span className="text-sm text-gray-300">{label as string}</span>
              <Toggle
                enabled={value as boolean}
                onChange={setter as (v: boolean) => void}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
        >
          Save changes
        </button>
        {saved && (
          <span className="flex items-center gap-1 text-sm text-emerald-400">
            <Check className="size-4" /> Saved
          </span>
        )}
      </div>
    </form>
  );
}
