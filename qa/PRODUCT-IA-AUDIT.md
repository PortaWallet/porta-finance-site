# Product IA audit — porta-finance-site

**Seat:** product (marketing site only)  
**Repo:** `PortaWallet/porta-finance-site`  
**Baseline:** `main` @ `efedcef` (#22) — clone Subscriptions wallet chrome; What’s next Coming  
**Date:** 2026-09-13  
**Scope:** system design — **Subs vs Agents vs Social bots vs Retail**. Screens that **exist**, status **Coming**, paths that **execute**.  
**Out of scope:** wallet merge · TG/APK login alignment · deploy · HOLD flips · F6.4 VerifyingPaymaster

---

## Rules (fail closed)

| Rule | Site posture |
|------|----------------|
| Review ≠ execute | Copy and TOS: review/confirm before send; not auto-trade. Marketing never ships `Swap now` / `Bridge now` / `Confirm swap` / AcceptAll. |
| No Delivered lies | What’s next **Subscriptions** and **Agents** are **Coming — not Delivered**. No `statusLabel: 'Delivered'`. |
| No F6.4 | Public copy must not claim F6.4 / VerifyingPaymaster as shipped. `content/holds.ts` → `F6_4: false` (do not touch). |
| No retail FF | `RETAIL_FEATURE_FLAGS: false` — retail execution CTAs stay off. |
| No AcceptAll | `ACCEPT_ALL: false`. |
| TOS | Canonical Terms = **`/terms`** only (alias `/terms-of-service` → `/terms`). Not homepage embed. |
| No merge wallet | This repo is marketing. Guides describe wallet chrome; they do not execute UserOps. |
| Unknown calldata | N/A on this site (no session installer). Seat still: fail closed — do not invent LIVE execute paths. |

**Status vocabulary used below**

- **Exists** — a route or UI surface users can open on www (or a named wallet surface described honestly).
- **Coming** — product status: not live, not Delivered. Guide may exist; chrome may describe muted controls.
- **Execute** — on-chain / UserOp / payment actually goes through. Marketing site **never** executes. Wallet execute is only where the product path is live and wired.

---

## Product lanes (system design)

| Lane | What it is | Marketing screens | Product status | Execute? |
|------|------------|-------------------|----------------|----------|
| **Subscriptions (Subs)** | Mandate: amount (USDC), days, **one** payee. Recurring pay. Caps, merchants, pause/cancel. | `/subscriptions` guide · What’s next 01 · Guides card | **Coming — not Delivered** | **No** on www. Wallet path honest: **Can’t send yet** / **Can’t pause yet** when unwired. |
| **Agents** | Temporary agent key (not owner). Caps, addresses, time in contract. Revoke / Panic. `pay_api`; `swap_24h` greyed. | `/agents` guide · home teaser `#agents` · Features → Agents · What’s next 02 · Guides card | **Coming — not Delivered** | **No** on www. Guide describes Create mandate; does not claim mandate create is Delivered on every surface. |
| **Social bots** | Copy-style / social trading bots (under Subs “Trading bot” + What’s next advanced trading). | Named only inside Subs guide + roadmap copy — **no dedicated `/social` route** | **Coming** (Trading bot Coming later; advanced trading later) | **No**. Never LIVE. |
| **Retail** | Swap/bridge-now retail execution CTAs and retail feature flags. | No retail CTA chrome. Bridge feature card: not live. Review card exists as honesty, not execute. | **Retail FF OFF** · Coming until flags ship | **No** retail one-tap execute. Live Mini App: create/import, receive, send, **review** swaps — review is not execute / not auto-trade. |

Lane boundaries (do not collapse):

1. **Subs ≠ Agents** — Subs = recurring pay mandate to one merchant. Agents = temporary key / mandate session with budget. Separate guides.
2. **Social bots ≠ Telegram bot** — `@PortaWallet_bot` is the **live wallet entry**. Social/copy trading bots are **Coming**, not that entry bot.
3. **Retail ≠ Review** — Review UI / “review swaps” language is honesty (confirm before send). Retail = flagged execution CTAs (OFF).
4. **Guide Exists ≠ Delivered** — a guide page can Exist while the product lane stays Coming.

---

## Screens that Exist (porta.finance routes)

| Route | Role | Lane tags | Status chrome |
|-------|------|-----------|---------------|
| `/` | Home: Hero, Features, Agents teaser, How, Apps, AA, Security, Developers, What’s next, Contact | Retail (review honesty) · Agents teaser · Apps live entry | What’s next items badge **Coming** / **Not live yet**. Agents teaser on `main`: **no Coming badge** (honesty gap — see Gaps). |
| `/guides` | Index of feature guides | Agents · Subs | Cards link to guides; on `main` **no Coming badge** on cards (gap). |
| `/agents` | Full Agents SoT guide (Joshua EN) | Agents | Guide Exists; product **Coming**. No Coming badge on `main` (gap). |
| `/subscriptions` | Subs wallet-chrome clone guide | Subs · Social bots (Trading bot type) | Page + types badge **Coming**. Trading bot **Coming later**. |
| `/terms` | Terms of Service | Legal | Canonical TOS. |
| `/privacy` | Privacy Policy | Legal | Canonical privacy. |
| `/terms-of-service` | Alias → `/terms` | Legal | Redirect. |
| `/privacy-policy` | Alias → `/privacy` | Legal | Redirect. |
| `/#terms`, `/#policy` | Legacy hashes | Legal | Homepage client redirect → `/terms` / `/privacy`. |

**No routes for:** `/retail`, `/social`, `/bots`, `/swap`, `/bridge` execute UIs. Bridge is a home feature card stating not live.

### Home section inventory (Exist as sections, not separate routes)

| Section | Exists | Execute? |
|---------|--------|----------|
| Hero (Open in Telegram / Open Mini App) | Yes | CTA opens live TG surfaces — wallet execute happens there, not on www |
| Features: Send / Receive / Review / Agents / Bridge | Yes | Copy only; Agents links to `/agents`; Bridge not live |
| Agents teaser | Yes | Links to guides only |
| How it works | Yes | Narrative only |
| Apps: Telegram / Extension / Mobile | Yes | TG live entry; Extension Coming (CWS HOLD); Mobile APK download **not Live** |
| AA / Security / Developers | Yes | Sponsorship **Not live**; no public SDK |
| What’s next (`#roadmap`) | Yes | All items **Coming**; Subs/Agents **not Delivered** |
| Contact / Footer / Official links | Yes | No form; `hello@porta.finance` |

---

## Coming (not Delivered) — locked claims

### What’s next (`content/roadmap.ts`)

| # | Title | statusLabel | Must never say |
|---|-------|-------------|----------------|
| 01 | **Subscriptions** | **Coming** | Delivered · LIVE trading bot |
| 02 | **Agents** | **Coming** | Delivered |
| 03 | See every swap before you confirm | Coming | Auto-trade · execute without confirm |
| 04 | Alerts that open a review — not a trade | Coming | Alerts execute trades |
| 05 | Optional protected swaps | Coming | MEV-proof |
| 06 | Recovery & session limits | Coming | Gasless / sponsorship live · F6.4 |
| 07 | Advanced trading later | Coming | Social/copy bots LIVE |

Lede (locked): *Nothing below is live. Subscriptions and Agents are Coming — not Delivered.*

### Subs guide (`/subscriptions`)

| Surface | statusLabel | Notes |
|---------|-------------|-------|
| Page | Coming | Clone of Mini App chrome (build `9a2f1ed` reference in content) |
| Type: Recurring pay | Coming | One merchant, cap and expiry |
| Type: Trading bot | Coming | **Coming later** — social/copy-style; **not LIVE** |
| Confirm / Stop all | muted when unwired | **Can’t send yet** / **Can’t pause yet** — no pretend success |

### Agents

| Surface | Product status | Notes |
|---------|----------------|-------|
| What’s next 02 | Coming | Explicit **not Delivered** |
| `/agents` + teaser | Coming (product) | Guide Exists; `swap_24h` **greyed — not active**; no “approve everything” |
| Ext / web Agents screens | Described in Apps copy as shipping on Ext/web | CWS Unlisted **not live**; do not label Agents **Delivered** on www |

### Social bots

| Claim | Status |
|-------|--------|
| Trading bot type under Subs | Coming later |
| Advanced trading / copy-style (roadmap 07) | Coming |
| Dedicated social-bot product page | **Does not Exist** |
| Execute / LIVE | **Forbidden** until retail flags + product cutover (not this seat) |

### Retail

| Claim | Status |
|-------|--------|
| `HOLDS.RETAIL_FEATURE_FLAGS` | **false** |
| Swap now / Bridge now / Confirm swap / AcceptAll | **Forbidden** in marketing sources (`lib/honesty.test.ts`) |
| Cross-chain bridge | Not live (Features) |
| Clearer swap review UX (roadmap 03) | Coming |
| Gas sponsorship / F6.4 / VerifyingPaymaster | **OFF** — never shipped claim |

---

## Execute map (honest)

| Action | Where | Execute? |
|--------|-------|----------|
| Open `@PortaWallet_bot` / Mini App | Live entry from www CTAs | Opens wallet surface |
| Create or import wallet | Mini App (primary) | Live wallet path (self-funded; not sponsored) |
| Receive assets | Mini App | Live |
| Send | Mini App | Live (user pays gas) |
| Review swap before confirm | Mini App | **Review — not execute / not auto-trade** |
| Recurring pay charge | Subs path | **Not** marketed as wired; Can’t send yet when not ready |
| Trading / social bot trade | Social bots / retail | **No** |
| Create agent mandate / pay_api | Agents (Ext/web described) | Guide only on www; **not Delivered** on What’s next |
| `swap_24h` agent | Agents | Closed / greyed |
| Bridge | — | Not live |
| Sponsored / gasless UserOp | F6.4 | **HOLD OFF** — no execute claim |
| AcceptAll / one-tap accept | — | **Dead** |

**Marketing site execute count: zero.** Guides and What’s next are documentation and roadmap chrome only.

---

## TOS / legal

| Item | Canonical |
|------|-----------|
| Terms | **`/terms`** |
| Privacy | `/privacy` |
| Aliases | `/terms-of-service`, `/privacy-policy` |
| Homepage legal embeds | Removed (#22) — hash redirect only |
| Network risk | Review every send/swap before confirm; review is not a guarantee against loss |

Sibling draft PRs may add explicit “Review is not execute” wording to TOS; on `main` the review-before-confirm honesty already holds. Do not move TOS off `/terms`.

---

## HOLDs (do not touch)

From `content/holds.ts` (audit only — never flip here):

| HOLD | Value |
|------|-------|
| F6.4 | `false` |
| RETAIL_FEATURE_FLAGS | `false` |
| ACCEPT_ALL | `false` |
| CWS_LIVE | `false` |
| PUBLISH_HOLD | `true` |

---

## Gaps / honesty chrome (document only — not auto-fixed here)

Tracked so we do not claim Delivered while chrome is uneven:

1. **Agents Coming badge** — What’s next badges Agents **Coming**, but home teaser + `/agents` + `/guides` cards lack Coming badges on `main`. Sibling drafts #23 / #24 address parity with `/subscriptions`.
2. **Retail + social bots copy** — `main` says Trading bot **Coming later**; drafts may tighten “Coming until retail flags ship” + “Review is not execute”. Either way: **not Delivered**, **not LIVE**, **no execute**.
3. **Apps vs Agents** — “Agents screens ship on the extension and web” must not be read as What’s next Delivered. Extension store listing remains Coming.
4. **Stale QA baseline** — `qa/2026-09-06-grok-fe-porta-finance-live-rebrand-baseline.md` is historical (tip `00044-47z`, LIVE/DOGFOOD chips). Soft tip SoT is now `00051-xsf`; public dogfood chrome is banned. Prefer **this** file for product IA.

---

## Anti-claims checklist (PR / review gate)

- [ ] What’s next Subs card is **Coming**, never **Delivered**
- [ ] What’s next Agents card is **Coming**, never **Delivered**
- [ ] No public **F6.4** / **VerifyingPaymaster** as shipped
- [ ] No retail CTAs; retail FF remains off
- [ ] No AcceptAll
- [ ] TOS link target is `/terms`
- [ ] Social bots / Trading bot not LIVE
- [ ] Review is not execute
- [ ] No wallet merge in this PR
- [ ] HOLDs file untouched

---

## Related PRs (do not merge from this seat)

| PR | Note |
|----|------|
| #22 (merged) | Subs clone + What’s next Coming + TOS `/terms` — baseline of this audit |
| #23 draft | Agents/Guides Coming badges |
| #24 draft | Retail + social bots Coming; review≠execute |
| #25 draft | Parallel PRODUCT-IA-AUDIT SoT (same deliverable family) |
| #20 / #21 drafts | Older What’s next / TOS drafts — superseded by #22+ |

This audit PR adds **documentation only**. It does not merge sibling drafts, deploy, or flip HOLDs.
