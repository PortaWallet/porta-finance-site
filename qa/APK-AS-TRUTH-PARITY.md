# APK-as-truth parity list — porta-finance-site

**Seat:** product (marketing site only)  
**Repo:** `PortaWallet/porta-finance-site`  
**Baseline:** `main` @ `efedcef` (#22) — Subscriptions wallet-chrome clone; What’s next Coming  
**Date:** 2026-09-13  
**SoT rule:** **APK wallet chrome wins.** Marketing `/subscriptions` (and related What’s next / Guides copy) must describe the same screens, labels, and honesty states as the APK — never invent LIVE / Delivered execute.  
**Out of scope:** wallet merge · TG/APK **login** alignment · deploy · HOLD flips · F6.4 VerifyingPaymaster

---

## Rules (fail closed)

| Rule | Site posture |
|------|----------------|
| APK is truth | Field names, screen titles, muted/honest fail strings come from APK Subs chrome. Site may **document** only. |
| Review ≠ execute | Confirm / review does not mean the payment executed. TOS + Subs copy: **Review is not execute**. |
| No Delivered lies | What’s next **Subscriptions** card is **Coming — not Delivered**. Never `statusLabel: 'Delivered'`. |
| Coming until Sepolia | Recurring-pay product path stays **Coming until Sepolia is live**. Not LIVE on www. |
| Trading / Swap bot | **Coming later — not LIVE**. Muted type in APK chrome; site must not fake LIVE. |
| No wildcard payee | One merchant / one payee address. No `*` targets or selectors in copy. |
| No F6.4 | Public copy must not claim F6.4 / VerifyingPaymaster shipped. `content/holds.ts` → `F6_4: false` (do not touch). |
| No retail FF / AcceptAll | Retail CTAs off. AcceptAll dead. |
| TOS | Canonical Terms = **`/terms`** only. |
| No merge wallet | This repo is marketing. Guides describe chrome; they do not install modules, change owners, or execute UserOps. |
| Marketing execute count | **Zero.** |

**Parity vocabulary**

- **Match** — site copy/chrome already mirrors APK truth on `main`.
- **Gap** — APK truth is known; www is missing or soft (sibling chrome PRs may close).
- **Forbidden** — must never ship on www (or anywhere as LIVE claim from this seat).

---

## APK truth — Subscriptions chrome (locked labels)

Source for product seating: APK Subs chrome (aligned with Mini App wallet chrome reference build `9a2f1ed`, then APK-labeled in chrome-clone drafts). Marketing does not reverse-engineer secrets from the public download APK binary.

### Entry / menu

| APK label / chrome | Meaning | Site must say |
|--------------------|---------|---------------|
| **Subscriptions** | Feature entry | Eyebrow / guide title |
| **Caps, merchants, pause or cancel** | Menu / teaser | Teaser + Guides card |
| **New subscription** | Create CTA | How-to step |

### Type picker

| APK label | Status on APK | Site posture |
|-----------|---------------|--------------|
| **Recurring pay** | Present; product **Coming until Sepolia** | Type card **Coming** — one merchant, cap and expiry |
| **Trading bot** (alias **Swap bot**) | Present; muted | **Coming later — not LIVE** |

### Mandate fields (create flow)

| APK screen / field | Role | Fail-closed note |
|--------------------|------|------------------|
| **Amount** / **Amount (USDC)** | Cap for the mandate | Not unlimited auto-debit |
| **Days** | Expiry window | Part of the mandate, not a card on file |
| **Payee address** | Single merchant | **No wildcard** address |
| **Continue** | Advance after fields | Does not execute payment |
| Owner **Confirm** | Owner signature | Self-funded gas; sponsorship not live |

### Lifecycle / honest mute

| APK chrome | When unwired | Site must copy |
|------------|--------------|----------------|
| **Pause** | Path not ready | **Can’t pause yet** — no pretend success |
| Send / charge | Path not ready | **Can’t send yet** |
| **Stop all** | Stops every sub | Documented; muted if unwired |
| **Revoke** | Stops one sub | Documented |

### Product status string (locked)

> **Coming until Sepolia is live — not Delivered.** Review is not execute.

---

## Parity matrix — APK truth vs www (`main` @ #22)

| # | APK truth | www surface | Status on `main` | Notes |
|---|-----------|-------------|------------------|-------|
| 1 | Amount / Days / Pause as named screens | `/subscriptions` | **Gap** | How-to mentions Amount, days, payee; **no** dedicated **Screens (APK chrome)** section with titles `Amount` / `Days` / `Pause`. Sibling drafts #32 / #33 add `SUBSCRIPTIONS.screens`. |
| 2 | Amount (USDC) + Days + Payee address | `/subscriptions` how-to | **Match** | Present in `content/subscriptions.ts` how steps. |
| 3 | Caps, merchants, pause or cancel | Teaser + Guides | **Match** | `#22` clone. |
| 4 | Recurring pay · Coming | Types + badge | **Match** | `statusLabel: 'Coming'`. |
| 5 | Trading bot / Swap bot Coming later — not LIVE | Types + roadmap + guides | **Partial** | Trading bot **Coming later** on `main`. **Swap bot** alias + Sepolia string = **Gap** (drafts #32/#33). |
| 6 | Can’t send yet / Can’t pause yet | Subs guide | **Match** | Verbatim honesty strings. |
| 7 | Stop all / Revoke | Subs guide | **Match** | In how-to / dont list. |
| 8 | One merchant — no wildcard | Subs dont | **Match** | “One merchant at a time”. |
| 9 | Coming until Sepolia is live | Subs intro + What’s next + Guides | **Gap** | `main` says Coming — not Delivered; drafts add Sepolia line. |
| 10 | Review is not execute | Subs + TOS Network | **Gap (wording)** | TOS has review-before-confirm honesty; explicit **“Review is not execute”** lands in sibling drafts. Canonical path stays `/terms`. |
| 11 | What’s next Subs card | `#roadmap` item 01 | **Match (status)** | Badge **Coming**; body **Coming — not Delivered**. Must never flip to Delivered. |
| 12 | What’s next Agents card | `#roadmap` item 02 | **Match (status)** | **Coming — not Delivered** (Agents lane; not Subs chrome). |
| 13 | Agents Coming badge on teaser / `/agents` / Guides | Home + guides | **Gap** | What’s next badges Coming; surface Coming badges uneven on `main` — drafts #32/#33. |
| 14 | Mobile APK download | Apps · Mobile | **Match (honesty)** | APK link exists; status **not Live**; no public Dogfood chrome. |
| 15 | F6.4 / VerifyingPaymaster LIVE | — | **Forbidden** | HOLD OFF. |
| 16 | AcceptAll / Swap now / Bridge now | — | **Forbidden** | Retail FF OFF. |
| 17 | Subs / Agents Delivered | What’s next | **Forbidden** | |
| 18 | Trading bot LIVE | Subs type | **Forbidden** | |
| 19 | Wildcard payee / approve everything | Subs / Agents | **Forbidden** | |
| 20 | Login TG ↔ APK alignment | — | **Out of scope** | This seat does not touch auth. |

---

## Site routes that carry APK parity (Exist ≠ Delivered)

| Route | Role vs APK truth | Product status |
|-------|-------------------|----------------|
| `/subscriptions` | Primary APK chrome clone guide | Guide **Exists**; product **Coming** |
| `/guides` | Index card for Subs (and Agents) | Cards Exist; Coming badges **Gap** on `main` |
| `/` What’s next | Subs + Agents **Coming — not Delivered** | Roadmap chrome only |
| `/agents` | Separate lane (Mandate sessions) — not Subs screens | Guide Exists; product Coming |
| `/terms` | Legal: review ≠ execute / network risk | Canonical TOS |
| Apps · Mobile | APK download entry | Not Live store release |

**Marketing site execute count: zero.** Describing APK Pause / Confirm is not execute.

---

## What’s next — locked (never Delivered)

| Card | statusLabel | Must include | Must never say |
|------|-------------|--------------|----------------|
| **01 Subscriptions** | **Coming** | Coming — not Delivered; Trading bot Coming later | Delivered · LIVE trading bot · F6.4 |
| **02 Agents** | **Coming** | Coming — not Delivered | Delivered |

Lede (locked on `main`): *Nothing below is live. Subscriptions and Agents are Coming — not Delivered.*

---

## Chrome-clone checklist (for sibling PRs — not auto-merged here)

When closing **Gaps**, site PR must pin:

- [ ] `content/subscriptions.ts` documents **Screens (APK chrome)**: **Amount**, **Days**, **Pause**
- [ ] Copy cites **APK** (and Mini App / web) as open surfaces
- [ ] **Coming until Sepolia is live** + **Review is not execute**
- [ ] **Swap bot** / **Trading bot** Coming later — not LIVE
- [ ] Page renders `SUBSCRIPTIONS.screens` + Coming badges
- [ ] Guides + What’s next Subs mention Amount, Days, Pause
- [ ] Agents/Guides Coming badges (until Sepolia) — never Delivered
- [ ] TOS remains **`/terms`**; Network risk keeps review ≠ execute honesty
- [ ] No F6.4 / VerifyingPaymaster / AcceptAll / retail CTAs
- [ ] `content/holds.ts` untouched
- [ ] No wallet merge; login TG/APK out of scope

Sibling drafts that implement chrome (do not merge from this seat): **#32**, **#33**. Related IA SoT (lanes, not APK field list): **#25**, **#27**. Baseline: **#22**.

---

## HOLDs (do not touch)

| HOLD | Value |
|------|-------|
| F6.4 | `false` |
| RETAIL_FEATURE_FLAGS | `false` |
| ACCEPT_ALL | `false` |
| CWS_LIVE | `false` |
| PUBLISH_HOLD | `true` |

---

## Anti-claims checklist (PR / review gate)

- [ ] What’s next Subs card is **Coming**, never **Delivered**
- [ ] APK Amount / Days / Pause are the Subs screen SoT (document or Match — never invent other field names)
- [ ] Can’t send yet / Can’t pause yet preserved when unwired
- [ ] Trading bot / Swap bot not LIVE
- [ ] No public **F6.4** / **VerifyingPaymaster** as shipped
- [ ] No retail CTAs; AcceptAll dead
- [ ] TOS link target is `/terms`
- [ ] Review is not execute
- [ ] No wildcard payee
- [ ] No wallet merge in this PR
- [ ] HOLDs file untouched
- [ ] Login TG/APK alignment not claimed done

---

## Related

| Artifact | Role |
|----------|------|
| This file | **APK-as-truth parity list** (field/screen SoT + Gap/Match) |
| `qa/PRODUCT-IA-AUDIT.md` (drafts #25/#27) | Lane SoT: Subs vs Agents vs Social bots vs Retail |
| `qa/2026-09-06-grok-fe-…baseline.md` | Historical FE baseline — prefer this file + IA audit for product honesty |
| PR #22 | Merged Subs clone + What’s next Coming + TOS `/terms` |
| PRs #32 / #33 | APK Amount/Days/Pause chrome + Sepolia Coming (draft) |

This PR adds **documentation + honesty pins only**. It does not merge sibling chrome drafts, deploy, or flip HOLDs.
