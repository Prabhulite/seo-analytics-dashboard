// Mock SEO data powering the dashboard. Swap with a real API later.

export type Kpi = {
  id: string;
  label: string;
  value: string;
  delta: number; // percent change vs. previous period
  goodWhenUp: boolean;
};

export const kpis: Kpi[] = [
  { id: "traffic", label: "Organic Traffic", value: "128.4K", delta: 12.3, goodWhenUp: true },
  { id: "keywords", label: "Keywords Ranking", value: "3,210", delta: 4.8, goodWhenUp: true },
  { id: "backlinks", label: "Backlinks", value: "18,932", delta: 9.1, goodWhenUp: true },
  { id: "position", label: "Avg. Position", value: "12.7", delta: -3.2, goodWhenUp: false },
];

export type TrafficPoint = { month: string; organic: number; direct: number; referral: number };

export const trafficData: TrafficPoint[] = [
  { month: "Jan", organic: 42, direct: 18, referral: 9 },
  { month: "Feb", organic: 48, direct: 19, referral: 11 },
  { month: "Mar", organic: 55, direct: 21, referral: 12 },
  { month: "Apr", organic: 61, direct: 20, referral: 14 },
  { month: "May", organic: 67, direct: 23, referral: 15 },
  { month: "Jun", organic: 72, direct: 24, referral: 17 },
  { month: "Jul", organic: 78, direct: 26, referral: 16 },
  { month: "Aug", organic: 85, direct: 27, referral: 19 },
  { month: "Sep", organic: 92, direct: 29, referral: 21 },
  { month: "Oct", organic: 101, direct: 31, referral: 22 },
  { month: "Nov", organic: 114, direct: 33, referral: 24 },
  { month: "Dec", organic: 128, direct: 35, referral: 27 },
];

export type Source = { name: string; value: number };

export const sources: Source[] = [
  { name: "Organic Search", value: 52 },
  { name: "Direct", value: 21 },
  { name: "Referral", value: 14 },
  { name: "Social", value: 9 },
  { name: "Paid", value: 4 },
];

export type BacklinkPoint = { month: string; links: number };

export const backlinks: BacklinkPoint[] = [
  { month: "Jul", links: 980 },
  { month: "Aug", links: 1240 },
  { month: "Sep", links: 1510 },
  { month: "Oct", links: 1320 },
  { month: "Nov", links: 1870 },
  { month: "Dec", links: 2140 },
];

export type Keyword = {
  keyword: string;
  position: number;
  prevPosition: number;
  volume: number;
  difficulty: number;
};

export const keywords: Keyword[] = [
  { keyword: "seo analytics tool", position: 3, prevPosition: 7, volume: 14800, difficulty: 62 },
  { keyword: "keyword rank tracker", position: 5, prevPosition: 4, volume: 9200, difficulty: 48 },
  { keyword: "backlink checker", position: 2, prevPosition: 5, volume: 22100, difficulty: 71 },
  { keyword: "organic traffic report", position: 8, prevPosition: 12, volume: 5400, difficulty: 35 },
  { keyword: "site audit dashboard", position: 6, prevPosition: 6, volume: 3300, difficulty: 41 },
  { keyword: "serp position tracking", position: 4, prevPosition: 9, volume: 7600, difficulty: 53 },
  { keyword: "content gap analysis", position: 11, prevPosition: 15, volume: 2900, difficulty: 39 },
];

export const COLORS = ["#6366f1", "#22d3ee", "#34d399", "#f59e0b", "#f472b6"];

export type ReferringDomain = {
  domain: string;
  authority: number;
  links: number;
  type: "Dofollow" | "Nofollow";
};

export const referringDomains: ReferringDomain[] = [
  { domain: "medium.com", authority: 96, links: 18, type: "Dofollow" },
  { domain: "techcrunch.com", authority: 93, links: 14, type: "Dofollow" },
  { domain: "reddit.com", authority: 91, links: 21, type: "Nofollow" },
  { domain: "smashingmagazine.com", authority: 90, links: 9, type: "Dofollow" },
  { domain: "producthunt.com", authority: 89, links: 6, type: "Dofollow" },
  { domain: "dev.to", authority: 88, links: 32, type: "Dofollow" },
  { domain: "hashnode.com", authority: 78, links: 11, type: "Nofollow" },
];

export type ContentPage = {
  title: string;
  path: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export const contentPages: ContentPage[] = [
  { title: "The Complete SEO Guide", path: "/blog/seo-guide", clicks: 8420, impressions: 142000, ctr: 5.9, position: 3.2 },
  { title: "Keyword Research 101", path: "/blog/keyword-research", clicks: 6210, impressions: 98000, ctr: 6.3, position: 4.1 },
  { title: "Technical SEO Checklist", path: "/blog/technical-seo", clicks: 4870, impressions: 76000, ctr: 6.4, position: 5.0 },
  { title: "Link Building Strategies", path: "/blog/link-building", clicks: 3960, impressions: 64000, ctr: 6.2, position: 6.3 },
  { title: "Core Web Vitals Explained", path: "/blog/core-web-vitals", clicks: 3120, impressions: 51000, ctr: 6.1, position: 7.4 },
];

export type AuditIssue = {
  title: string;
  severity: "Error" | "Warning" | "Notice";
  count: number;
  description: string;
};

export const auditScore = 78;

export const auditIssues: AuditIssue[] = [
  { title: "Pages with missing meta description", severity: "Error", count: 12, description: "Meta descriptions help search engines and users understand your pages." },
  { title: "Broken internal links (4xx)", severity: "Error", count: 5, description: "Broken links hurt crawlability and user experience." },
  { title: "Images missing alt text", severity: "Warning", count: 34, description: "Alt text improves accessibility and image search ranking." },
  { title: "Slow pages (LCP > 2.5s)", severity: "Warning", count: 8, description: "Largest Contentful Paint affects your Core Web Vitals." },
  { title: "Duplicate title tags", severity: "Warning", count: 6, description: "Unique titles help pages rank for distinct queries." },
  { title: "Pages without an H1", severity: "Notice", count: 9, description: "A clear H1 signals the main topic of a page." },
];
