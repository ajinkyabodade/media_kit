import { useState } from 'react'
import { motion } from 'framer-motion'
import data from '../data/mediakit.json'
import './Contact.css'

export default function Contact() {
  const { phone, email, instagramUrl } = data.profile
  const [copied, setCopied] = useState(null)

  const copy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        {/* Big CTA */}
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-orb" />
          <div className="contact-orb-2" />

          <motion.div
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Work Together
          </motion.div>

          <motion.h2
            className="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            READY TO <span className="gradient-text">COLLAB?</span>
          </motion.h2>

          <motion.p
            className="contact-sub"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Whether you're a travel brand, hotel, resort, or automobile company — let's create content that moves people
            <b>Pricing??</b>
            Creating travel content is my passion. I don’t do this for the money—if a collaboration is genuinely interesting and mutually beneficial, I’m happy to work within your budget. Share the details and objectives, and we’ll make it work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <b>Pricing??</b>
          </motion.div>

            <motion.div
            className="contact-sub"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Creating travel content is my passion. I don’t do this for the money—if a collaboration is genuinely interesting and mutually beneficial, I’m happy to work within your budget. Share the details and objectives, and we’ll make it work.
          </motion.div>

          <motion.div
            className="contact-cards"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {/* Phone */}
            <div className="contact-card" onClick={() => copy(phone, 'phone')}>
              <div className="contact-card-icon">📞</div>
              <div className="contact-card-content">
                <span className="contact-card-label">Call / WhatsApp</span>
                <span className="contact-card-value">+91 {phone}</span>
              </div>
              <div className="contact-card-action">
                {copied === 'phone' ? '✓ Copied' : 'Copy'}
              </div>
            </div>

            {/* Email */}
            <div className="contact-card" onClick={() => copy(email, 'email')}>
              <div className="contact-card-icon">✉️</div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{email}</span>
              </div>
              <div className="contact-card-action">
                {copied === 'email' ? '✓ Copied' : 'Copy'}
              </div>
            </div>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-ig"
            >
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Instagram DM</span>
                <span className="contact-card-value">@nightfury_traveller</span>
              </div>
              <div className="contact-card-action">Open ↗</div>
            </a>
          </motion.div>

          {/* Direct action buttons */}
          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a href={`mailto:${email}?subject=Collaboration Inquiry - Brand Partnership`} className="btn-primary">
              <span>Send Collaboration Brief</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={`https://wa.me/91${phone}?text=Hi Ajinkya! I'd like to discuss a collaboration opportunity.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Me</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
