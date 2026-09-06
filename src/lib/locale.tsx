import { createContext, useContext, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { copy, type KoCopy, type Locale } from './copy'

const LocaleContext = createContext<Locale>('en')

export function pathnameToLocale(pathname: string): Locale {
  return pathname === '/ko' || pathname.startsWith('/ko/') ? 'ko' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const locale = pathnameToLocale(pathname)
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return useContext(LocaleContext)
}

/** Korean overlay. `null` on EN so components keep locked English literals. */
export function useKo(): KoCopy | null {
  return useLocale() === 'ko' ? copy.ko : null
}

export function localeHome(locale: Locale): '/' | '/ko' {
  return locale === 'ko' ? '/ko' : '/'
}
