import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/Sections/AboutSection'
import ServicesSection from '../components/Sections/ServicesSection'
import ReviewsSection from '../components/Sections/ReviewsSection'
import HowItWorks from '../components/Sections/HowItWorks'
import FeaturesSection from '../components/Sections/FeaturesSection'
import CTASection from '../components/Sections/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <HowItWorks />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
