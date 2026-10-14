import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export function HelpShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
