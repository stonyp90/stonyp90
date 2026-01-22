import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ConsultingBrands from '@/components/ConsultingBrands'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import LoadingIndicator from '@/components/LoadingIndicator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingIndicator />
      <Hero />
      <Services />
      <ConsultingBrands />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  )
}
