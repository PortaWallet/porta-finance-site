# porta.finance site

Marketing site for [porta.finance](https://www.porta.finance) — Next.js 15 App Router, React 19, strict TypeScript, Tailwind CSS v4, shadcn/ui + Radix, Framer Motion, next-themes, Lucide.

See **[PLAN.md](./PLAN.md)** for IA, copy honesty, HOLDs, and do-not-claim rules.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build          # .next/ (Node / Vercel)
npm run build:preview  # out/ static export for PR preview only
npm run start          # production server
npm test               # honesty + brand tests
```

## Stack

- Next.js 15 App Router (`app/` `components/` `lib/` `content/`)
- Tailwind CSS v4 + OKLCH tokens, Inter via `next/font`
- shadcn/ui (New York) on Radix
- framer-motion springs (respects `prefers-reduced-motion`)
- next-themes dark / light / system
- SSG + daily ISR (`revalidate = 86400`)

## Honesty

- Primary CTA: **Open in Telegram** → https://t.me/PortaWallet_bot
- Contact: hello@porta.finance
- Apps: Telegram Mini App / Extension (Coming · CWS Unlisted soon; Agents screens on Ext/web) / Mobile APK (GitHub release, not Live)
- Official links once below Apps (footer) — never duplicated into Apps
- No retail execute CTAs (`Swap now`, `Bridge now`, `Confirm swap`). AcceptAll is HOLD · dead on `/roadmap`.
- Roadmap: `/roadmap` EN one-pager — HOLD / LIVE / Coming from the Crypto + DeFi SoT. No Hebrew. No fake metrics.
- Agents: Joshua EN SoT verbatim (English only — no Hebrew on www). One line: you lend a small, controlled budget — not the wallet. `swap_24h` greyed / not active.
- AA honesty: smart account + UserOps + self-funded gas; sponsorship / gasless / social recovery not live
- No fake sponsored UI (`$0 gas`, Sponsored send)
- No client-side API keys or secrets

## HOLDs

- **F6.4 OFF**
- **Retail feature flags OFF**
- **AcceptAll dead**
- **Publish HOLD** — do not cut over GitHub Pages or production from this rebuild. PR only.
- **Preview HOLD** — `preview.yml` publishes a static export to `preview-pr-<n>` / `preview/pr-<n>` and a downloadable artifact. It does **not** use the `github-pages` environment or edit `pages.yml` / `deploy-pages.yml`.
