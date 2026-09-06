# porta.finance refresh — kick plan (Senior FE)

**Date:** 2026-09-05 · **Soft tip context:** `00034-6vs` · **Path:** `/workspace/porta-finance-site/`

## Stack (locked)

| Choice | Why |
|--------|-----|
| **Vite + React 19 + TypeScript** | Fastest path to polished marketing; tiny bundle; CDN-deployable |
| **Tailwind CSS v4** | Utility speed + design tokens (Porta cyan) |
| **Framer Motion** | Smooth section reveals / hero without jank |
| **React Router** | Home + optional `/roadmap` deep-link later |

Deferred: Next.js App Router — revisit if SEO/blog needs SSR; Vite static is enough for v1 ship.

## Brand

- **Cosmic navy/purple** backgrounds (`#07060f` → `#12081f`) with cyan wireframe mesh + glow particles
- **Portal sphere** (cyan→magenta globe) as favicon + header mark (`/logo.png`, `/favicon.svg`, `/brand/portal-hero.webp`)
- Hero includes portal + multichain ring graphic (Coming — not a live chain list)
- **Lavender** (`#a89eff`) on key words; **cyan** (`#00eaff`) CTAs; magenta only as atmospheric support
- Typography: IBM Plex Sans, self-hosted latin 400/600/700 (no Google Fonts)
- Motion: below-fold fade+rise only; Hero H1 is static for LCP; respect `prefers-reduced-motion`
- Official links only: porta.finance, t.me/PortaWallet_bot, t.me/PortaWallet, t.me/PortaNews, linkedin.com/company/portawallet, youtube.com/@PortaWallet — no X

## IA

1. **Nav** — Live now · Roadmap · Open bot (TG)
2. **Hero** — Honest category line (not “ultimate DeFi trading”)
3. **Live now** — what’s actually dogfoodable today
4. **Roadmap** — ambitions clearly labeled *Coming / not live*
5. **Footer** — © DracoLabs · official links only (no X)

### Live now (honest)

| Surface | Link / status |
|---------|----------------|
| Telegram bot | https://t.me/PortaWallet_bot |
| Mini App | https://production-wallet-telegram-omytp43vwa-ew.a.run.app (soft dogfood tip `00034-6vs`; primary entry `@PortaWallet_bot`) |
| Chrome extension | CWS Unlisted path — button present, label “Dogfood soon” until store URL exists |
| Android APK | `/downloads/porta-wallet.apk` (staged from dogfood build when present) |

### Roadmap (not live — F6→F3 style ambitions)

- **Trust / swap honesty** (Phase 1 G1–G8) — when Joshua green-lights
- **Smart Actions alerts → Review in Porta** (alerts in Telegram) — GTM wedge
- **Protected swap** (opt-in, never “MEV-proof”)
- **Account abstraction** — social recovery / session limits as *building*, not shipped gasless
- **Trading strategies / copy** — later; not brand lead

## Copy rules (do-not-claim)

Never: MEV-proof · fake gasless · auto-trading live · AA social recovery live · “ultimate DeFi” as a primary/live claim · pretend roadmap features are live.

**Hero line:** *Porta — independent non-custodial wallet in Telegram (Mini App + @PortaWallet_bot). Not a Telegram product. Create or import, check balances, send, and swap with clear review. Alerts and smarter trading are on the roadmap.* Heritage “Ultimate DeFi Trading Wallet” art may appear as visual texture only — not the H1.

## Deliverable this kick

Scaffold that `npm install && npm run dev` runs; PLAN.md + polished Home with Live now / Roadmap; cyan brand; no secrets/seeds.
