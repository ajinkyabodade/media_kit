import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../data/mediakit.json'
import './PhotoGallery.css'

export default function PhotoGallery() {
  const [activeIdx, setActiveIdx] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const photos = data.travelPhotos
  const trackRef = useRef(null)

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % photos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [photos.length])

  useEffect(() => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.children[0]?.offsetWidth + 16 || 320
      trackRef.current.scrollTo({
        left: currentSlide * itemWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSlide])

  return (
    <section className="gallery-section">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Visual Portfolio
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          THROUGH THE <span className="gradient-text">LENS</span>
        </motion.h2>
        <motion.p
          className="gallery-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Cinematic frames from the roads less travelled — South India's hidden gems, captured raw.
        </motion.p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="gallery-scroll-wrap">
        <div className="gallery-track" ref={trackRef}>
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
              onClick={() => setActiveIdx(i)}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <img
                src={src}
                alt={`Travel photo ${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom">⊕</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="gallery-fade-left" />
        <div className="gallery-fade-right" />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={photos[activeIdx]}
                alt="Travel"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
              <button className="lightbox-close" onClick={() => setActiveIdx(null)}>✕</button>
              <button
                className="lightbox-prev"
                onClick={() => setActiveIdx((activeIdx - 1 + photos.length) % photos.length)}
              >‹</button>
              <button
                className="lightbox-next"
                onClick={() => setActiveIdx((activeIdx + 1) % photos.length)}
              >›</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
