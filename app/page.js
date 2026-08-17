import Link from 'next/link'
import siteData from '../content/site-data.json'

/**
 * The branded welcome — what every participant sees at the warm-up session
 * when `npm run dev` first works. Claude replaces this page with the real
 * homepage in Stage 2; the playbook stays at /playbook (dev-only).
 */
export default function Home() {
  return (
    <main className="starter">
      <p className="starter-brand">Idea to Internet · a Deesha SkillLab</p>
      <p className="starter-badge">It works! 🎉</p>
      <h1>{siteData.business.name}</h1>
      <p className="starter-tagline">{siteData.business.tagline}</p>
      <p className="starter-hint">
        This is your website&rsquo;s starting point. First stop: the
        playbook — answer its questions and watch your build prompt take
        shape.
      </p>
      <Link href="/playbook" className="starter-cta">
        Open my playbook →
      </Link>
      <p className="starter-fine">
        Already finished the playbook? Tell Claude:&nbsp;
        <strong>“Read my blueprint and confirm before building.”</strong>
      </p>
    </main>
  )
}
