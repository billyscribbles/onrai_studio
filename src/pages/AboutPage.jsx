import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import './AboutPage.css'

const milestones = [
  { year: '2022', text: 'Started freelancing — first client was a local café that needed a menu page.' },
  { year: '2023', text: 'Delivered 10+ sites for tradies, retailers, and health businesses across Australia.' },
  { year: '2024', text: 'Began integrating AI tools — chatbots, automated SEO, and smart content for small businesses.' },
  { year: '2025', text: 'Launched Onrai Studio officially. Focused exclusively on local and small business growth online.' },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Onrai Studio — Melbourne Web Design & Development Agency</title>
        <meta name="description" content="Onrai Studio is a Melbourne-based web design and development studio helping local and small businesses grow online with fast, modern websites, SEO, and AI tools." />
        <link rel="canonical" href="https://mystudio.com.au/about" />
        <meta property="og:url" content="https://mystudio.com.au/about" />
        <meta property="og:title" content="About Onrai Studio — Melbourne Web Design Agency" />
        <meta property="og:description" content="We're a lean, Melbourne-based studio that builds websites for local businesses. Senior-level work, clear pricing, no lock-in contracts." />
      </Helmet>
      <main className="about-page">
      {/* Page hero */}
      <section className="about-page__hero">
        <div className="about-page__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="about-page__back">← Back to home</Link>
            <h1 className="about-page__title">About Onrai Studio</h1>
            <p className="about-page__lead">
              We're a small Australian web studio that builds websites for the businesses that keep
              communities running — tradies, café owners, shop keepers, and service providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse the About component */}
      <About />

      {/* Timeline */}
      <section className="about-page__timeline">
        <div className="about-page__timeline-inner">
          <motion.h2
            className="about-page__timeline-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How we got here
          </motion.h2>
          <div className="about-page__milestones">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="about-page__milestone"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="about-page__milestone-year">{m.year}</span>
                <p className="about-page__milestone-text">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA into contact */}
      <Contact />
    </main>
    </>
  )
}
