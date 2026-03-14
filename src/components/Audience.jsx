import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import data from '../data/mediakit.json'
import './Audience.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 600

const chartDefaults = {
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(10,10,18,0.95)',
      borderColor: 'rgba(193,53,132,0.3)',
      borderWidth: 1,
      titleColor: '#fff',
      bodyColor: 'rgba(255,255,255,0.7)',
      padding: 12,
      cornerRadius: 8,
    }
  }
}

export default function Audience() {
  const { ageGender, topCities, topCountries, gender } = data.audience
  const mobile = isMobile()
  const tickSm = mobile ? 9 : 11
  const tickMd = mobile ? 9 : 12

  const ageBarData = {
    labels: ageGender.map(d => d.age),
    datasets: [
      {
        label: 'Men',
        data: ageGender.map(d => d.men),
        backgroundColor: 'rgba(131,58,180,0.85)',
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Women',
        data: ageGender.map(d => d.women),
        backgroundColor: 'rgba(225,48,108,0.75)',
        borderRadius: 6,
        borderSkipped: false,
      }
    ]
  }

  const genderDoughnut = {
    labels: ['Men', 'Women'],
    datasets: [{
      data: [gender.men, gender.women],
      backgroundColor: ['rgba(131,58,180,0.9)', 'rgba(225,48,108,0.85)'],
      borderColor: ['#833AB4', '#E1306C'],
      borderWidth: 2,
      hoverOffset: 8,
    }]
  }

  const cityBarData = {
    labels: topCities.slice(0, 6).map(c => c.city.split(',')[0]),
    datasets: [{
      label: 'Audience %',
      data: topCities.slice(0, 6).map(c => c.percent),
      backgroundColor: [
        'rgba(225,48,108,0.9)',
        'rgba(193,53,132,0.85)',
        'rgba(131,58,180,0.8)',
        'rgba(247,119,55,0.8)',
        'rgba(252,175,69,0.75)',
        'rgba(193,53,132,0.7)',
      ],
      borderRadius: 8,
      borderSkipped: false,
    }]
  }

  const ageBarOptions = {
    ...chartDefaults,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Inter', size: tickSm }, maxRotation: 0 },
        border: { color: 'rgba(255,255,255,0.08)' }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: {
          color: 'rgba(255,255,255,0.5)',
          font: { family: 'Inter', size: tickSm },
          callback: v => v + '%',
          maxTicksLimit: mobile ? 4 : 6,
        },
        border: { color: 'rgba(255,255,255,0.08)' }
      }
    }
  }

  const cityBarOptions = {
    ...chartDefaults,
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: {
          color: 'rgba(255,255,255,0.5)',
          font: { family: 'Inter', size: tickSm },
          callback: v => v + '%',
          maxTicksLimit: mobile ? 4 : 6,
        },
        border: { color: 'rgba(255,255,255,0.08)' }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: 'rgba(255,255,255,0.7)',
          font: { family: 'Inter', size: tickMd },
        },
        border: { color: 'rgba(255,255,255,0.08)' }
      }
    }
  }

  return (
    <section className="audience-section section" id="audience">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Audience Insights
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          WHO <span className="gradient-text">FOLLOWS</span>
        </motion.h2>

        <div className="audience-grid">
          {/* Gender split */}
          <motion.div
            className="card audience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="card-title">Gender Split</h3>
            <div className="doughnut-wrap">
              <Doughnut
                data={genderDoughnut}
                options={{
                  ...chartDefaults,
                  cutout: '72%',
                  plugins: {
                    ...chartDefaults.plugins,
                    legend: {
                      display: true,
                      position: 'bottom',
                      labels: {
                        color: 'rgba(255,255,255,0.7)',
                        font: { family: 'Inter', size: mobile ? 11 : 12 },
                        padding: mobile ? 12 : 20,
                        usePointStyle: true,
                        pointStyleWidth: 8,
                      }
                    }
                  }
                }}
              />
              <div className="doughnut-center">
                <span className="doughnut-pct">{gender.men}%</span>
                <span className="doughnut-lbl">Male</span>
              </div>
            </div>
          </motion.div>

          {/* Age & Gender */}
          <motion.div
            className="card audience-card audience-card-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="card-title">Age &amp; Gender Distribution</h3>
            <div className="chart-legend">
              <span className="legend-dot" style={{ background: '#833AB4' }} /> Men
              <span className="legend-dot" style={{ background: '#E1306C', marginLeft: 16 }} /> Women
            </div>
            <div className="bar-wrap">
              <Bar data={ageBarData} options={ageBarOptions} />
            </div>
          </motion.div>

          {/* Top Cities */}
          <motion.div
            className="card audience-card audience-card-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="card-title">Top Cities</h3>
            <div className="bar-wrap">
              <Bar data={cityBarData} options={cityBarOptions} />
            </div>
          </motion.div>

          {/* Top Countries */}
          <motion.div
            className="card audience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="card-title">Top Countries</h3>
            <div className="countries-list">
              {topCountries.map((c, i) => (
                <div key={i} className="country-row">
                  <span className="country-name">{c.country}</span>
                  <div className="country-bar-wrap">
                    <motion.div
                      className="country-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(c.percent / 95.8) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                      style={{
                        background: i === 0
                          ? 'linear-gradient(90deg, #833AB4, #E1306C, #F77737)'
                          : 'rgba(255,255,255,0.15)'
                      }}
                    />
                  </div>
                  <span className="country-pct">{c.percent}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight callout */}
        <motion.div
          className="audience-callout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="callout-icon">&#128205;</div>
          <div className="callout-text">
            <strong>85.7%+ audience from Bangalore</strong> &mdash; the perfect reach for brands targeting South India&apos;s most active urban market.
          </div>
        </motion.div>

        {/* Data source note */}
        <motion.div
          className="data-source-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Audience demographics &amp; insights sourced directly from <strong>Facebook Business Suite</strong> and <strong>official Instagram Insights</strong>. Data reflects verified account analytics.</span>
        </motion.div>
      </div>
    </section>
  )
}