import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { keywords } from "../data";

export function KeywordsTable() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
      <h3 className="text-sm font-semibold text-white">Top Keywords</h3>
      <p className="mb-4 text-xs text-gray-500">Ranking movement this month</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="pb-2 font-medium">Keyword</th>
              <th className="pb-2 font-medium">Position</th>
              <th className="pb-2 font-medium">Change</th>
              <th className="pb-2 text-right font-medium">Volume</th>
              <th className="pb-2 text-right font-medium">Difficulty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {keywords.map((k) => {
              const diff = k.prevPosition - k.position; // positive = moved up
              return (
                <tr key={k.keyword} className="text-gray-300">
                  <td className="py-3 font-medium text-gray-100">{k.keyword}</td>
                  <td className="py-3">#{k.position}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center gap-1 ${
                        diff > 0 ? "text-emerald-400" : diff < 0 ? "text-rose-400" : "text-gray-500"
                      }`}
                    >
                      {diff > 0 ? (
                        <ArrowUp className="size-3.5" />
                      ) : diff < 0 ? (
                        <ArrowDown className="size-3.5" />
                      ) : (
                        <Minus className="size-3.5" />
                      )}
                      {Math.abs(diff) || "–"}
                    </span>
                  </td>
                  <td className="py-3 text-right">{k.volume.toLocaleString()}</td>
                  <td className="py-3 text-right">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          style={{ width: `${k.difficulty}%` }}
                        />
                      </span>
                      {k.difficulty}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
