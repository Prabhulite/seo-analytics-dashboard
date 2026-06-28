import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { auditIssues, auditScore } from "../data";

const severityStyle = {
  Error: { icon: AlertCircle, cls: "text-rose-400 bg-rose-500/15" },
  Warning: { icon: AlertTriangle, cls: "text-amber-400 bg-amber-500/15" },
  Notice: { icon: Info, cls: "text-sky-400 bg-sky-500/15" },
} as const;

export function SiteAudit() {
  const errors = auditIssues.filter((i) => i.severity === "Error").reduce((a, i) => a + i.count, 0);
  const warnings = auditIssues
    .filter((i) => i.severity === "Warning")
    .reduce((a, i) => a + i.count, 0);

  const r = 46;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - auditScore / 100);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#121826] p-5">
          <div className="relative grid size-28 place-items-center">
            <svg className="size-28 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r={r} fill="none" stroke="#1f2937" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="#34d399"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
              />
            </svg>
            <span className="absolute text-3xl font-bold text-white">{auditScore}</span>
          </div>
          <div className="mt-2 text-sm text-gray-400">Site health score</div>
        </div>

        <StatCard label="Errors" value={errors.toString()} hint="Fix these first" />
        <StatCard label="Warnings" value={warnings.toString()} hint="Worth addressing" />
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
        <h3 className="mb-4 text-sm font-semibold text-white">Issues found</h3>
        <div className="space-y-2">
          {auditIssues.map((issue) => {
            const s = severityStyle[issue.severity];
            const Icon = s.icon;
            return (
              <div
                key={issue.title}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
              >
                <span className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg ${s.cls}`}>
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium text-gray-100">{issue.title}</div>
                    <span className="shrink-0 text-sm font-semibold text-gray-300">{issue.count}</span>
                  </div>
                  <p className="text-xs text-gray-500">{issue.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
