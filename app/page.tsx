"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import StatsSection from "@/components/home/StatsSection"
import How from "@/components/home/How"
import Services from "@/components/home/Services"
import Testimonials from "@/components/home/Testimonials"
import Pricing from "@/components/home/Pricing"
import Blog from "@/components/home/Blog"
import Faq from "@/components/home/Faq"
import CTA from "@/components/home/CTA"
import Contact from "@/components/home/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <How />
        <Services />
        <Testimonials />
        <Pricing />
        <Blog />
        <Faq />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
} 