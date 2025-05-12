"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import StatsSection from "@/components/home/StatsSection"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        
        {/* Aquí se añadirían el resto de secciones a medida que se creen los componentes */}
        {/* <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
        <ContactSection /> */}
      </main>
      
      <Footer />
    </div>
  )
} 