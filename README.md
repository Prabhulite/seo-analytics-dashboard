# SEO Analytics Dashboard

A modern, dark-themed SEO analytics dashboard built with **React + Vite + TypeScript + Tailwind CSS v4** and **Recharts**.

It visualises the metrics an SEO team cares about: organic traffic by channel,
keyword ranking movements, referring backlinks, and traffic-source breakdown.

## Features

- 📈 **Traffic overview** — multi-series area chart (organic / direct / referral)
- 🔑 **Top keywords** table with position change, search volume, and difficulty
- 🔗 **Backlinks** bar chart of links acquired per month
- 🥧 **Traffic sources** donut chart
- 📊 **KPI cards** with trend indicators
- Fully responsive, collapsible sidebar layout

> Data is mocked in [`src/data.ts`](src/data.ts) — swap it for a real SEO API
> (Google Search Console, Ahrefs, SEMrush, etc.) without touching the UI.

## Tech stack

React 19 · Vite 7 · TypeScript · Tailwind CSS v4 · Recharts · lucide-react

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the build
```

## License

MIT
