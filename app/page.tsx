import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
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
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  )
}
