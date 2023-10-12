import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <About/>
      <Footer/>
    </>
  )
}

export default LandingPage