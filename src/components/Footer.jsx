import { motion } from 'framer-motion'
import data from '../data/mediakit.json'
import './Footer.css'

export default function Footer() {
  const { instagramUrl, email, phone } = data.profile

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">⚡</span>
              <span className="footer-logo-text">NIGHTFURY</span>
            </div>
            <p className="footer-tagline">
              Exploring the unexplored.<br />
              South India's roads, trails & stories.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @nightfury_traveller
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <a href="#about">About</a>
              <a href="#audience">Audience</a>
              <a href="#analytics">Analytics</a>
              <a href="#collaborations">Collaborations</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:+91${phone}`}>+91 {phone}</a>
              <a href={`https://wa.me/91${phone}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-inner">
            <span className="footer-copy">
              © 2026 Ajinkya Bodade · NightFury Traveller · All rights reserved
            </span>
            <span className="footer-made">
              Made with ❤️ for the road
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
