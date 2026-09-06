# GoDaddy DNS — porta.finance cutover

Soft tip `00044-47z`. Remove old **Webflow** records for `@` / `www` first (CNAME/A to `proxy-ssl.webflow.com` or Webflow targets).

Pick **one** path (Vercel preferred if you claim the temp deploy).

---

## Option A — Vercel (preferred)

**Before DNS:** Claim + add domains in Vercel project → Domains: `www.porta.finance` and `porta.finance`  
Claim: https://vercel.com/claim-deployment?code=6dfd4479-49ff-4cd0-8566-2ecc6c9a0330  
Temp site: https://temporary-rushing-antimony-ip35dsa.vercel.app

| Type | Name (GoDaddy) | Value | TTL |
|------|----------------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 / 1 Hour |
| **CNAME** | `www` | **value from Vercel Domains UI** (often `cname.vercel-dns.com`) | 600 / 1 Hour |

Notes:
- After claim, open Project → Settings → Domains — copy the **exact** CNAME target shown for `www` if it differs from `cname.vercel-dns.com`.
- Optional: add both apex + www in Vercel so redirects work both ways.
- Do **not** leave a Webflow CNAME on `www` alongside the Vercel CNAME.

---

## Option B — GitHub Pages (backup already LIVE)

Site: https://portawallet.github.io/porta-finance-site/  
Repo: https://github.com/PortaWallet/porta-finance-site  
Custom domain configured as `www.porta.finance` on Pages when ready.

| Type | Name (GoDaddy) | Value | TTL |
|------|----------------|-------|-----|
| **A** | `@` | `185.199.108.153` | 600 |
| **A** | `@` | `185.199.109.153` | 600 |
| **A** | `@` | `185.199.110.153` | 600 |
| **A** | `@` | `185.199.111.153` | 600 |
| **CNAME** | `www` | `portawallet.github.io` | 600 |

Optional IPv6 (AAAA) apex:

| Type | Name | Value |
|------|------|-------|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Notes:
- `www` CNAME target is **`portawallet.github.io`** (org pages host) — **not** `portawallet.github.io/porta-finance-site`.
- Propagation: minutes → up to 24h. Then Enforce HTTPS on Pages / Vercel.

---

## Also delete / avoid
- Old Webflow A/CNAME/NS leftovers for `@` and `www`
- Wildcard `*.porta.finance` (takeover risk)
- GoDaddy “Domain Forwarding” on apex if using A records (conflicts)
