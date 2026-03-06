import React, { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import InfluencerSection from './components/InfluencerSection'
import CRMSection from './components/CRMSection'
import Process from './components/Process'
import ForBoth from './components/ForBoth'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Navbar onTalk={() => setModalOpen(true)} />
      <main>
        <Hero onTalk={() => setModalOpen(true)} />
        <Marquee />
        <Services />
        <InfluencerSection />
        <CRMSection />
        <Process />
        <ForBoth />
        <CTA onTalk={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
