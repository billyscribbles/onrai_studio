import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Mail } from 'lucide-react'
import Contact from '../components/Contact'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Us | Onrai Studio</title>
        <meta name="description" content="Get in touch with Onrai Studio. Based in Australia — we build websites and digital solutions for local and small businesses. Free quote within 1 business day." />
        <link rel="canonical" href="https://onraistudio.com/contact" />
        <meta property="og:title" content="Contact Us | Onrai Studio" />
        <meta property="og:description" content="Reach out to Onrai Studio for a free quote. AU-based web design studio specialising in local business websites." />
        <meta property="og:url" content="https://onraistudio.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="contact-page__eyebrow">Get in Touch</p>
            <h1 className="contact-page__title">Let's build something together.</h1>
            <p className="contact-page__subtitle">
              Tell us about your business and we'll get back to you with a free, no-obligation quote within 1 business day.
            </p>
          </motion.div>

          <motion.div
            className="contact-page__info-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-page__info-item">
              <Mail size={18} strokeWidth={1.8} className="contact-page__info-icon" />
              <a href="mailto:hello@onraistudio.com" className="contact-page__info-link">
                hello@onraistudio.com
              </a>
            </div>
            <div className="contact-page__info-item">
              <MapPin size={18} strokeWidth={1.8} className="contact-page__info-icon" />
              <span>Based in Australia</span>
            </div>
            <div className="contact-page__info-item">
              <Clock size={18} strokeWidth={1.8} className="contact-page__info-icon" />
              <span>Reply within 1 business day</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <Contact />
    </main>
  )
}
