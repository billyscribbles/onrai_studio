import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  { tag: 'eCommerce', name: 'Headless Shopify Rebuild' },
  { tag: 'SaaS', name: 'Startup MVP' },
  { tag: 'Trade', name: 'Service Business Site' },
  { tag: 'Healthcare', name: 'Clinic Booking Platform' },
  { tag: 'Hospitality', name: 'Restaurant & Events' },
  { tag: 'Consulting', name: 'Professional Services Portal' },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label">Recent Work</h2>
          <p className="section-sub">A selection of projects we've built and shipped.</p>
        </motion.div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="portfolio-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="portfolio-card__tag">{p.tag}</div>
              <div className="portfolio-card__bottom">
                <span className="portfolio-card__name">{p.name}</span>
                <span className="portfolio-card__arrow">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="portfolio__cta-wrap">
          <Link to="/portfolio" className="portfolio__cta">View All Work →</Link>
        </div>
      </div>
    </section>
  )
}
