import { motion } from 'framer-motion'
import data from '../data/mediakit.json'
import './Services.css'

const SERVICES = [
  { icon: '🎬', name: 'Instagram Reel', desc: 'Cinematic short-form video content with full creative direction', tag: 'Most Popular' },
  { icon: '📱', name: 'Instagram Stories', desc: 'Authentic day-in-life story series with swipe-up links', tag: null },
  { icon: '🖼️', name: 'Feed Posts', desc: 'High-quality photography with compelling captions', tag: null },
  { icon: '📍', name: 'Location Features', desc: 'Destination spotlights, hotel reviews & place recommendations', tag: null },
  { icon: '🔗', name: 'Brand Integration', desc: 'Seamless product/service integration into travel content', tag: null },
  { icon: '🤝', name: 'Long-term Campaign', desc: 'Multi-post brand ambassador deals with consistent exposure', tag: 'Best Value' },
]

export default function Services() {
  return (
    <section className="services-section section">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          What I Offer
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          COLLAB <span className="gradient-text">FORMATS</span>
        </motion.h2>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              {s.tag && (
                <div className={`service-tag ${s.tag === 'Most Popular' ? 'tag-orange' : 'tag-gold'}`}>
                  {s.tag}
                </div>
              )}
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-arrow">→</div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="process-title">How It Works</h3>
          <div className="process-steps">
            {[
              { num: '01', title: 'Reach Out', desc: 'Drop a message with your brand brief' },
              { num: '02', title: 'Align', desc: 'We discuss goals, format & timeline' },
              { num: '03', title: 'Create', desc: 'I craft authentic, high-quality content' },
              { num: '04', title: 'Publish', desc: 'Content goes live, results tracked' },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
                {i < 3 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
