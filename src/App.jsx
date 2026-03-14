import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import PhotoGallery from './components/PhotoGallery'
import Audience from './components/Audience'
import Analytics from './components/Analytics'
import Collaborations from './components/Collaborations'
import WhyMe from './components/WhyMe'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <Collaborations />
      <PhotoGallery />
      <Audience />
      <Analytics />
      <WhyMe />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
