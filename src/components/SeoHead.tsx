import { useEffect } from 'react'
import {
  CANONICAL_URL,
  HREFLANG,
  KO_URL,
  OG_IMAGE_URL,
  KEYWORDS_CONTENT,
  SEO,
  jsonLdGraph,
} from '../lib/seo'
import { useLocale } from '../lib/locale'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SeoHead() {
  const locale = useLocale()

  useEffect(() => {
    const seo = SEO[locale]
    const url = locale === 'ko' ? KO_URL : CANONICAL_URL
    document.documentElement.lang = locale
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'keywords', KEYWORDS_CONTENT[locale])
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:image', OG_IMAGE_URL)
    upsertMeta('property', 'og:site_name', 'Porta Wallet')
    upsertMeta('property', 'og:locale', seo.locale)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', OG_IMAGE_URL)
    upsertLink('canonical', url)
    for (const alt of HREFLANG) {
      upsertLink('alternate', alt.href, alt.lang)
    }
    const ld = jsonLdGraph(locale)
    let script = document.head.querySelector(
      'script[data-porta-jsonld="graph"]',
    )
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-porta-jsonld', 'graph')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(ld)
  }, [locale])

  return null
}
