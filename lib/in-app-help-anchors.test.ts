import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  IN_APP_HELP_ANCHORS,
  inAppHelpDestination,
  type InAppHelpSlug,
} from '@/content-help/in-app-anchors'
import { getHelpTopic } from '@/content-help/help'
import { blockAnchorIds } from '@/content-help/parse'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * Slugs in INAPP-SHEETS-site-anchors.md, in document order.
 * Six Learn more sheets, plus the unlock sheet's secondary link.
 */
const INAPP_SHEETS_SLUGS = [
  'password-setup',
  'unlock',
  'forgot-unlock-password',
  'mandate-review',
  'advanced-swap',
  'metered-grant',
  'send-confirm',
] as const

describe('in-app help anchors', () => {
  it('matches the INAPP-SHEETS slug list and lands on a real section', () => {
    const slugs = Object.keys(IN_APP_HELP_ANCHORS)
    expect(slugs).toEqual([...INAPP_SHEETS_SLUGS])

    const topicPage = readFileSync(resolve(ROOT, 'app/help/[slug]/page.tsx'), 'utf8')
    const body = readFileSync(resolve(ROOT, 'components/help/help-body.tsx'), 'utf8')
    expect(topicPage).toContain('id={topic.slug}')
    expect(body).toContain('id={block.id}')

    for (const slug of slugs) {
      const target = IN_APP_HELP_ANCHORS[slug as InAppHelpSlug]
      const topic = getHelpTopic(target.topic)
      expect(topic, slug).toBeDefined()
      const ids = new Set(blockAnchorIds(topic?.blocks ?? []))
      if (topic?.slug === target.section) ids.add(topic.slug)
      expect(ids.has(target.section), `${slug} → ${target.topic}#${target.section}`).toBe(true)
      expect(inAppHelpDestination(`#${slug}`, false)).toBe(
        `/help/${target.topic}#${target.section}`,
      )
      expect(inAppHelpDestination(slug, true)).toBe(
        `/help/${target.topic}/#${target.section}`,
      )
    }
  })

  it('leaves unknown hashes on /help', () => {
    expect(inAppHelpDestination('')).toBeUndefined()
    expect(inAppHelpDestination('#')).toBeUndefined()
    expect(inAppHelpDestination('#not-a-sheet')).toBeUndefined()
    expect(inAppHelpDestination('#%')).toBeUndefined()
    expect(inAppHelpDestination('#../send')).toBeUndefined()
    expect(inAppHelpDestination('#password-setup/')).toBeUndefined()
  })

  it('mounts a client redirect on the help index and not a server redirect', () => {
    const page = readFileSync(resolve(ROOT, 'app/help/page.tsx'), 'utf8')
    const redirect = readFileSync(resolve(ROOT, 'components/help/help-hash-redirect.tsx'), 'utf8')
    const config = readFileSync(resolve(ROOT, 'next.config.ts'), 'utf8')
    expect(page).toContain('<HelpHashRedirect')
    expect(page).toContain('HelpSearch')
    expect(redirect).toContain("'use client'")
    expect(redirect).toContain('inAppHelpDestination')
    expect(redirect).toContain('location.replace')
    expect(config).not.toContain('/help#')
    expect(config).not.toMatch(/source:\s*'\/help'/)
  })
})
