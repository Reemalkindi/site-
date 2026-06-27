import UtilityBar from './components/UtilityBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Sectors from './components/Sectors'
import CustomDesign from './components/CustomDesign'
import Marquee from './components/Marquee'
import Specialized from './components/Specialized'
import CapabilityIndex from './components/CapabilityIndex'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <UtilityBar />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Sectors />
        <CustomDesign />
        <Marquee />
        <Specialized />
        <CapabilityIndex />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
