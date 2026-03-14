import { motion } from 'framer-motion'
import './WhyMe.css'

const REASONS = [
  {
    icon: '🎯',
    title: 'Hyper-Local Reach',
    desc: '85.7% of my audience is from Bangalore — the most valuable market for South India brands. Your message reaches the right people, in the right city.',
    color: '#E1306C'
  },
  {
    icon: '🔥',
    title: 'Proven Viral Content',
    desc: 'A track record of viral reels — 1.7M+ views on a single reel, 1M+ on another. I know what makes content explode.',
    color: '#F77737'
  },
  {
    icon: '🤝',
    title: 'Authentic Storytelling',
    desc: 'No scripted ads. Every collaboration is woven naturally into my journey — making your brand feel like part of the adventure.',
    color: '#833AB4'
  },
  {
    icon: '📊',
    title: 'High Engagement',
    desc: '8.2% engagement rate — far above the industry average of 1-3%. My audience doesn\'t just watch, they interact.',
    color: '#C13584'
  },
  {
    icon: '🏍️',
    title: 'Niche Authority',
    desc: 'Riding, trekking, and travel in South India — I own this niche. Brands in travel, hospitality, and automobiles get unmatched credibility.',
    color: '#FCAF45'
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Professional, reliable, and deadline-driven. From brief to publish — I deliver quality content that exceeds expectations.',
    color: '#E1306C'
  },
]

export default function WhyMe() {
  return (
    <section className="whyme-section section">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Why Partner With Me
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          THE <span className="gradient-text">ADVANTAGE</span>
        </motion.h2>

        <div className="whyme-grid">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              className="whyme-card"
              style={{ '--reason-color': r.color }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="whyme-icon">{r.icon}</div>
              <h3 className="whyme-title">{r.title}</h3>
              <p className="whyme-desc">{r.desc}</p>
              <div className="whyme-glow" />
            </motion.div>
          ))}
        </div>

        {/* Target brands */}
        <motion.div
          className="target-brands"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="target-title">Ideal Brand Partners</h3>
          <div className="target-grid">
            {[
              { icon: '✈️', label: 'Travel Companies' },
              { icon: '🏨', label: 'Hotels & Resorts' },
              { icon: '🏍️', label: 'Automobile Brands' },
              { icon: '🎒', label: 'Outdoor & Gear' },
              { icon: '🍽️', label: 'F&B & Cafes' },
              { icon: '📸', label: 'Camera & Tech' },
            ].map((b, i) => (
              <motion.div
                key={i}
                className="target-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.07 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <span className="target-icon">{b.icon}</span>
                <span className="target-label">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
