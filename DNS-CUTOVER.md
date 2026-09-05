# porta.finance DNS cutover (Webflow → GitHub Pages)

**Updated:** 2026-09-05 · **Soft tip:** `00026-wrp`  
**Mini App (unchanged):** https://production-wallet-telegram-omytp43vwa-ew.a.run.app

## Live preview (already public HTTPS)

**https://portawallet.github.io/porta-finance-site/**

- Source: `PortaWallet/porta-finance-site` → `gh-pages` branch (`dist/`)
- SPA fallback: `404.html` (= `index.html`)
- Custom domain **not** attached yet (so this URL stays usable before DNS flip)

## Current www / apex DNS (still Webflow)

| Host | Resolves to today |
|------|-------------------|
| `www.porta.finance` | `proxy-ssl.webflow.com` (Webflow / Cloudflare) |
| `porta.finance` | `75.2.70.75` / `99.83.190.102` (likely Webflow/AWS-style apex) |

`https://www.porta.finance` still returns Webflow (`x-wf-region`).

## Exact DNS records Joshua must set

Point DNS at **GitHub Pages** (replace Webflow records):

### 1) www → GitHub Pages
```
Type:  CNAME
Name:  www
Value: portawallet.github.io
TTL:   300 (or Auto)
```

### 2) Apex `porta.finance` → GitHub Pages A records
```
Type: A     Name: @ (or porta.finance)    Value: 185.199.108.153
Type: A     Name: @                       Value: 185.199.109.153
Type: A     Name: @                       Value: 185.199.110.153
Type: A     Name: @                       Value: 185.199.111.153
```

### 3) Optional apex IPv6 (AAAA)
```
Type: AAAA  Name: @    Value: 2606:50c0:8000::153
Type: AAAA  Name: @    Value: 2606:50c0:8001::153
Type: AAAA  Name: @    Value: 2606:50c0:8002::153
Type: AAAA  Name: @    Value: 2606:50c0:8003::153
```

### Remove / disable
- Any existing Webflow CNAME/`proxy-ssl.webflow.com` for `www`
- Old Webflow A/AAAA/ALIAS/ANAME on apex if they conflict

## After DNS propagates — attach domain on GitHub

```bash
# From a machine with gh auth:
gh api repos/PortaWallet/porta-finance-site/pages -X PUT \
  -H "Accept: application/vnd.github+json" \
  --input - <<'JSON'
{
  "cname": "www.porta.finance",
  "source": { "branch": "gh-pages", "path": "/" }
}
JSON
```

Also add a `CNAME` file containing `www.porta.finance` on the `gh-pages` branch (GitHub may auto-create it).

Then in **Settings → Pages**:
1. Custom domain: `www.porta.finance`
2. Wait for DNS check to go green
3. Enable **Enforce HTTPS**
4. Optionally add apex `porta.finance` in the UI if offered

## Cutover checklist
1. Confirm preview: https://portawallet.github.io/porta-finance-site/ (tip `00026-wrp` in LiveNow)
2. Update DNS as above
3. Attach `www.porta.finance` via API/UI; enforce HTTPS
4. Verify https://www.porta.finance serves Vite site (no `x-wf-region`)
5. Verify https://porta.finance redirects or serves same
6. Retire Webflow hosting for this domain

## Repo
- https://github.com/PortaWallet/porta-finance-site (public — free org needs public for Pages)
- Brand assets unchanged from Webflow purple/mint/logo in `public/`
