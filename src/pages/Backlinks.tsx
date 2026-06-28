import { StatCard } from "../components/StatCard";
import { BacklinksChart } from "../components/BacklinksChart";
import { referringDomains } from "../data";

export function Backlinks() {
  const dofollow = Math.round(
    (referringDomains.filter((d) => d.type === "Dofollow").length / referringDomains.length) * 100,
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total backlinks" value="18,932" hint="+9.1% this month" />
        <StatCard label="Referring domains" value={referringDomains.length.toString()} />
        <StatCard label="Dofollow share" value={`${dofollow}%`} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <BacklinksChart />

        <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
          <h3 className="text-sm font-semibold text-white">Top referring domains</h3>
          <p className="mb-4 text-xs text-gray-500">By domain authority</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
                  <th className="pb-2 font-medium">Domain</th>
                  <th className="pb-2 text-right font-medium">DA</th>
                  <th className="pb-2 text-right font-medium">Links</th>
                  <th className="pb-2 text-right font-medium">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {referringDomains.map((d) => (
                  <tr key={d.domain} className="text-gray-300">
                    <td className="py-2.5 font-medium text-gray-100">{d.domain}</td>
                    <td className="py-2.5 text-right">{d.authority}</td>
                    <td className="py-2.5 text-right">{d.links}</td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] ${
                          d.type === "Dofollow"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-gray-500/15 text-gray-400"
                        }`}
                      >
                        {d.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
