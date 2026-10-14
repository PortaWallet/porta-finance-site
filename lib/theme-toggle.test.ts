import { act, createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { JSDOM } from 'jsdom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SiteNav } from '@/components/site-nav'
import { ThemeProvider } from '@/components/theme-provider'

vi.mock('next/image', async () => {
  const React = await import('react')
  return {
    default: ({
      alt,
      src,
      className,
    }: {
      alt?: string
      src?: unknown
      className?: string
    }) =>
      React.createElement('img', {
        alt: alt ?? '',
        src: typeof src === 'string' ? src : '',
        className,
      }),
  }
})

/**
 * next-themes captures `typeof window` at module load. This file is evaluated
 * in the node environment, matching the server bundle: theme state stays
 * undefined after hydration while the blocking script has already set
 * `class="dark"` for an Android system-dark preference.
 */
function installDarkDocument() {
  const dom = new JSDOM(
    '<!DOCTYPE html><html class="dark"><body><div id="root"></div></body></html>',
    { url: 'http://localhost/', pretendToBeVisual: true },
  )
  const { window } = dom
  window.matchMedia = ((query: string) => ({
    matches: /prefers-color-scheme:\s*dark/.test(query),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia

  // Node 22+ defines globalThis.navigator as a getter with no setter.
  // Object.assign throws "Cannot set property navigator ... which has only a getter".
  // vi.stubGlobal replaces that configurable getter via Object.defineProperty.
  for (const [key, value] of Object.entries({
    window,
    self: window,
    document: window.document,
    navigator: window.navigator,
    HTMLElement: window.HTMLElement,
    SVGElement: window.SVGElement,
    Element: window.Element,
    Node: window.Node,
    localStorage: window.localStorage,
    IS_REACT_ACT_ENVIRONMENT: true,
  })) {
    vi.stubGlobal(key, value)
  }
  return dom
}

describe('header theme toggle', () => {
  let root: Root | undefined
  let dom: JSDOM | undefined

  afterEach(() => {
    root?.unmount()
    root = undefined
    dom?.window.close()
    dom = undefined
  })

  it('flips the theme class and persists the choice from a system-dark page', async () => {
    dom = installDarkDocument()
    const doc = dom.window.document
    const container = doc.getElementById('root')
    expect(container).toBeTruthy()
    root = createRoot(container!)

    await act(async () => {
      root!.render(
        createElement(
          ThemeProvider,
          {
            attribute: 'class',
            defaultTheme: 'system',
            enableSystem: true,
            disableTransitionOnChange: true,
          },
          createElement(SiteNav),
        ),
      )
    })

    const header = doc.querySelector('header')
    expect(header).toBeTruthy()
    const menu = doc.getElementById('mobile-menu')
    expect(menu).toBeTruthy()

    const button = header!.querySelector(
      'button[aria-label*="theme"]',
    ) as HTMLButtonElement | null
    expect(button).toBeTruthy()
    expect(menu!.contains(button)).toBe(false)
    expect(button!.className).toMatch(/\bsize-11\b/)
    expect(doc.documentElement.classList.contains('dark')).toBe(true)
    expect(dom.window.localStorage.getItem('theme')).toBeNull()

    await act(async () => {
      button!.click()
    })

    expect(doc.documentElement.classList.contains('dark')).toBe(false)
    expect(doc.documentElement.classList.contains('light')).toBe(true)
    expect(dom.window.localStorage.getItem('theme')).toBe('light')
    expect(button!.getAttribute('aria-label')).toBe('Switch to dark theme')

    await act(async () => {
      button!.click()
    })

    expect(doc.documentElement.classList.contains('dark')).toBe(true)
    expect(doc.documentElement.classList.contains('light')).toBe(false)
    expect(dom.window.localStorage.getItem('theme')).toBe('dark')
    expect(button!.getAttribute('aria-label')).toBe('Switch to light theme')
  })
})
