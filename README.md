# School Website Demo Platform

Premium **Next.js (App Router)** demo with **three instant themes** — no page reload:

| Theme           | Vibe                                      |
| --------------- | ----------------------------------------- |
| **Smart**       | Futuristic glass, neon, optional 3D hero  |
| **International** | Editorial minimal, photography-led      |
| **Trust**       | Traditional Indian school, notice board   |

## Features

- Global **theme toggle** (header) + **localStorage** persistence
- **Alt+1 / Alt+2 / Alt+3** — quick theme switch for demos
- **Framer Motion** — section reveals, theme cross-fade, hover micro-interactions
- **Interactive notice board** — filters, expandable notices, theme-specific visuals
- **React Three Fiber** hero (Smart only, lazy-loaded)
- Scroll **progress bar**, **WhatsApp FAB**, **admissions urgency** badge, **stats** strip
- Mobile-first, responsive layout
- Marketing SEO foundations: metadata, robots, sitemap, FAQ schema
- UTM-ready admissions form fields for campaign attribution

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WHATSAPP` — digits only (e.g. `919876543210` for India).
- `NEXT_PUBLIC_SITE_URL` — canonical base URL (e.g. `https://schooldemo.com`).
- `MONGODB_URI` — MongoDB Atlas connection string for lead storage.
- `MONGODB_DB_NAME` — database name (default: `school`).

## Deploy (Vercel)

Push to GitHub and import the repo in Vercel, or use the Vercel CLI. Set `NEXT_PUBLIC_WHATSAPP` in project environment variables.

## Project structure

- `app/` — layout, globals, page
- `components/` — sections + chrome (`Navbar`, `Hero`, `InteractiveBoard`, …)
- `context/ThemeContext.tsx` — theme state + persistence
- `themes/` — theme metadata
- `lib/boardNotices.ts` — demo notice data

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint


## Lead capture API

The admissions form posts to `POST /api/leads` and stores enquiries in MongoDB collection `leads`.
