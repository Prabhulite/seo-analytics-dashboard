import { contentPages } from "../data";

export function Content() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#121826] p-5">
      <h3 className="text-sm font-semibold text-white">Top performing content</h3>
      <p className="mb-4 text-xs text-gray-500">Clicks and impressions from organic search</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="pb-2 font-medium">Page</th>
              <th className="pb-2 text-right font-medium">Clicks</th>
              <th className="pb-2 text-right font-medium">Impressions</th>
              <th className="pb-2 text-right font-medium">CTR</th>
              <th className="pb-2 text-right font-medium">Avg. pos.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {contentPages.map((p) => (
              <tr key={p.path} className="text-gray-300">
                <td className="py-3">
                  <div className="font-medium text-gray-100">{p.title}</div>
                  <div className="text-xs text-gray-500">{p.path}</div>
                </td>
                <td className="py-3 text-right">{p.clicks.toLocaleString()}</td>
                <td className="py-3 text-right">{p.impressions.toLocaleString()}</td>
                <td className="py-3 text-right">{p.ctr}%</td>
                <td className="py-3 text-right">{p.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
