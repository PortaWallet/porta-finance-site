# porta.finance refresh — kick plan (Senior FE)

**Date:** 2026-09-05 · **Soft tip context:** `00027-5zg` · **Path:** `/workspace/porta-finance-site/`

## Stack (locked)

| Choice | Why |
|--------|-----|
| **Vite + React 19 + TypeScript** | Fastest path to polished marketing; tiny bundle; CDN-deployable |
| **Tailwind CSS v4** | Utility speed + design tokens (Porta cyan) |
| **Framer Motion** | Smooth section reveals / hero without jank |
| **React Router** | Home + optional `/roadmap` deep-link later |

Deferred: Next.js App Router — revisit if SEO/blog needs SSR; Vite static is enough for v1 ship.

## Brand

- **Cyan primary:** `#22E0D0` (Porta cyan) on near-black `#0A0F14`
- Typography: system / Inter via Google fonts
- Motion: subtle fade+rise, respect `prefers-reduced-motion`

## IA

1. **Nav** — Live now · Roadmap · Follow (TG)
2. **Hero** — Honest category line (not “ultimate DeFi trading”)
3. **Live now** — what’s actually dogfoodable today
4. **Roadmap** — ambitions clearly labeled *Coming / not live*
5. **Footer** — © DracoLabs · no fake partners strip

### Live now (honest)

| Surface | Link / status |
|---------|----------------|
| Telegram bot | https://t.me/PortaWallet_bot |
| Mini App | https://production-wallet-telegram-omytp43vwa-ew.a.run.app (tip `00027-5zg`) |
| Chrome extension | CWS Unlisted path — button present, label “Dogfood soon” until store URL exists |
| Android APK | `/downloads/porta-wallet.apk` (staged from dogfood build when present) |

### Roadmap (not live — F6→F3 style ambitions)

- **Trust / swap honesty** (Phase 1 G1–G8) — when Joshua green-lights
- **Smart Actions alerts → Review in Porta** (Telegram-native) — GTM wedge
- **Protected swap** (opt-in, never “MEV-proof”)
- **Account abstraction** — social recovery / session limits as *building*, not shipped gasless
- **Trading strategies / copy** — later; not brand lead

## Copy rules (do-not-claim)

Never: MEV-proof · fake gasless · auto-trading live · AA social recovery live · “ultimate DeFi” · pretend roadmap features are live.

**Hero line:** *Porta — Telegram-native wallet. Create or import, check balances, send, and swap with clear review. Alerts and smarter trading are on the roadmap.*

## Deliverable this kick

Scaffold that `npm install && npm run dev` runs; PLAN.md + polished Home with Live now / Roadmap; cyan brand; no secrets/seeds.
