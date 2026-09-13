# SPRINT-MONTHLY SoT — porta-finance-site

**Seat:** product (marketing site only)  
**Repo:** `PortaWallet/porta-finance-site`  
**Baseline:** `main` @ `b1eeb47` (#33)  
**Date:** 2026-09-13  
**SoT rule:** **Mandates** (not Subscriptions). Cap = **one period**, not a lump. No login stories.

---

## Rules (fail closed)

| Rule | Site posture |
|------|----------------|
| Mandates not Subscriptions | Product name on What’s next / Guides / guide eyebrow is **Mandates**. Route `/subscriptions` may remain as path alias; chrome copy says Mandates. |
| Cap = one period | Amount (USDC) is the cap for **one period**, not a lump sum for the full Days window. |
| What’s next Mandates card | Badge **Coming — not Delivered**. Never `statusLabel: 'Delivered'`. |
| Coming until Sepolia | Recurring-pay path stays **Coming until Sepolia is live**. |
| Trading / Swap bot | **Coming later — not LIVE**. |
| Review ≠ execute | TOS + Mandates copy: **Review is not execute**. |
| TOS | Canonical Terms = **`/terms`** only. Mandates section documents period-cap + Coming status. |
| No login stories | Do not claim TG ↔ APK login alignment. Auth is out of scope. |
| No merge wallet | Marketing site only. No module install / owner change / UserOp execute claims. |
| No F6.4 / AcceptAll / retail FF | HOLDs untouched. |
| Marketing execute count | **Zero.** |

---

## Locked strings

- Eyebrow / What’s next / Guides title: **Mandates**
- Amount body: **one period** · **not a lump**
- Status: **Coming until Sepolia is live — not Delivered**
- TOS Mandates: period cap · Coming · no login claim

---

## Out of scope

- Wallet merge
- TG/APK login stories
- Deploy / production cutover
- HOLD flips
- F6.4 VerifyingPaymaster
