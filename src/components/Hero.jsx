import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow hero__fade-up" style={{ animationDelay: '0s' }}>
            AI-Powered Web Studio · Melbourne · Australia
          </span>

          <h1 className="hero__headline hero__fade-up" style={{ animationDelay: '0s' }}>
            Your Business,<br />
            <span className="hero__headline-accent">Found Online.</span>
          </h1>

          <p className="hero__subheadline hero__fade-up" style={{ animationDelay: '0.1s' }}>
            We build fast, AI-powered websites for Melbourne small businesses — so your customers find you on Google, not your competitors.
          </p>

          <div className="hero__ctas hero__fade-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="hero__cta-primary">
              Get a Free Quote →
            </a>
            <a href="#packages" className="hero__cta-secondary">
              See Packages
            </a>
          </div>

          <div className="hero__trust-row hero__fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="hero__trust-item">✓ Live in 2 weeks</span>
            <span className="hero__trust-item">✓ Melbourne based</span>
          </div>
        </div>

        <div className="hero__visual hero__slide-in">
          <div className="hero__composition">
            {/* Google search result mockup */}
            <div className="hero__search-card">
              <div className="hero__search-bar">
                <div className="hero__search-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </div>
                <span className="hero__search-text">best plumber near me</span>
              </div>
              <div className="hero__search-results">
                <div className="hero__search-result hero__search-result--top">
                  <div className="hero__result-rank">#1</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title">Mike's Plumbing — Fast &amp; Reliable</div>
                    <div className="hero__result-url">mikesplumbing.com.au</div>
                    <div className="hero__result-desc">Licensed plumber serving Melbourne &amp; surrounds. Same-day service available. Get a free quote online.</div>
                    <div className="hero__result-stars" aria-label="5 stars">★★★★★ <span>4.9 (83 reviews)</span></div>
                  </div>
                </div>
                <div className="hero__search-result hero__search-result--fade">
                  <div className="hero__result-rank">#2</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title-muted">Melbourne Plumbing Co.</div>
                    <div className="hero__result-desc-muted">General plumbing services...</div>
                  </div>
                </div>
                <div className="hero__search-result hero__search-result--fade">
                  <div className="hero__result-rank">#3</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title-muted">All Hours Plumbers</div>
                    <div className="hero__result-desc-muted">Emergency plumbing available...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}
            <div className="hero__float-badge">
              <div className="hero__float-badge-dot" />
              <span className="hero__float-badge-text">AI SEO Active</span>
            </div>

            {/* Floating stat card */}
            <div className="hero__float-stat">
              <div className="hero__float-stat-value">+340%</div>
              <div className="hero__float-stat-label">More website visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
