import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

const Trust = dynamic(() =>
  import('@/components/trust').then((mod) => mod.Trust),
)
const How = dynamic(() => import('@/components/how').then((mod) => mod.How))
const Apps = dynamic(() => import('@/components/apps').then((mod) => mod.Apps))
const Roadmap = dynamic(() =>
  import('@/components/roadmap').then((mod) => mod.Roadmap),
)
const Contact = dynamic(() =>
  import('@/components/contact').then((mod) => mod.Contact),
)

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
