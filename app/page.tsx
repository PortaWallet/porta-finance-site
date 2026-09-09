import { Apps } from '@/components/apps'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { How } from '@/components/how'
import { Roadmap } from '@/components/roadmap'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { Trust } from '@/components/trust'

/** Marketing home is statically generated with daily ISR. */
export const revalidate = 86400

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <Trust />
        <How />
        <Apps />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
