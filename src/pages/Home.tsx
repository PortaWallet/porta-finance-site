import { lazy, Suspense } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Networks = lazy(() => import('../components/Networks'))
const LiveNow = lazy(() => import('../components/LiveNow'))
const Roadmap = lazy(() => import('../components/Roadmap'))

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden />}>
          <Networks />
          <LiveNow />
          <Roadmap />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
