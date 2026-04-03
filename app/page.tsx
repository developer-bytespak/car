import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import HowItWorks from '@/components/HowItWorks'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  )
}
