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
