import { motion } from 'framer-motion'
import './Industries.css'

const industries = [
  { emoji: '🧹', name: 'Cleaning Services' },
  { emoji: '🔧', name: 'Mechanics & Auto Repair' },
  { emoji: '☕', name: 'Cafés & Coffee Shops' },
  { emoji: '🍕', name: 'Restaurants & Takeaway' },
  { emoji: '✂️', name: 'Hairdressers & Barbers' },
  { emoji: '💅', name: 'Beauty Salons & Nail Studios' },
  { emoji: '🔩', name: 'Plumbers' },
  { emoji: '⚡', name: 'Electricians' },
  { emoji: '🌿', name: 'Landscapers & Gardeners' },
  { emoji: '🏗️', name: 'Builders & Tradies' },
  { emoji: '🏠', name: 'Real Estate Agents' },
  { emoji: '🦷', name: 'Dentists & Dental Clinics' },
  { emoji: '💪', name: 'Gyms & Personal Trainers' },
  { emoji: '🐾', name: 'Pet Groomers & Vets' },
  { emoji: '🛍️', name: 'Retail & Gift Shops' },
  { emoji: '💐', name: 'Florists' },
  { emoji: '📸', name: 'Photographers & Videographers' },
  { emoji: '🧘', name: 'Yoga & Wellness Studios' },
  { emoji: '🚚', name: 'Removalists & Couriers' },
  { emoji: '🧑‍⚕️', name: 'Physio & Allied Health' },
  { emoji: '📚', name: 'Tutors & Education' },
  { emoji: '🎂', name: 'Bakeries & Catering' },
  { emoji: '🔐', name: 'Locksmiths & Security' },
  { emoji: '🏊', name: 'Pool & Spa Services' },
]

const rowSize = Math.ceil(industries.length / 3)
const rows = [
  industries.slice(0, rowSize),
  industries.slice(rowSize, rowSize * 2),
  industries.slice(rowSize * 2),
]

function ChipRow({ items, direction }) {
  const doubled = [...items, ...items]
  return (
    <div className="industries__runway-wrap">
      <div
        className={`industries__runway ${direction === 'right' ? 'industries__runway--reverse' : ''}`}
      >
        {doubled.map((industry, i) => (
          <div key={`${industry.name}-${i}`} className="industry-chip">
            <span className="industry-chip__emoji">{industry.emoji}</span>
            <span className="industry-chip__name">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries__inner">
        <motion.div
          className="industries__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="industries__eyebrow">We work with all industries</span>
          <h2 className="industries__heading">Sound like your business?</h2>
          <p className="industries__sub">
            We've helped local businesses across Australia get online and start winning more customers.
            If your industry is listed below — or even if it's not — we'd love to chat.
          </p>
        </motion.div>

        <motion.div
          className="industries__rows"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChipRow items={rows[0]} direction="left" />
          <ChipRow items={rows[1]} direction="right" />
          <ChipRow items={rows[2]} direction="left" />
        </motion.div>

        <motion.div
          className="industries__cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="industries__cta-text">Don't see your industry? <strong>We work with everyone.</strong></p>
          <a href="#contact" className="industries__cta-btn">Get a free quote →</a>
        </motion.div>
      </div>
    </section>
  )
}
