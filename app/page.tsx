import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import LoadingIndicator from '@/components/LoadingIndicator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingIndicator />
      <div className="animate-fade-in">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </main>
  )
}
