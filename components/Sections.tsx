import Hero from '@/components/Hero'
import About from '@/components/About'
import DevelopmentCycle from '@/components/DevelopmentCycle'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import LoadingIndicator from '@/components/LoadingIndicator'
import LanguageToggle from '@/components/LanguageToggle'

/** Ordered page composition, shared by the EN (/) and FR (/fr) routes. */
export default function Sections() {
  return (
    <main className="min-h-screen">
      <LoadingIndicator />
      <LanguageToggle />
      <div className="animate-fade-in">
        <Hero />
        <About />
        <div className="section-grid">
          <DevelopmentCycle />
        </div>
        <Services />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </main>
  )
}
