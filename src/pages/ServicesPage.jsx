import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Monitor, Palette, PenTool, Layers, TrendingUp, Mail,
  Search, Share2, FileText, Megaphone, ArrowRight, Check
} from 'lucide-react'
import Contact from '../components/Contact'
import './ServicesPage.css'

const categories = [
  {
    id: 'web',
    eyebrow: 'Web Design & Development',
    heading: 'Websites that work as hard as you do.',
    desc: 'We design and build fast, modern websites that are built to rank on Google, load instantly, and turn visitors into paying customers. Every site is custom — no templates.',
    icon: Monitor,
    color: '#0d9488',
    services: [
      { name: 'Custom Website Design', desc: 'Unique, tailored designs that reflect your brand and convert visitors.' },
      { name: 'Mobile-First Development', desc: 'Every site is built responsive — perfect on phone, tablet, and desktop.' },
      { name: 'Speed Optimisation', desc: 'Fast load times improve Google ranking and reduce bounce rates.' },
      { name: 'CMS Integration', desc: 'Update your own content easily with WordPress, Sanity, or similar.' },
      { name: 'eCommerce Stores', desc: 'Shopify, WooCommerce, or custom — sell online with confidence.' },
      { name: 'Landing Pages', desc: 'High-converting pages for ads, campaigns, and lead generation.' },
    ],
  },
  {
    id: 'brand',
    eyebrow: 'Brand & Identity Design',
    heading: 'A brand that people remember.',
    desc: "Your brand is the first impression you make — and the last thing customers forget. We build cohesive identities from the ground up, or refresh what you already have.",
    icon: Layers,
    color: '#7c3aed',
    services: [
      { name: 'Logo Design', desc: 'Professional logos designed for every format — print, web, signage, and more.' },
      { name: 'Brand Identity Systems', desc: 'Colours, typography, spacing, and visual language — all working together.' },
      { name: 'Brand Guidelines', desc: 'A style guide so your brand stays consistent across every touchpoint.' },
      { name: 'Brand Refresh', desc: "Modernise an outdated identity while keeping what makes you recognisable." },
      { name: 'Business Card & Stationery', desc: 'Print-ready designs for cards, letterheads, and branded materials.' },
      { name: 'Favicon & App Icons', desc: 'Small details that make your brand look polished and professional.' },
    ],
  },
  {
    id: 'graphic',
    eyebrow: 'Graphic Design',
    heading: 'Design that sells.',
    desc: 'Great graphic design makes your business look credible, professional, and worth paying for. We create marketing materials that get noticed — online and in the real world.',
    icon: PenTool,
    color: '#ea580c',
    services: [
      { name: 'Social Media Graphics', desc: 'On-brand posts, stories, and banners for Instagram, Facebook, and LinkedIn.' },
      { name: 'Flyer & Poster Design', desc: 'Print-ready marketing collateral that grabs attention.' },
      { name: 'Email Newsletter Design', desc: 'Branded email templates that look great in every inbox.' },
      { name: 'Presentation Design', desc: 'Pitch decks and slide decks that make you look the part.' },
      { name: 'Menu & Price List Design', desc: 'Beautiful, print-ready menus for cafés, restaurants, and service businesses.' },
      { name: 'Signage & Banners', desc: 'Pull-up banners, shop signage, and display graphics.' },
    ],
  },
  {
    id: 'marketing',
    eyebrow: 'Digital Marketing',
    heading: 'Get found. Get leads. Grow.',
    desc: 'A great website is only half the equation. We help you drive traffic, capture leads, and build an online presence that compounds over time.',
    icon: TrendingUp,
    color: '#0ea5e9',
    services: [
      { name: 'SEO Strategy', desc: 'Keyword research, on-page SEO, and content strategy to rank on Google.' },
      { name: 'Google Business Profile', desc: 'Get found on Google Maps and local search — set up and optimised.' },
      { name: 'Google Ads Management', desc: 'Targeted paid search campaigns that bring in ready-to-buy customers.' },
      { name: 'Social Media Strategy', desc: 'A content plan and posting strategy that builds your audience consistently.' },
      { name: 'Email Marketing', desc: 'Campaigns, automations, and sequences that keep customers coming back.' },
      { name: 'Analytics & Reporting', desc: 'Monthly reporting so you know exactly what\'s working and what\'s not.' },
    ],
  },
]

const whyUs = [
  'One studio handles everything — no briefing multiple agencies',
  'Everything is on-brand and consistent across every channel',
  'Clear pricing — no hidden fees or scope creep surprises',
  'AU-based team in your timezone, not an overseas ticket system',
  'Month-to-month — stay because we deliver, not because you\'re locked in',
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Web Design, Branding & Digital Marketing | Onrai Studio</title>
        <meta name="description" content="Onrai Studio offers web design, logo design, brand identity, graphic design, and digital marketing for local and small businesses across Australia." />
        <link rel="canonical" href="https://onraistudio.com/services" />
        <meta property="og:url" content="https://onraistudio.com/services" />
        <meta property="og:title" content="Services — Web Design, Branding & Digital Marketing | Onrai Studio" />
        <meta property="og:description" content="Everything your business needs online — web design, branding, graphic design, and digital marketing. Melbourne-based studio, serving all of Australia." />
      </Helmet>

      <main className="services-page">

        {/* Hero */}
        <section className="sp__hero">
          <div className="sp__hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sp__hero-eyebrow">
                <span className="sp__hero-dot" />
                Full-service studio
              </div>
              <h1 className="sp__hero-heading">Everything your business<br />needs to grow online.</h1>
              <p className="sp__hero-lead">
                Web design, branding, graphic design, and digital marketing — all under one roof,
                all built around your business goals.
              </p>
              <div className="sp__hero-pills">
                {['Web Design', 'Logo Design', 'Brand Identity', 'Graphic Design', 'SEO', 'Google Ads', 'Social Media'].map(p => (
                  <span key={p} className="sp__hero-pill">{p}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service categories */}
        {categories.map((cat, ci) => {
          const Icon = cat.icon
          return (
            <section key={cat.id} className={`sp__category ${ci % 2 === 1 ? 'sp__category--alt' : ''}`}>
              <div className="sp__category-inner">
                <motion.div
                  className="sp__category-header"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="sp__category-icon" style={{ background: `${cat.color}18`, color: cat.color }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <span className="sp__category-eyebrow" style={{ color: cat.color }}>{cat.eyebrow}</span>
                  <h2 className="sp__category-heading">{cat.heading}</h2>
                  <p className="sp__category-desc">{cat.desc}</p>
                </motion.div>

                <div className="sp__services-grid">
                  {cat.services.map((s, i) => (
                    <motion.div
                      key={s.name}
                      className="sp__service-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <div className="sp__service-dot" style={{ background: cat.color }} />
                      <h3 className="sp__service-name">{s.name}</h3>
                      <p className="sp__service-desc">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="sp__category-cta"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <a href="#contact" className="sp__category-link" style={{ color: cat.color }}>
                    Ask about {cat.eyebrow.split(' ')[0]} services <ArrowRight size={14} />
                  </a>
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* Why one studio */}
        <section className="sp__why">
          <div className="sp__why-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="sp__why-heading">Why use one studio for everything?</h2>
              <p className="sp__why-sub">When design, development, and marketing all come from the same team, everything works together — consistently, efficiently, and on-brand.</p>
            </motion.div>
            <ul className="sp__why-list">
              {whyUs.map((item, i) => (
                <motion.li
                  key={i}
                  className="sp__why-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Check size={18} strokeWidth={2.5} className="sp__why-check" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
