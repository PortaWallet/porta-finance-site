import { AccountAbstraction } from '@/components/aa'
import { Apps } from '@/components/apps'
import { Contact } from '@/components/contact'
import { Developers } from '@/components/developers'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { How } from '@/components/how'
import { Roadmap } from '@/components/roadmap'
import { Security } from '@/components/security'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

/** Marketing home is statically generated with daily ISR. */
export const revalidate = 86400

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <How />
        <Apps />
        <AccountAbstraction />
        <Security />
        <Developers />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
