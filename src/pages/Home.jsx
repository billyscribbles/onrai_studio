import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Industries from '../components/Industries'
import AIFeatures from '../components/AIFeatures'
import HowItWorks from '../components/HowItWorks'
import Shop from '../components/Shop'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <AIFeatures />
      <HowItWorks />
      <Shop />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}
