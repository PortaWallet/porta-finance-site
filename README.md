# porta.finance site

Marketing site for [porta.finance](https://www.porta.finance) — Next.js 15 App Router, React 19, strict TypeScript, Tailwind CSS v4, shadcn/ui + Radix, Framer Motion, next-themes, Lucide.

See **[PLAN.md](./PLAN.md)** for IA, copy honesty, HOLDs, and do-not-claim rules.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # .next/
npm run start    # production server
npm test         # honesty + brand tests
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
- Apps: Telegram Mini App (Live · dogfood) / Extension (Coming) / Mobile (Dogfood APK, not Live)
- No retail CTAs (`Swap now`, `Bridge now`, `Confirm swap`, AcceptAll)
- No client-side API keys or secrets

## HOLDs

- **F6.4 OFF**
- **Retail feature flags OFF**
- **AcceptAll dead**
- **Publish HOLD** — do not cut over GitHub Pages or production from this rebuild. PR only.
