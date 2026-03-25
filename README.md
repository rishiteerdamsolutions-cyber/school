# e-School

Next.js (App Router) demo with **three instant themes** — no page reload:

| Theme | Hero |
| ----- | ---- |
| **Smart School** | Full-screen video, Rubik headline, shaped CTA |
| **International School** | Full-screen video, Instrument Serif + Inter, liquid-glass UI |
| **Regular School** | Full-screen video, dark cinematic layout |

## Features

- **Hero theme toggle** (primary switch) + `localStorage` persistence
- **Framer Motion** — section reveals, theme cross-fade
- **Interactive notice board** — filters, expandable notices
- Scroll **progress bar**, **WhatsApp FAB**, admissions **badge**
- UTM-ready admissions form → `POST /api/leads` (MongoDB)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WHATSAPP` — digits only (e.g. `919876543210`).
- `NEXT_PUBLIC_SITE_URL` — canonical base URL.
- `MONGODB_URI` / `MONGODB_DB_NAME` — for lead storage.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint
