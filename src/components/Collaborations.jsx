import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../data/mediakit.json'
import './Collaborations.css'

export default function Collaborations() {
  const [active, setActive] = useState(0)
  const collabs = data.collaborations
  const current = collabs[active]

  return (
    <section className="collabs-section section" id="collaborations">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Past Work
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          BRAND <span className="gradient-text">COLLABS</span>
        </motion.h2>

        {/* Tab selector */}
        <div className="collab-tabs">
          {collabs.map((c, i) => (
            <motion.button
              key={c.id}
              className={`collab-tab ${active === i ? 'active' : ''}`}
              style={{ '--collab-color': c.color }}
              onClick={() => setActive(i)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="collab-tab-dot" />
              <span>{c.brand}</span>
            </motion.button>
          ))}
        </div>

        {/* Active collab detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="collab-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="collab-left">
              {/* Images */}
              <div className="collab-images">
                                  {current.images.map((src, i) => (
                    <motion.div
                      key={i}
                      className="collab-img-wrap"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <img
                        src={src}
                        alt={`${current.brand} ${i + 1}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"
                      />
                    </motion.div>
                  ))}
              </div>
            </div>

            <div className="collab-right">
              <div className="collab-type-badge" style={{ '--collab-color': current.color }}>
                {current.type}
              </div>

              <h3 className="collab-brand" style={{ color: current.color }}>
                {current.brand}
              </h3>

              <div className="collab-category">{current.category}</div>

              {current.highlight && (
                <div className="collab-highlight" style={{ '--collab-color': current.color }}>
                  <span className="highlight-icon">🔥</span>
                  <span className="highlight-text">{current.highlight}</span>
                </div>
              )}

              <p className="collab-desc">{current.description}</p>

              <div className="collab-links">
                {current.reel && (
                  <a
                    href={current.reel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link collab-link-reel"
                    style={{ '--collab-color': current.color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Reel
                  </a>
                )}
                {(current.story || (current.stories && current.stories[0])) && (
                  <a
                    href={current.story || current.stories[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collab-link collab-link-story"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                    View Stories
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All collabs mini grid */}
        <div className="collabs-mini-grid">
          {collabs.map((c, i) => (
            <motion.div
              key={c.id}
              className={`mini-collab-card ${active === i ? 'active' : ''}`}
              style={{ '--collab-color': c.color }}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="mini-collab-img">
                <img
                  src={c.images[0]}
                  alt={c.brand}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
                <div className="mini-collab-overlay" />
              </div>
              <div className="mini-collab-info">
                <span className="mini-collab-brand">{c.brand}</span>
                {c.highlight && (
                  <span className="mini-collab-highlight">{c.highlight}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
