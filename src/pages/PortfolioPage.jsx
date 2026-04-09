import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './PortfolioPage.css'

const projects = [
  {
    id: 1,
    tag: 'eCommerce',
    name: 'Headless Shopify Rebuild',
    description: 'Full storefront rebuild with headless Shopify, custom cart UX, and 40% faster load times.',
    services: ['Web Design', 'Development'],
    year: '2024',
    color: '#0c8c81',
    bg: 'var(--color-text)',
    dark: true,
  },
  {
    id: 2,
    tag: 'SaaS',
    name: 'Startup MVP',
    description: 'End-to-end MVP for a B2B SaaS startup — from landing page to dashboard onboarding flow.',
    services: ['Web Design', 'Branding'],
    year: '2024',
    color: '#0c8c81',
    bg: 'var(--color-accent-light)',
    dark: false,
  },
  {
    id: 3,
    tag: 'Trade',
    name: 'Service Business Site',
    description: 'Lead-gen website for a local tradie with Google Business integration and booking form.',
    services: ['Web Design', 'SEO'],
    year: '2024',
    color: '#16a34a',
    bg: '#f0fdf4',
    dark: false,
  },
  {
    id: 4,
    tag: 'Healthcare',
    name: 'Clinic Booking Platform',
    description: 'Patient-facing booking platform for a multi-location allied health clinic.',
    services: ['Web Design', 'Development'],
    year: '2023',
    color: '#0369a1',
    bg: '#f0f9ff',
    dark: false,
  },
  {
    id: 5,
    tag: 'Hospitality',
    name: 'Restaurant & Events',
    description: 'Showcase site for a restaurant group with integrated reservations and event enquiry flow.',
    services: ['Web Design', 'Branding'],
    year: '2023',
    color: '#7c3aed',
    bg: '#faf5ff',
    dark: false,
  },
  {
    id: 6,
    tag: 'Consulting',
    name: 'Professional Services Portal',
    description: 'Corporate website with resource library, team pages, and gated content download forms.',
    services: ['Web Design', 'Development', 'SEO'],
    year: '2023',
    color: '#0c8c81',
    bg: 'var(--color-accent)',
    dark: true,
  },
]

const categories = ['All', 'eCommerce', 'SaaS', 'Trade', 'Healthcare', 'Hospitality', 'Consulting']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tag === activeFilter)

  return (
    <main className="portfolio-page">
      <Helmet>
        <title>Our Work | Onrai Studio</title>
        <meta name="description" content="Browse Onrai Studio's portfolio of websites, eCommerce stores, and digital projects built for local and small Australian businesses." />
        <link rel="canonical" href="https://onraistudio.com/portfolio" />
        <meta property="og:title" content="Our Work | Onrai Studio" />
        <meta property="og:description" content="See the websites and digital projects we've built for Australian small businesses." />
        <meta property="og:url" content="https://onraistudio.com/portfolio" />
      </Helmet>

      {/* Hero */}
      <section className="portfolio-page__hero">
        <div className="portfolio-page__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="portfolio-page__eyebrow">Our Work</p>
            <h1 className="portfolio-page__title">Projects we're proud of.</h1>
            <p className="portfolio-page__subtitle">
              From local tradies to SaaS startups — a selection of websites and digital experiences we've built and shipped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="portfolio-page__gallery">
        <div className="portfolio-page__gallery-inner">

          <motion.div
            className="portfolio-page__filters"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-page__filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="portfolio-page__grid">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                className="pf-card"
                style={{ background: p.bg }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pf-card__top">
                  <span className="pf-card__tag" style={{ color: p.dark ? '#5eead4' : p.color, background: p.dark ? 'rgba(13,148,136,0.2)' : undefined }}>
                    {p.tag}
                  </span>
                </div>
                <div className="pf-card__body">
                  <h3 className={`pf-card__name${p.dark ? ' pf-card__name--dark' : ''}`}>{p.name}</h3>
                  <p className={`pf-card__desc${p.dark ? ' pf-card__desc--dark' : ''}`}>{p.description}</p>
                </div>
                <div className="pf-card__footer">
                  <div className="pf-card__services">
                    {p.services.map((s) => (
                      <span key={s} className={`pf-card__service-tag${p.dark ? ' pf-card__service-tag--dark' : ''}`}>{s}</span>
                    ))}
                  </div>
                  <span className={`pf-card__year${p.dark ? ' pf-card__year--dark' : ''}`}>{p.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-page__cta-section">
        <div className="portfolio-page__cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="portfolio-page__cta-heading">Ready to be next?</h2>
            <p className="portfolio-page__cta-sub">Let's talk about what you want to build.</p>
            <Link to="/contact" className="portfolio-page__cta-btn">Get a Free Quote →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
