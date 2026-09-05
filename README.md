# porta.finance site

Marketing refresh for [porta.finance](https://porta.finance) — Vite + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion.

See **[PLAN.md](./PLAN.md)** for IA, brand tokens, live vs roadmap rules, and do-not-claim copy.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview  # preview production build
```

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- framer-motion (respects `prefers-reduced-motion`)
- react-router-dom (Home at `/`)

## Notes

- Android APK (when staged): `public/downloads/porta-wallet.apk`
- Chrome extension: labeled dogfood soon — no fake Web Store URL
- Never publish seeds, keys, or overclaim roadmap features as live
