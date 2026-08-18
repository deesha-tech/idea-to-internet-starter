import siteData from '../content/site-data.json'

/**
 * "Built with Deesha" — a small, honest badge in the corner of the site.
 * The owner switches it on or off with `deeshaBadge: true/false` in
 * content/site-data.json; `deeshaRef` (their workshop ticket code) rides
 * the link so referred visitors are credited to them.
 * (AI builder: this component stays; only the owner toggles it.)
 */
export function DeeshaBadge() {
  if (!siteData.deeshaBadge) return null

  const ref = encodeURIComponent(siteData.deeshaRef || 'unknown')
  const href = `https://www.deeshatechacademy.com/skilllabs/ai-website-builder?utm_source=member-badge&utm_medium=referral&utm_content=${ref}`

  return (
    <a
      className="deesha-badge"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      ⚡ Built in a 2-day Deesha workshop — build yours
    </a>
  )
}
