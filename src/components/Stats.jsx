import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useIOInView } from 'react-intersection-observer'
import './Stats.css'

const STATS = [
  {
    value: 36,
    suffix: 'K+',
    label: 'Followers',
    sub: 'Instagram',
    color: '#E1306C',
    icon: 'ðŸ‘¥'
  },
  {
    value: 1.7,
    suffix: 'M+',
    label: 'Top Reel Views',
    sub: 'Single Reel',
    color: '#F77737',
    icon: 'ðŸŽ¬',
    decimals: 1
  },
  {
    value: 95.8,
    suffix: '%',
    label: 'Indian Audience',
    sub: 'Highly Targeted',
    color: '#833AB4',
    icon: 'ðŸ‡®ðŸ‡³',
    decimals: 1
  },
  {
    value: 57.9,
    suffix: '%',
    label: 'Bangalore Audience',
    sub: 'Local Dominance',
    color: '#C13584',
    icon: 'ðŸ“',
    decimals: 1
  },
  {
    value: 8.2,
    suffix: '%',
    label: 'Engagement Rate',
    sub: 'Above Industry Avg',
    color: '#FCAF45',
    icon: 'ðŸ’¥',
    decimals: 1
  },
  {
    value: 10,
    suffix: '+',
    label: 'Brand Collabs',
    sub: 'Paid Partnerships',
    color: '#E1306C',
    icon: 'ðŸ¤'
  },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useIOInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ '--stat-color': stat.color }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value">
        {inView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={2.5}
            decimals={stat.decimals || 0}
            suffix={stat.suffix}
            delay={index * 0.1}
          />
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sub">{stat.sub}</div>
      <div className="stat-glow" />
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section section">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          By The Numbers
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          REAL <span className="gradient-text">IMPACT</span>
        </motion.h2>

        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

