import HeroSection        from '../components/sections/HeroSection'
import ServicesSection    from '../components/sections/ServicesSection'
import AboutSection       from '../components/sections/AboutSection'
import ImpactSection      from '../components/sections/ImpactSection'
import ProgramsSection    from '../components/sections/ProgramsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import StoriesSection     from '../components/sections/StoriesSection'
import CTASection         from '../components/sections/CTASection'
import PartnersSection    from '../components/sections/PartnersSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ImpactSection />
      <ProgramsSection />
      <TestimonialsSection />
      <StoriesSection />
      <CTASection />
      <PartnersSection />
    </>
  )
}
