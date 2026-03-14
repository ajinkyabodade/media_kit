import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import data from '../data/mediakit.json'
import './Analytics.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

const METRICS = [
  { key: 'views', label: 'Views', color: '#E1306C', fill: 'rgba(225,48,108,0.12)' },
  { key: 'reach', label: 'Reach', color: '#833AB4', fill: 'rgba(131,58,180,0.12)' },
  { key: 'interactions', label: 'Interactions', color: '#F77737', fill: 'rgba(247,119,55,0.12)' },
  { key: 'follows', label: 'New Follows', color: '#C13584', fill: 'rgba(193,53,132,0.12)' },
]

function formatDate(d) {
  const date = new Date(d)
  return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
}

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
  return n
}

export default function Analytics() {
  const [active, setActive] = useState('views')
  const metric = METRICS.find(m => m.key === active)
  const rawData = data.analytics[active]
  const labels = rawData.map(d => formatDate(d.date))
  const values = rawData.map(d => d.value)
  const total = values.reduce((a, b) => a + b, 0)
  const avg = Math.round(total / values.length)
  const peak = Math.max(...values)

  const chartData = {
    labels,
    datasets: [{
      data: values,
      borderColor: metric.color,
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300)
        gradient.addColorStop(0, metric.fill.replace('0.12', '0.3'))
        gradient.addColorStop(1, metric.fill.replace('0.12', '0'))
        return gradient
      },
      borderWidth: 2.5,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: metric.color,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(10,10,18,0.95)',
        borderColor: metric.color,
        borderWidth: 1,
        titleColor: '#fff',
        bodyColor: 'rgba(255,255,255,0.7)',
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: ctx => ` ${formatNum(ctx.raw)} ${metric.label}`
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.03)' },
        ticks: {
          color: 'rgba(255,255,255,0.35)',
          font: { family: 'Inter', size: 10 },
          maxTicksLimit: 10,
        },
        border: { color: 'rgba(255,255,255,0.06)' }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: {
          color: 'rgba(255,255,255,0.35)',
          font: { family: 'Inter', size: 10 },
          callback: v => formatNum(v)
        },
        border: { color: 'rgba(255,255,255,0.06)' }
      }
    }
  }

  return (
    <section className="analytics-section section" id="analytics">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          12 Feb – 13 Mar 2026
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          GROWTH <span className="gradient-text-cyan">METRICS</span>
        </motion.h2>

        {/* Metric tabs */}
        <div className="metric-tabs">
          {METRICS.map(m => (
            <button
              key={m.key}
              className={`metric-tab ${active === m.key ? 'active' : ''}`}
              style={{ '--tab-color': m.color }}
              onClick={() => setActive(m.key)}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Summary cards */}
        <div className="analytics-summary">
          {[
            { label: 'Total', value: formatNum(total) },
            { label: 'Daily Avg', value: formatNum(avg) },
            { label: 'Peak Day', value: formatNum(peak) },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="summary-card"
              style={{ '--tab-color': metric.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="summary-value">{s.value}</span>
              <span className="summary-label">{s.label} {metric.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          className="chart-container card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="chart-header">
            <span className="chart-dot" style={{ background: metric.color }} />
            <span className="chart-title">{metric.label} â€” 12 Feb – 13 Mar 2026</span>
          </div>
          <div className="chart-area">
            <Line data={chartData} options={options} />
          </div>
        </motion.div>

        {/* Data source note */}
        <motion.div
          className="data-source-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Performance metrics (Views, Reach, Interactions, Follows) sourced directly from <strong>Facebook Business Suite</strong> and <strong>official Instagram Insights</strong> for the period 12 Feb – 13 Mar 2026.</span>
        </motion.div>
      </div>
    </section>
  )
}

