import { lazy, Suspense } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Trust = lazy(() => import('../components/Trust'))
const How = lazy(() => import('../components/How'))
const LiveNow = lazy(() => import('../components/LiveNow'))
const Roadmap = lazy(() => import('../components/Roadmap'))
const SocialBoard = lazy(() => import('../components/SocialBoard'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[24vh]" aria-hidden />}>
          <Trust />
          <How />
          <LiveNow />
          <Roadmap />
          <SocialBoard />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
