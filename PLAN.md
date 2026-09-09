# porta.finance — Next.js 15 modernization (ARCH PLAN)

**Date:** 2026-09-09 · **Soft tip:** `00051-xsf` (`2bc372f`) · **Path:** App Router rebuild of the Vite marketing site.

## Stack (locked)

| Choice | Why |
|--------|-----|
| **Next.js 15 App Router** | SSG/ISR marketing, semantic metadata, no Vite SPA SEO tax |
| **React 19 + strict TypeScript** | Current Next 15 pairing; brief floor was 18.3+ |
| **Tailwind CSS v4 + OKLCH** | Design tokens without a JS config |
| **shadcn/ui + Radix + Lucide** | Accessible primitives, owned source |
| **Framer Motion + next-themes** | Spring micro-interactions; dark/light |
| **Inter via next/font** | Apple/Stripe type; self-hosted at build; no runtime Google Fonts RTT |

Vite + IBM Plex + cosmic flood is retired on this branch. Brand pack (portal, ring, mesh, mark) stays.

## Design

Ultra-minimal Apple/Stripe: Inter, OKLCH surfaces, hairline borders, dark/light, spring reveals below the fold. Hero H1 is static for LCP. `prefers-reduced-motion` kills animation.

## IA

1. **Nav** — Apps · Roadmap · Official · Contact · **Open in Telegram**
2. **Hero** — Locked H1: *AA smart-contract wallet — first in Telegram* — CTAs only; brand art, never a fake wallet UI
3. **Features** — Send / Receive / Review / Bridge (bridge not live)
4. **How** — Create or import → Receive assets → Send and review swaps
5. **Apps** — Telegram Mini App / Extension (CWS Unlisted soon) / Mobile
6. **AA + Security** — UserOps / self-funded direction; gasless + social recovery not live
7. **Developers** — no public SDK claim
8. **Roadmap** — Coming / not live
9. **Contact / Footer** — hello@porta.finance · official links once (no X)

### Apps (honest)

| Surface | Status |
|---------|--------|
| Telegram Mini App / `@PortaWallet_bot` | Live entry (eng-only tip; no public dogfood chrome) |
| Browser extension | Coming / CWS Unlisted soon |
| Mobile APK | Available as APK, not Live, not a store release |

### Roadmap (not live)

- See every swap before you confirm
- Alerts that open a review — not a trade
- Optional protected swaps (never MEV-proof)
- Recovery & session limits (AA building — not gasless)
- Advanced trading later

## Copy rules (do-not-claim)

Never: MEV-proof · fake gasless · auto-trading live · AA social recovery live · “ultimate DeFi” as a primary/live claim · pretend roadmap features are live · retail CTAs (`Swap now`, `Bridge now`, `Confirm swap`, AcceptAll).

Telegram is the **first surface**. Do not say “not a Telegram product” on the public site. No fake wallet/tx mocks. No public soft-tip or LIVE·DOGFOOD chrome.

## HOLDs

- F6.4 **OFF**
- Retail feature flags **OFF**
- AcceptAll **dead**
- **Publish HOLD** — PR only. Do not edit GitHub Pages workflows or cut over production.
- **Preview HOLD** — static export to `preview-pr-<n>` + Actions artifact. Never `github-pages` or the live custom domain.

## Perf / SEO / security

- Static generation + `revalidate = 86400`
- `metadata`, sitemap, robots, JSON-LD
- No CLS: reserved image sizes, `next/font` fallbacks
- No client-side API keys or secrets
