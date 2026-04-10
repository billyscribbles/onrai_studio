import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { Home, Mail } from 'lucide-react'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <main className="not-found">
      <Helmet>
        <title>Page Not Found | Onrai Studio</title>
        <meta name="description" content="This page doesn't exist. Let's get you back on track." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="not-found__hero">
        <div className="not-found__inner">
          <motion.div
            className="not-found__badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="not-found__dot" />
            Page not found
          </motion.div>

          <motion.h1
            className="not-found__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Well, this is awkward.
          </motion.h1>

          <motion.p
            className="not-found__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            There's nothing at <code className="not-found__path">{pathname}</code> —
            the link might be a little off, or this page was never here to begin with.
            Happens to the best of us.
          </motion.p>

          <motion.div
            className="not-found__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="not-found__btn not-found__btn--primary">
              <Home size={16} strokeWidth={2} />
              Take me home
            </Link>
            <Link to="/contact" className="not-found__btn not-found__btn--ghost">
              <Mail size={16} strokeWidth={2} />
              Say hello instead
            </Link>
          </motion.div>

          <motion.p
            className="not-found__footnote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            On the bright side, you just found our 404 page. Not many people do.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
