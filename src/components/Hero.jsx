import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import data from '../data/mediakit.json'
import './Hero.css'

const TRAVEL_PHOTOS = data.travelPhotos.slice(0, 6)

export default function Hero() {
  const bgRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      gsap.to(bgRef.current, {
        x: x,
        y: y,
        duration: 1.5,
        ease: 'power2.out'
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section className="hero" id="about">
      {/* Background collage */}
      <div className="hero-bg" ref={bgRef}>
        {TRAVEL_PHOTOS.map((src, i) => (
          <div key={i} className={`hero-bg-img hero-bg-img-${i}`}>
            <img
              src={src}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
        ))}
        <div className="hero-bg-overlay" />
      </div>

      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Scrolling ticker */}
      <div className="hero-ticker">
        <div className="ticker-track">
          {Array(6).fill(['TRAVEL', 'RIDE', 'TREK', 'EXPLORE', 'SOUTH INDIA', 'ADVENTURE']).flat().map((word, i) => (
            <span key={i} className="ticker-item">
              {word} <span className="ticker-dot">&#10022;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="badge-dot" />
          <span>Available for Collaborations</span>
        </motion.div>

        <motion.div
          className="hero-title-wrap"
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="hero-title-line">
            <motion.span
              className="hero-title-word"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              NIGHT
            </motion.span>
            <motion.span
              className="hero-title-word accent"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              FURY
            </motion.span>
          </div>
          <div className="hero-title-line">
            <motion.span
              className="hero-title-word outline"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              TRAVELLER
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          Ajinkya Bodade &mdash; Riding through the soul of South India.<br />
          <span className="hero-sub-accent">Traveller. Rider. Trekker. Storyteller.</span>
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <a href="#contact" className="btn-primary">
            <span>Let&apos;s Collaborate</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={data.profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <span>@nightfury_traveller</span>
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          className="hero-floating-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          {[
            { value: '36K+', label: 'Followers' },
            { value: '1.7M+', label: 'Top Reel Views' },
            { value: '95.8%', label: 'Indian Audience' },
            { value: '8.2%', label: 'Engagement Rate' },
          ].map((stat, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
