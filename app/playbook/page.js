'use client'

import { useEffect, useMemo, useState } from 'react'
import { LayoutPreview } from './layout-previews'

/**
 * The Playbook — the workshop's interview as a guided walk. Questions are
 * English-first with Marathi · Hindi beneath in small type; every box
 * carries a short hint. Answers persist in localStorage, the master prompt
 * assembles live, and "Save my blueprint" writes BLUEPRINT.md for Claude.
 * Dev-only: the saving API refuses to exist in production.
 */

const LAYOUTS = [
  { id: 'L1', name: 'Classic Professional', for: 'consultants, services, agencies' },
  { id: 'L2', name: 'Split Hero Consultant', for: 'personal brands with a face' },
  { id: 'L3', name: 'Portfolio First', for: 'designers, photographers, artists' },
  { id: 'L4', name: 'Single-Page Lander', for: 'one product, one service, one goal' },
  { id: 'L5', name: 'Local Business', for: 'shops, clinics, salons, tuition' },
  { id: 'L6', name: 'Coaching / Training', for: 'trainers and course creators' },
]

const CTAS = [
  'WhatsApp us',
  'Contact me',
  'Book consultation',
  'Request quote',
  'View services',
  'Call now',
  'Register',
]

const PAGES = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'FAQ', 'Contact']

const DIRECTIONS = ['professional', 'minimal', 'modern', 'premium', 'creative', 'bold', 'friendly']

const PURPOSES = [
  'Bring new customer enquiries',
  'Look professional when people search for me',
  'Show my work and build trust',
  'Share prices, timings and location easily',
  'Get bookings over WhatsApp',
  'A portfolio for jobs or college',
]

const AUDIENCES = [
  'Local customers in my city',
  'Small business owners',
  'Families and households',
  'Students and parents',
  'Working professionals',
  'Customers across India',
]

const STEPS = [
  'Welcome',
  'Your facts',
  'Purpose',
  'Audience',
  'Action',
  'Features',
  'Pages',
  'Layout',
  'Look & feel',
  'Requirements',
  'Your prompt',
]

const FEATURES = [
  { id: 'gallery', label: 'Photo gallery' },
  { id: 'appointments', label: 'Appointment booking' },
  { id: 'events', label: 'Events & offers' },
  { id: 'testimonials', label: 'Customer words' },
  { id: 'faq', label: 'FAQ' },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const SLOT_LENGTHS = ['30 min', '45 min', '60 min', '90 min']

const PALETTES = [
  { name: 'Royal blue + saffron', primary: '#1d3a8a', accent: '#e8a33d' },
  { name: 'Mehendi green + gold', primary: '#2f5d3a', accent: '#c9a227' },
  { name: 'Maroon + blush', primary: '#7b2237', accent: '#e5b3b8' },
  { name: 'Teal + warm sand', primary: '#0e6f64', accent: '#dfc094' },
  { name: 'Charcoal + amber', primary: '#2b2b2b', accent: '#f0a11b' },
  { name: 'Navy + fresh sky', primary: '#12203a', accent: '#7db8e8' },
]

const TYPE_FEELS = [
  { label: 'Clean & modern', css: { fontFamily: 'system-ui, sans-serif' } },
  { label: 'Classic & trustworthy', css: { fontFamily: 'Georgia, "Times New Roman", serif' } },
  { label: 'Friendly & rounded', css: { fontFamily: 'ui-rounded, "Segoe UI", Verdana, sans-serif' } },
  { label: 'Bold & confident', css: { fontFamily: 'system-ui, sans-serif', fontWeight: 800, letterSpacing: '0.02em' } },
]

const IMAGERY_STYLES = ['My real photos', 'Minimal — few images', 'Illustrations']

const HANDOFF_PHRASE =
  'Read my blueprint, then expand it into the requirement, architecture and styleguide documents — and review them with me.'

/** Small style shifts per brand direction, for the live preview card. */
const DIRECTION_STYLE = {
  professional: { radius: 6 },
  minimal: { radius: 4, light: true },
  modern: { radius: 12 },
  premium: { radius: 8, dark: true, serif: true },
  creative: { radius: 16, tilt: true },
  bold: { radius: 6, heavy: true },
  friendly: { radius: 999 },
}

function hexFrom(text, fallback) {
  const match = /#[0-9a-fA-F]{6}/.exec(text || '')
  return match ? match[0] : fallback
}

/** A rough feel of the choices — not the design, just its direction. */
function StylePreview({ answers }) {
  const primary = hexFrom(answers.primaryColour, '#12203a')
  const accent = hexFrom(answers.accentColour, '#e8a33d')
  const type = TYPE_FEELS.find((t) => t.label === answers.typography)?.css ?? {}
  const direction = DIRECTION_STYLE[answers.direction] ?? { radius: 8 }
  const dark = direction.dark
  return (
    <div
      className="pb-style-preview"
      style={{
        background: dark ? primary : '#ffffff',
        border: `1px solid ${dark ? primary : '#e2ddd2'}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: Math.min(direction.radius, 16),
        transform: direction.tilt ? 'rotate(-0.6deg)' : 'none',
      }}
    >
      <p
        style={{
          ...type,
          ...(direction.serif ? { fontFamily: 'Georgia, serif' } : {}),
          fontWeight: direction.heavy ? 800 : (type.fontWeight ?? 700),
          textTransform: direction.heavy ? 'uppercase' : 'none',
          fontSize: '1.15rem',
          color: dark ? '#ffffff' : primary,
          ...(direction.light ? { fontWeight: 500 } : {}),
        }}
      >
        {answers.businessName || 'Your Business Name'}
      </p>
      <p style={{ fontSize: '0.8rem', color: dark ? 'rgba(255,255,255,0.75)' : '#6b6659' }}>
        {answers.location || 'Your city'} · {answers.timings || 'Your timings'}
      </p>
      <span
        style={{
          display: 'inline-block',
          marginTop: '0.5rem',
          background: accent,
          color: dark ? primary : '#ffffff',
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '0.35rem 0.9rem',
          borderRadius: direction.radius === 999 ? 999 : Math.min(direction.radius, 10),
          ...type,
        }}
      >
        {answers.cta || 'WhatsApp us'}
      </span>
    </div>
  )
}

const EMPTY = {
  requirements: [],
  services: [],
  ownerName: '',
  businessName: '',
  whatsapp: '',
  location: '',
  timings: '',
  experience: '',
  otherFacts: '',
  purposes: [],
  purposeOther: '',
  audiences: [],
  audienceOther: '',
  cta: '',
  secondaryCtas: [],
  features: [],
  galleryCategories: [],
  apptDays: [],
  apptSlot: '',
  apptFrom: '',
  apptTo: '',
  eventExamples: [],
  testimonialQuotes: [],
  faqQuestions: [],
  referenceSites: [],
  pages: ['Home'],
  layout: '',
  direction: '',
  primaryColour: '',
  accentColour: '',
  typography: '',
  imagery: '',
}

function joined(list, other, fallback) {
  const all = [...list, ...(other.trim() ? [other.trim()] : [])]
  return all.length ? all.join('; ') : fallback
}

function masterPrompt(a) {
  const layout = LAYOUTS.find((l) => l.id === a.layout)
  return [
    `Create a ${a.direction || '<brand direction>'} responsive website for ${a.businessName || '<my business>'}, serving ${joined(a.audiences, a.audienceOther, '<my audience>')}.`,
    `Purpose: ${joined(a.purposes, a.purposeOther, '<what the site should achieve>')}.`,
    `The primary call to action is “${a.cta || '<CTA>'}” — one loud button, everywhere it matters.${
      a.secondaryCtas.length
        ? ` Quieter secondary actions: ${a.secondaryCtas.join(', ')}.`
        : ''
    }`,
    `Pages: ${a.pages.join(', ')}.`,
    `Homepage layout: ${layout ? `${layout.id} — ${layout.name}` : '<layout>'} (see LAYOUTS.md).`,
    `Colours: primary ${a.primaryColour || '<primary>'}, accent ${a.accentColour || '<accent>'}. Typography feel: ${a.typography || '<feel>'}. Imagery: ${a.imagery || '<style>'}.`,
    `Use only these real facts in the copy — Location: ${a.location || '<location>'}. Timings: ${a.timings || '<timings>'}. Experience: ${a.experience || '<experience>'}. Services: ${
      a.services.length
        ? a.services.map((s) => `${s.name}${s.price ? ` (₹${s.price})` : ''}`).join(', ')
        : '<services>'
    }.${a.otherFacts ? ` Also true: ${a.otherFacts}.` : ''}`,
    a.features.length
      ? `Features: ${a.features.map((id) => FEATURES.find((f) => f.id === id)?.label ?? id).join(', ')}.`
      : null,
    a.features.includes('gallery') && a.galleryCategories.length
      ? `Gallery categories: ${a.galleryCategories.join(', ')} — photos in folders, captions in content, every photo publish/unpublishable.`
      : null,
    a.features.includes('appointments')
      ? `Appointments: ${a.apptDays.join('/') || '<days>'}, ${a.apptSlot || '<slot length>'} slots, ${a.apptFrom || '<from>'}–${a.apptTo || '<to>'} — slots live in content/appointments.json; each open slot is a WhatsApp booking button.`
      : null,
    a.features.includes('events') && a.eventExamples.length
      ? `Typical events/offers for campaign pages: ${a.eventExamples.join(', ')} — one entry in content/events.json per event.`
      : null,
    a.features.includes('testimonials') && a.testimonialQuotes.length
      ? `Real customer words (with permission): ${a.testimonialQuotes.map((q) => `“${q}”`).join(' · ')}`
      : null,
    a.features.includes('faq') && a.faqQuestions.length
      ? `FAQ starters (questions customers actually ask): ${a.faqQuestions.join(' · ')}`
      : null,
    a.referenceSites.length
      ? `Reference websites I admire: ${a.referenceSites.join(' · ')}. Study each one — layout, sections, effects, tone — and adapt the ideas that fit my business, improved for my context. Never copy their text, images, or exact colour scheme.`
      : null,
    a.requirements.length
      ? `My requirements, in my own words — treat this as your to-do list:\n${a.requirements.map((r, i) => `${i + 1}. ${r}`).join('\n')}`
      : null,
    `Before building: expand this blueprint into docs/REQUIREMENTS.md (a detailed living requirement document), docs/ARCHITECTURE.md (site map, sections, folder structure) and docs/STYLEGUIDE.md (real colour palette, type scale, component looks) — and review each with me in plain language first.`,
    `Work within CLAUDE.md: interview me about anything unclear (one question at a time), build in small confirmed steps, keep updatable content in content/site-data.json, and keep the site static in scope.`,
  ]
    .filter(Boolean)
    .join('\n')
}

/** Small Marathi · Hindi line under an English question. */
function Tri({ children }) {
  return <p className="pb-tri">{children}</p>
}

/** Field label with the translation inline, small. */
function Lab({ en, tri }) {
  return (
    <span className="pb-lab">
      {en} <em className="pb-tri-inline">{tri}</em>
    </span>
  )
}

/** A reusable add-remove list with its own input. */
function AddList({ items, onChange, placeholder, max }) {
  const [draft, setDraft] = useState('')
  function add() {
    const text = draft.trim()
    if (!text) return
    onChange([...items, text])
    setDraft('')
  }
  return (
    <>
      {items.length > 0 && (
        <ol className="pb-reqs">
          {items.map((item, index) => (
            <li key={`${index}-${item}`}>
              <span>{item}</span>
              <button
                type="button"
                aria-label={`Remove item ${index + 1}`}
                onClick={() => onChange(items.filter((_, i) => i !== index))}
              >
                ✕
              </button>
            </li>
          ))}
        </ol>
      )}
      {(!max || items.length < max) && (
        <div className="pb-addreq">
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                add()
              }
            }}
            placeholder={placeholder}
          />
          <button type="button" onClick={add}>Add</button>
        </div>
      )}
    </>
  )
}

export default function Playbook() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(EMPTY)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const [requirementDraft, setRequirementDraft] = useState('')
  const [serviceDraft, setServiceDraft] = useState({ name: '', price: '' })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('playbook-answers')
      if (stored) setAnswers({ ...EMPTY, ...JSON.parse(stored) })
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('playbook-answers', JSON.stringify(answers))
    } catch {}
  }, [answers])

  const prompt = useMemo(() => masterPrompt(answers), [answers])
  const set = (key) => (event) => setAnswers({ ...answers, [key]: event.target.value })
  const pick = (key, value) => () => setAnswers({ ...answers, [key]: value })
  const togglePage = (page) => () =>
    setAnswers({
      ...answers,
      pages: answers.pages.includes(page)
        ? answers.pages.filter((p) => p !== page)
        : [...answers.pages, page],
    })
  const toggleIn = (key, value) => () =>
    setAnswers({
      ...answers,
      [key]: answers[key].includes(value)
        ? answers[key].filter((item) => item !== value)
        : [...answers[key], value],
    })

  function addRequirement() {
    const text = requirementDraft.trim()
    if (!text) return
    setAnswers({ ...answers, requirements: [...answers.requirements, text] })
    setRequirementDraft('')
  }
  const removeRequirement = (index) => () =>
    setAnswers({
      ...answers,
      requirements: answers.requirements.filter((_, i) => i !== index),
    })

  function addService() {
    const name = serviceDraft.name.trim()
    if (!name) return
    setAnswers({
      ...answers,
      services: [...answers.services, { name, price: serviceDraft.price.trim() }],
    })
    setServiceDraft({ name: '', price: '' })
  }
  const removeService = (index) => () =>
    setAnswers({
      ...answers,
      services: answers.services.filter((_, i) => i !== index),
    })

  async function save() {
    setError('')
    try {
      const response = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, prompt }),
      })
      if (!response.ok) throw new Error()
      setSaved(true)
    } catch {
      setError('Could not save. Is the dev server running? Ask a volunteer!')
    }
  }

  return (
    <main className="pb">
      <header className="pb-head">
        <p className="starter-brand">Idea to Internet · Playbook</p>
        <div className="pb-progress">
          <span>
            Step {step + 1} of {STEPS.length} · {STEPS[step]}
          </span>
          <div className="pb-bar" aria-hidden="true">
            <div style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>
        <ol className="pb-steps" aria-label="Steps">
          {STEPS.map((label, index) => (
            <li key={label} className={index === step ? 'on' : index < step ? 'done' : ''}>
              {label}
            </li>
          ))}
        </ol>
      </header>

      <div className="pb-body">
        <section className="pb-card">
          {step === 0 && (
            <>
              <h1>Let&rsquo;s plan your website.</h1>
              <Tri>चला, तुमच्या वेबसाइटची योजना करूया. · चलिए, आपकी वेबसाइट की योजना बनाते हैं.</Tri>
              <p>
                Ten short steps. Your answers become your <strong>blueprint</strong> —
                and watch the panel beside you: your build prompt writes itself
                as you go. Nothing is final; you can come back anytime.
              </p>
              <Tri>दहा छोट्या पायऱ्या — तुमची उत्तरं म्हणजेच तुमचा आराखडा. · दस छोटे कदम — आपके जवाब ही आपका ब्लूप्रिंट हैं.</Tri>
              <button
                type="button"
                className="pb-reset"
                onClick={() => {
                  try {
                    localStorage.removeItem('playbook-answers')
                  } catch {}
                  setAnswers(EMPTY)
                  setSaved(false)
                }}
              >
                Start fresh — clear all my answers
              </button>
            </>
          )}
          {step === 1 && (
            <>
              <h2>You &amp; your facts</h2>
              <Tri>तुम्ही आणि तुमची खरी माहिती · आप और आपकी सच्ची जानकारी</Tri>
              <label>
                <Lab en="Your name" tri="तुमचं नाव · आपका नाम" />
                <input value={answers.ownerName} onChange={set('ownerName')} placeholder="e.g. Priya Sharma" />
              </label>
              <label>
                <Lab en="Business / website name" tri="व्यवसायाचं नाव · व्यवसाय का नाम" />
                <input value={answers.businessName} onChange={set('businessName')} placeholder="e.g. Priya Tax Consulting" />
              </label>
              <label>
                <Lab en="WhatsApp number" tri="व्हॉट्सॲप नंबर · व्हाट्सएप नंबर" />
                <input
                  value={answers.whatsapp}
                  onChange={set('whatsapp')}
                  inputMode="numeric"
                  placeholder="10-digit mobile — visitors will message this number"
                />
              </label>
              <label>
                <Lab en="Location" tri="ठिकाण · स्थान" />
                <input value={answers.location} onChange={set('location')} placeholder="e.g. Vishrambag, Sangli" />
              </label>
              <label>
                <Lab en="Timings" tri="वेळा · समय" />
                <input value={answers.timings} onChange={set('timings')} placeholder="e.g. Mon–Sat, 10 AM – 7 PM" />
              </label>
              <label>
                <Lab en="Experience" tri="अनुभव" />
                <input value={answers.experience} onChange={set('experience')} placeholder="e.g. 12 years of tailoring — only what's true" />
              </label>

              <p className="pb-lab">
                Services &amp; prices <em className="pb-tri-inline">सेवा आणि किंमती · सेवाएँ और कीमतें</em>
              </p>
              {answers.services.length > 0 && (
                <ol className="pb-reqs">
                  {answers.services.map((service, index) => (
                    <li key={`${index}-${service.name}`}>
                      <span>
                        {service.name}
                        {service.price ? ` — ₹${service.price}` : ''}
                      </span>
                      <button
                        type="button"
                        aria-label={`Remove service ${index + 1}`}
                        onClick={removeService(index)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ol>
              )}
              <div className="pb-addreq">
                <input
                  value={serviceDraft.name}
                  onChange={(event) => setServiceDraft({ ...serviceDraft, name: event.target.value })}
                  placeholder="Service — e.g. Blouse stitching"
                />
                <input
                  className="pb-price"
                  value={serviceDraft.price}
                  onChange={(event) => setServiceDraft({ ...serviceDraft, price: event.target.value })}
                  inputMode="numeric"
                  placeholder="₹ (optional)"
                />
                <button type="button" onClick={addService}>Add</button>
              </div>

              <label>
                <Lab en="Anything else that's true and matters" tri="आणखी खरी माहिती · और सच्ची जानकारी" />
                <textarea
                  rows={3}
                  value={answers.otherFacts}
                  onChange={set('otherFacts')}
                  placeholder="Optional — awards, languages spoken, home delivery…"
                />
              </label>
            </>
          )}
          {step === 2 && (
            <>
              <h2>What should this website achieve?</h2>
              <Tri>या वेबसाइटने काय साधायचं आहे? · इस वेबसाइट से क्या हासिल करना है?</Tri>
              <p className="pb-fine">Tick all that apply — then add your own if something's missing.</p>
              <div className="pb-chips">
                {PURPOSES.map((purpose) => (
                  <button
                    key={purpose}
                    type="button"
                    className={answers.purposes.includes(purpose) ? 'sel' : ''}
                    onClick={toggleIn('purposes', purpose)}
                  >
                    {purpose}
                  </button>
                ))}
              </div>
              <label>
                <Lab en="Anything else?" tri="आणखी काही? · और कुछ?" />
                <textarea
                  rows={2}
                  value={answers.purposeOther}
                  onChange={set('purposeOther')}
                  placeholder="Optional — in your own words"
                />
              </label>
            </>
          )}
          {step === 3 && (
            <>
              <h2>Who should visit it?</h2>
              <Tri>ही वेबसाइट कोणी पाहावी? · यह वेबसाइट किसे देखनी चाहिए?</Tri>
              <p className="pb-fine">Tick all that apply — then add your own if something's missing.</p>
              <div className="pb-chips">
                {AUDIENCES.map((audience) => (
                  <button
                    key={audience}
                    type="button"
                    className={answers.audiences.includes(audience) ? 'sel' : ''}
                    onClick={toggleIn('audiences', audience)}
                  >
                    {audience}
                  </button>
                ))}
              </div>
              <label>
                <Lab en="Anyone else?" tri="आणखी कोणी? · और कोई?" />
                <textarea
                  rows={2}
                  value={answers.audienceOther}
                  onChange={set('audienceOther')}
                  placeholder="Optional — e.g. NRI families planning events in Sangli"
                />
              </label>
            </>
          )}
          {step === 4 && (
            <>
              <h2>The one thing visitors should do</h2>
              <Tri>भेट देणाऱ्यांनी करावी अशी एक मुख्य गोष्ट · साइट देखने वाले से एक मुख्य काम</Tri>
              <p className="pb-fine">
                Pick <strong>one</strong> — the whole website points to it, as
                one loud button.
              </p>
              <div className="pb-chips">
                {CTAS.map((cta) => (
                  <button
                    key={cta}
                    type="button"
                    className={answers.cta === cta ? 'sel' : ''}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        cta,
                        secondaryCtas: answers.secondaryCtas.filter((c) => c !== cta),
                      })
                    }
                  >
                    {cta}
                  </button>
                ))}
              </div>
              <p className="pb-lab">
                Also offer, more quietly (optional)
                <em className="pb-tri-inline">आणखी पर्याय (ऐच्छिक) · अन्य विकल्प (वैकल्पिक)</em>
              </p>
              <div className="pb-chips">
                {CTAS.filter((cta) => cta !== answers.cta).map((cta) => (
                  <button
                    key={cta}
                    type="button"
                    className={answers.secondaryCtas.includes(cta) ? 'sel' : ''}
                    onClick={toggleIn('secondaryCtas', cta)}
                  >
                    {cta}
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 5 && (
            <>
              <h2>What should your website be able to do?</h2>
              <Tri>तुमच्या वेबसाइटला काय काय करता आलं पाहिजे? · आपकी वेबसाइट को क्या-क्या करना चाहिए?</Tri>
              <p className="pb-fine">Tick what you need — each opens a couple of quick questions.</p>
              <div className="pb-chips">
                {FEATURES.map((feature) => (
                  <button
                    key={feature.id}
                    type="button"
                    className={answers.features.includes(feature.id) ? 'sel' : ''}
                    onClick={toggleIn('features', feature.id)}
                  >
                    {feature.label}
                  </button>
                ))}
              </div>

              {answers.features.includes('gallery') && (
                <div className="pb-feature">
                  <p className="pb-lab">
                    Photo gallery — your categories
                    <em className="pb-tri-inline">फोटोंचे प्रकार · फोटो की श्रेणियाँ</em>
                  </p>
                  <AddList
                    items={answers.galleryCategories}
                    onChange={(galleryCategories) => setAnswers({ ...answers, galleryCategories })}
                    placeholder="e.g. Bridal, Festival, Baby shower"
                  />
                </div>
              )}

              {answers.features.includes('appointments') && (
                <div className="pb-feature">
                  <p className="pb-lab">
                    Appointments — when do you take them?
                    <em className="pb-tri-inline">अपॉइंटमेंट कधी घेता? · अपॉइंटमेंट कब लेते हैं?</em>
                  </p>
                  <div className="pb-chips">
                    {DAYS.map((day) => (
                      <button
                        key={day}
                        type="button"
                        className={answers.apptDays.includes(day) ? 'sel' : ''}
                        onClick={toggleIn('apptDays', day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="pb-chips">
                    {SLOT_LENGTHS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={answers.apptSlot === slot ? 'sel' : ''}
                        onClick={pick('apptSlot', slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <div className="pb-addreq">
                    <input
                      value={answers.apptFrom}
                      onChange={set('apptFrom')}
                      placeholder="From — e.g. 10:00 AM"
                    />
                    <input
                      value={answers.apptTo}
                      onChange={set('apptTo')}
                      placeholder="To — e.g. 7:00 PM"
                    />
                  </div>
                  <p className="pb-fine">
                    Visitors see open slots; each slot books with one WhatsApp
                    tap. You confirm in chat.
                  </p>
                </div>
              )}

              {answers.features.includes('events') && (
                <div className="pb-feature">
                  <p className="pb-lab">
                    Events &amp; offers you typically run
                    <em className="pb-tri-inline">तुमचे सण-उत्सव / ऑफर्स · आपके इवेंट / ऑफ़र</em>
                  </p>
                  <AddList
                    items={answers.eventExamples}
                    onChange={(eventExamples) => setAnswers({ ...answers, eventExamples })}
                    placeholder="e.g. Navratri mehendi offer, Wedding season booking"
                  />
                  <p className="pb-fine">Each becomes its own page — ready to use as an ad landing page.</p>
                </div>
              )}

              {answers.features.includes('testimonials') && (
                <div className="pb-feature">
                  <p className="pb-lab">
                    Real customer words — with their permission
                    <em className="pb-tri-inline">ग्राहकांचे खरे शब्द (परवानगीने) · ग्राहकों के सच्चे शब्द (अनुमति से)</em>
                  </p>
                  <AddList
                    items={answers.testimonialQuotes}
                    onChange={(testimonialQuotes) => setAnswers({ ...answers, testimonialQuotes })}
                    placeholder="e.g. “Beautiful bridal mehendi, very patient!” — Sneha"
                  />
                  <p className="pb-fine">Only real messages, only with permission — nothing invented, ever.</p>
                </div>
              )}

              {answers.features.includes('faq') && (
                <div className="pb-feature">
                  <p className="pb-lab">
                    Questions customers actually ask you
                    <em className="pb-tri-inline">ग्राहक नेहमी काय विचारतात? · ग्राहक अक्सर क्या पूछते हैं?</em>
                  </p>
                  <AddList
                    items={answers.faqQuestions}
                    onChange={(faqQuestions) => setAnswers({ ...answers, faqQuestions })}
                    placeholder="e.g. Do you come home for bridal mehendi?"
                  />
                </div>
              )}
            </>
          )}
          {step === 6 && (
            <>
              <h2>Which pages do you need?</h2>
              <Tri>कोणती पानं हवीत? · कौन से पेज चाहिए?</Tri>
              <div className="pb-chips">
                {PAGES.map((page) => (
                  <button key={page} type="button" className={answers.pages.includes(page) ? 'sel' : ''} onClick={togglePage(page)}>{page}</button>
                ))}
              </div>
              <p className="pb-fine">Fewer is better to start — you can add pages any time.</p>
            </>
          )}
          {step === 7 && (
            <>
              <h2>Pick a layout</h2>
              <Tri>मांडणी निवडा · लेआउट चुनें</Tri>
              <div className="pb-layouts">
                {LAYOUTS.map((layout) => (
                  <button key={layout.id} type="button" className={answers.layout === layout.id ? 'sel' : ''} onClick={pick('layout', layout.id)}>
                    <LayoutPreview id={layout.id} />
                    <span className="pb-layout-text">
                      <strong>{layout.id} — {layout.name}</strong>
                      <span>{layout.for}</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="pb-fine">Wireframes are in LAYOUTS.md — and mixing is allowed later.</p>
            </>
          )}
          {step === 8 && (
            <>
              <h2>Look &amp; feel</h2>
              <Tri>रूप आणि शैली · रूप और शैली</Tri>
              <p className="pb-lab">Brand direction <em className="pb-tri-inline">ब्रँडची दिशा · ब्रांड की दिशा</em></p>
              <div className="pb-chips">
                {DIRECTIONS.map((direction) => (
                  <button key={direction} type="button" className={answers.direction === direction ? 'sel' : ''} onClick={pick('direction', direction)}>{direction}</button>
                ))}
              </div>
              <p className="pb-lab">
                Colours — pick a pair, or type your own
                <em className="pb-tri-inline">रंगांची जोडी निवडा · रंगों की जोड़ी चुनें</em>
              </p>
              <div className="pb-palettes">
                {PALETTES.map((palette) => {
                  const selected =
                    answers.primaryColour.includes(palette.primary) &&
                    answers.accentColour.includes(palette.accent)
                  return (
                    <button
                      key={palette.name}
                      type="button"
                      className={selected ? 'sel' : ''}
                      onClick={() => {
                        const [first, second] = palette.name.split(' + ')
                        setAnswers({
                          ...answers,
                          primaryColour: `${first} (${palette.primary})`,
                          accentColour: `${second} (${palette.accent})`,
                        })
                      }}
                    >
                      <span className="pb-swatch" style={{ background: palette.primary }} />
                      <span className="pb-swatch" style={{ background: palette.accent }} />
                      <span className="pb-palette-name">{palette.name}</span>
                    </button>
                  )
                })}
              </div>
              <div className="pb-addreq">
                <input value={answers.primaryColour} onChange={set('primaryColour')} placeholder="Main colour — e.g. deep blue" />
                <input value={answers.accentColour} onChange={set('accentColour')} placeholder="Second colour — e.g. warm orange" />
              </div>

              <p className="pb-lab">
                Typography feel — each option shows itself
                <em className="pb-tri-inline">अक्षरांची शैली · अक्षरों की शैली</em>
              </p>
              <div className="pb-chips">
                {TYPE_FEELS.map((feel) => (
                  <button
                    key={feel.label}
                    type="button"
                    style={feel.css}
                    className={answers.typography === feel.label ? 'sel' : ''}
                    onClick={pick('typography', feel.label)}
                  >
                    {feel.label}
                  </button>
                ))}
              </div>

              <p className="pb-lab">
                Imagery style
                <em className="pb-tri-inline">फोटोंची शैली · फोटो की शैली</em>
              </p>
              <div className="pb-chips">
                {IMAGERY_STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    className={answers.imagery === style ? 'sel' : ''}
                    onClick={pick('imagery', style)}
                  >
                    {style}
                  </button>
                ))}
              </div>

              <p className="pb-lab">
                Websites you admire (up to 3, optional)
                <em className="pb-tri-inline">तुम्हाला आवडणाऱ्या वेबसाइट्स · आपको पसंद वेबसाइटें</em>
              </p>
              <AddList
                items={answers.referenceSites}
                onChange={(referenceSites) => setAnswers({ ...answers, referenceSites })}
                max={3}
                placeholder="Paste a link — add what you like after a dash, e.g. site.com — their gallery"
              />
              <p className="pb-fine">
                Claude studies these for ideas and adapts them to your business
                — improved, never copied.
              </p>

              <p className="pb-lab">
                A rough feel of your choices — not the design, just its direction
                <em className="pb-tri-inline">अंदाज — अंतिम डिझाइन नाही · अंदाज़ा — अंतिम डिज़ाइन नहीं</em>
              </p>
              <StylePreview answers={answers} />
            </>
          )}
          {step === 9 && (
            <>
              <h2>Your requirements, in your words</h2>
              <Tri>तुमच्या गरजा, तुमच्या शब्दांत · आपकी ज़रूरतें, आपके शब्दों में</Tri>
              <p>
                Anything your website must show or do — plain English (or
                Marathi/Hindi!), one at a time. This becomes Claude&rsquo;s
                to-do list, and yours.
              </p>
              {answers.requirements.length > 0 && (
                <ol className="pb-reqs">
                  {answers.requirements.map((requirement, index) => (
                    <li key={`${index}-${requirement}`}>
                      <span>{requirement}</span>
                      <button
                        type="button"
                        aria-label={`Remove requirement ${index + 1}`}
                        onClick={removeRequirement(index)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ol>
              )}
              <div className="pb-addreq">
                <input
                  value={requirementDraft}
                  onChange={(event) => setRequirementDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      addRequirement()
                    }
                  }}
                  placeholder="e.g. Show my price list, with a WhatsApp button next to each service"
                />
                <button type="button" onClick={addRequirement}>Add</button>
              </div>
              <p className="pb-fine">
                Don&rsquo;t worry about completeness — you can add more with
                Claude any time.
              </p>
            </>
          )}
          {step === 10 && (
            <>
              <h2>Your prompt is ready.</h2>
              <Tri>तुमचा प्रॉम्प्ट तयार आहे. · आपका प्रॉम्प्ट तैयार है.</Tri>
              <p>
                This is the <strong>foundation</strong> your answers built.
                Save it, then switch to Claude and say:{' '}
                <strong>
                  “Read my blueprint, then expand it into the requirement,
                  architecture and styleguide documents — and review them
                  with me.”
                </strong>{' '}
                Claude grows this seed into the full, detailed plan — with
                you approving every part.
              </p>
              {saved ? (
                <>
                  <p className="pb-saved">✅ Blueprint saved to BLUEPRINT.md — over to Claude.</p>
                  <div className="pb-handoff">
                    <p className="pb-lab">
                      Say this to Claude — your first instruction
                      <em className="pb-tri-inline">हे Claude ला सांगा · यह Claude को बोलें</em>
                    </p>
                    <p className="pb-handoff-phrase">{HANDOFF_PHRASE}</p>
                    <button
                      type="button"
                      className="starter-cta"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(HANDOFF_PHRASE)
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2500)
                        } catch {}
                      }}
                    >
                      {copied ? '✅ Copied — paste it to Claude' : 'Copy for Claude'}
                    </button>
                  </div>
                </>
              ) : (
                <button type="button" className="starter-cta" onClick={save}>Save my blueprint</button>
              )}
              {error && <p className="pb-error">{error}</p>}
            </>
          )}

          <nav className="pb-nav">
            {step > 0 && <button type="button" onClick={() => setStep(step - 1)}>← Back</button>}
            {step < STEPS.length - 1 && (
              <button type="button" className="next" onClick={() => setStep(step + 1)}>Next →</button>
            )}
          </nav>
        </section>

        <aside className="pb-prompt" aria-label="Your build prompt, assembling">
          <h3>Your build prompt — assembling</h3>
          <pre>{prompt}</pre>
        </aside>
      </div>
    </main>
  )
}
