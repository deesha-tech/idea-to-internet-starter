import fs from 'node:fs'
import path from 'node:path'

/**
 * Dev-only: writes the playbook's answers into BLUEPRINT.md (for Claude to
 * read) and content/blueprint-answers.json (for the playbook to reload),
 * and advances PROGRESS.md past Stage 1.
 *
 * In production this endpoint refuses to exist — the playbook is workshop
 * scaffolding, never part of the live website.
 */
export async function POST(request) {
  if (process.env.NODE_ENV === 'production') {
    return new Response(null, { status: 404 })
  }

  const { answers, prompt } = await request.json()
  const root = process.cwd()

  fs.writeFileSync(
    path.join(root, 'content', 'blueprint-answers.json'),
    JSON.stringify(answers, null, 2),
  )

  const blueprint = `# My Website Blueprint

> Written by the playbook (/playbook) — my answers, recorded. Claude: read
> this, confirm your understanding in plain words, ask me one question at a
> time about anything unclear or missing, and only then ask permission to
> build.

## Owner
${answers.ownerName || 'TODO'}

## Business / website name
${answers.businessName || 'TODO'}

## Purpose
${
  [...(answers.purposes || []), ...(answers.purposeOther ? [answers.purposeOther] : [])]
    .map((p) => `- ${p}`)
    .join('\n') || 'TODO'
}

## Audience
${
  [...(answers.audiences || []), ...(answers.audienceOther ? [answers.audienceOther] : [])]
    .map((a) => `- ${a}`)
    .join('\n') || 'TODO'
}

## Primary call to action (one loud button)
${answers.cta || 'TODO'}
${
  (answers.secondaryCtas || []).length
    ? `\nQuieter secondary actions: ${answers.secondaryCtas.join(', ')}`
    : ''
}

## Pages
${answers.pages.join(', ')}

## Layout
${answers.layout || 'TODO'} (see LAYOUTS.md; mixes allowed)

## Brand direction
${answers.direction || 'TODO'}

## Colours
Primary: ${answers.primaryColour || 'TODO'} · Accent: ${answers.accentColour || 'TODO'}

## Typography feel
${answers.typography || 'TODO'}

## Imagery style
${answers.imagery || 'TODO'}

## The real facts (the ONLY source for claims on the site)
- Location: ${answers.location || 'TODO'}
- Timings: ${answers.timings || 'TODO'}
- Experience: ${answers.experience || 'TODO'}
- WhatsApp: ${answers.whatsapp || 'TODO'}
- Services:
${
  (answers.services || []).length
    ? answers.services.map((s) => `  - ${s.name}${s.price ? ` — ₹${s.price}` : ''}`).join('\n')
    : '  - TODO'
}
${answers.otherFacts ? `- Also true: ${answers.otherFacts}` : ''}

## Reference websites I admire
${
  (answers.referenceSites || []).length
    ? answers.referenceSites.map((s) => `- ${s}`).join('\n') +
      '\n\n**Claude:** visit and study each reference during Stage 1.5 —' +
      ' layout, section order, effects, tone. Record what you learned per' +
      ' reference in the docs as [PROPOSED] items ("inspired by ref 1: …")' +
      ' adapted to MY business. Never copy their text, images, or exact' +
      ' colour scheme.'
    : '(none given — rely on the design-craft menu and the reference example)'
}

## Capabilities — what my website must be able to do
${
  (answers.features || []).length
    ? [
        answers.features.includes('gallery')
          ? `### Photo gallery\n- Categories: ${(answers.galleryCategories || []).join(', ') || 'TODO'}\n- Photos in public/images/gallery/<category>/, captions + published flags in content\n- Adding a photo = drop file + one caption line; every photo publish/unpublishable`
          : null,
        answers.features.includes('appointments')
          ? `### Appointment booking (WhatsApp close)\n- Days: ${(answers.apptDays || []).join(', ') || 'TODO'}\n- Slot length: ${answers.apptSlot || 'TODO'} · Window: ${answers.apptFrom || 'TODO'} – ${answers.apptTo || 'TODO'}\n- Slots live in content/appointments.json (published/taken flags); each open slot renders as a WhatsApp button with the slot prefilled`
          : null,
        answers.features.includes('events')
          ? `### Events & offers (campaign pages)\n- Typical: ${(answers.eventExamples || []).join(', ') || 'TODO'}\n- One entry in content/events.json = one page at /events/<slug>, WhatsApp CTA carrying the event name; active/published flags end campaigns`
          : null,
        answers.features.includes('testimonials')
          ? `### Customer words (real, with permission)\n${(answers.testimonialQuotes || []).map((q) => `- ${q}`).join('\n') || '- TODO'}`
          : null,
        answers.features.includes('faq')
          ? `### FAQ starters\n${(answers.faqQuestions || []).map((q) => `- ${q}`).join('\n') || '- TODO'}`
          : null,
      ]
        .filter(Boolean)
        .join('\n\n')
    : '(none selected in the playbook — ask me if any apply)'
}

**Claude:** when building, create the content files above prefilled from
these answers (every entry \`"published": true\`), so my real data is live
from version one.

## My requirements — Claude's to-do list
${
  (answers.requirements || []).length
    ? answers.requirements.map((r, i) => `${i + 1}. [ ] ${r}`).join('\n')
    : '(none recorded yet — add them with Claude as we build)'
}

## The build prompt my answers assembled
\`\`\`
${prompt}
\`\`\`

## Later ideas (parked, not forgotten)
<!-- payments, logins, booking engines, integrations… -->
`
  fs.writeFileSync(path.join(root, 'BLUEPRINT.md'), blueprint)

  // The structured facts flow straight into the site's own data file — the
  // playbook doubles as first data entry for the website the owner will
  // keep editing for years.
  const siteDataPath = path.join(root, 'content', 'site-data.json')
  try {
    const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'))
    const digits = String(answers.whatsapp || '').replace(/\D/g, '')
    siteData.business = {
      ...siteData.business,
      ...(answers.businessName ? { name: answers.businessName } : {}),
      ...(digits.length === 10
        ? { whatsapp: `91${digits}` }
        : digits.length === 12
          ? { whatsapp: digits }
          : {}),
      ...(answers.location ? { location: answers.location } : {}),
      ...(answers.timings ? { hours: answers.timings } : {}),
    }
    if ((answers.services || []).length) {
      siteData.services = answers.services.map((service) => ({
        name: service.name,
        detail: '',
        price: service.price || '',
      }))
    }
    fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2))
  } catch {}

  const progressPath = path.join(root, 'PROGRESS.md')
  try {
    const progress = fs
      .readFileSync(progressPath, 'utf8')
      .replace('- [ ] Stage 1', '- [x] Stage 1')
      .replace(
        /Current stage: \*\*.*\*\*/,
        'Current stage: **Stage 1.5 — Expand the foundation (docs/)**',
      )
    fs.writeFileSync(progressPath, progress)
  } catch {}

  return Response.json({ ok: true })
}
