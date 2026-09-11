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
3. **Features** — Send / Receive / Review / Agents / Bridge (bridge not live)
4. **Agents** — Joshua EN SoT verbatim (English only; no Hebrew body). One line: you lend a small, controlled budget — not the wallet. `swap_24h` not live.
5. **How** — Create or import → Receive assets → Send and review swaps
6. **Apps** — Telegram Mini App / Extension (CWS Unlisted soon; Agents screens on Ext/web) / Mobile APK (GitHub release asset)
7. **AA + Security** — Smart account / UserOps / self-funded gas; sponsorship + gasless + social recovery not live
8. **Developers** — no public SDK claim
9. **Roadmap** — `/roadmap` one-pager: HOLD / LIVE / Coming (honest SoT)
10. **Contact / Footer** — hello@porta.finance · official links once (includes X / Twitter @PortaWallet)

### Apps (honest)

| Surface | Status |
|---------|--------|
| Telegram Mini App / `@PortaWallet_bot` | Live entry (eng-only tip; no public dogfood chrome) |
| Browser extension | Coming / CWS Unlisted soon — Agents screens ship on Ext/web; no store listing |
| Mobile APK | GitHub release APK, not Live, not a store release |

### Roadmap (`/roadmap` — honest SoT)

**HOLD (not shipped):** F6.4 VerifyingPaymaster sponsorship NO-GO · Retail DeFi FF OFF · AcceptAll dead

**LIVE:** AA Send (self-funded UserOps) · Canon EntryPoint + factory pins; Porta JWT RPC · Mandate Agents UI (TG/Ext/Mobile/web) · Sepolia Mandate V2 + FactoryV2 + sample proxy · F1/F2 Review quote / Confirm quote · Quotes TTL/slippage/minReceived; Search/Feed notify ≠ execute

**Coming (not live):** Agents UserOp-65 · FactoryV2 default + V1→V2 · Linea-first curated chains / testnets · Social recovery · Smart Actions (alerts → Review only) · Retail FF after Joshua GO; Limit/TWAP later · ZK privacy lane · perps/restaking design-only

Never invent Q1–Q4 hype (AI marketplace, $PORTA, insurance fund, UniV4) or mark HOLD items as shipped.

## Copy rules (do-not-claim)

Never: MEV-proof · fake gasless · paymaster sponsorship live · auto-trading live · AA social recovery live · “ultimate DeFi” as a primary/live claim · pretend roadmap features are live · retail CTAs (`Swap now`, `Bridge now`, `Confirm swap`, AcceptAll) · fake sponsored UI (`$0 gas`, Sponsored send).

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
