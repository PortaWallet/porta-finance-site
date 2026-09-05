import Nav from '../components/Nav'
import Hero from '../components/Hero'
import LiveNow from '../components/LiveNow'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <LiveNow />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
