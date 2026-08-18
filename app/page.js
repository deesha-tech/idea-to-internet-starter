import siteData from '../content/site-data.json'

/** The readiness screen is replaced only through an approved build task. */
export default function Home() {
  return (
    <main className="starter">
      <p className="starter-brand">Idea to Internet · a Deesha SkillLab</p>
      <p className="starter-badge">Starter ready ✓</p>
      <h1>{siteData.business.name}</h1>
      <p className="starter-tagline">{siteData.business.tagline}</p>
      <div className="starter-panel">
        <h2>Begin with your visual playbook</h2>
        <p>
          Answer a few simple foundation questions, copy the prompt it creates,
          and paste it into the Deesha GPT. The GPT will then guide your design
          and website decisions.
        </p>
        <a className="starter-action" href="/playbook">Open my Foundation Playbook →</a>
      </div>
      <p className="starter-fine">
        पुढची पायरी: visual playbook पूर्ण करा आणि तयार prompt GPT मध्ये paste करा.
      </p>
    </main>
  )
}
