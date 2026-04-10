import './SitemapDiagram.css'

const pages = ['/', '/about', '/services', '/contact', '/portfolio']

export default function SitemapDiagram() {
  return (
    <div className="sitemap-diagram">
      <div className="sitemap-diagram__top">
        <div className="sitemap-diagram__file">
          <span className="sitemap-diagram__file-icon" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="sitemap-diagram__file-name">sitemap.xml</span>
        </div>

        <div className="sitemap-diagram__arrow" aria-hidden="true">
          <span className="sitemap-diagram__arrow-line" />
          <span className="sitemap-diagram__arrow-label">Google reads this</span>
        </div>

        <div className="sitemap-diagram__bot">
          <span className="sitemap-diagram__bot-eye" aria-hidden="true" />
          <span className="sitemap-diagram__bot-eye" aria-hidden="true" />
          <span className="sitemap-diagram__bot-label">Googlebot</span>
        </div>
      </div>

      <div className="sitemap-diagram__trunk" aria-hidden="true" />

      <div className="sitemap-diagram__branches" aria-hidden="true" />

      <div className="sitemap-diagram__pages">
        {pages.map((p) => (
          <div key={p} className="sitemap-diagram__page">
            <span className="sitemap-diagram__page-stem" aria-hidden="true" />
            <span className="sitemap-diagram__page-label">{p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
