'use client'

import { useEffect, useMemo, useState } from 'react'

const STEPS = [
  { key: 'language', title: 'Your language', mr: 'तुमची भाषा' },
  { key: 'startingPoint', title: 'Your starting point', mr: 'तुमची सुरुवात' },
  { key: 'idea', title: 'Your idea', mr: 'तुमची कल्पना' },
  { key: 'audience', title: 'Your audience', mr: 'तुमचे ग्राहक' },
  { key: 'purpose', title: 'What success looks like', mr: 'यश कसे दिसेल' },
  { key: 'action', title: 'Visitor action', mr: 'visitor ने काय करावे' },
  { key: 'facts', title: 'What you already have', mr: 'तुमच्याकडे काय तयार आहे' },
]

const OPTIONS = {
  language: ['English', 'Marathi + English', 'Hindi + English', 'Marathi + Hindi + English'],
  startingPoint: ['Just an idea', 'Existing business — no website yet', 'Some notes, content or website work', 'An existing website to improve'],
  audience: ['Local customers', 'Students or parents', 'Working professionals', 'Small businesses', 'Organisations or institutions', 'A specific community'],
  purpose: ['Get enquiries', 'Build trust', 'Show my work', 'Explain my services', 'Get registrations', 'Share useful information'],
  action: ['WhatsApp me', 'Call me', 'Send an enquiry', 'Register interest', 'View my work', 'Visit my location'],
  facts: ['Business/project name', 'Services or offerings', 'Photos or logo', 'Contact details', 'Prices or timings', 'Existing website or social link'],
}

const EMPTY = { language: '', startingPoint: '', idea: '', audience: [], audienceOther: '', purpose: [], purposeOther: '', action: '', facts: [], factsDetail: '' }

function Choice({ selected, children, onClick, multi = false }) {
  const active = multi ? selected.includes(children) : selected === children
  return <button type="button" className={`pb-choice ${active ? 'is-selected' : ''}`} onClick={onClick}><span>{active ? '✓' : '○'}</span>{children}</button>
}

export default function Playbook() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(EMPTY)
  const [copied, setCopied] = useState(false)

  useEffect(() => { try { const saved = localStorage.getItem('deesha-foundation'); if (saved) setAnswers({ ...EMPTY, ...JSON.parse(saved) }) } catch {} }, [])
  useEffect(() => { try { localStorage.setItem('deesha-foundation', JSON.stringify(answers)) } catch {} }, [answers])

  const prompt = useMemo(() => `DEESHA FOUNDATION BRIEF

I completed the visual Foundation Playbook. Please import these answers, briefly confirm your understanding, and continue with one simple question at a time. Do not repeat questions already answered. Keep ordinary responses short and use detailed Project State/QC only at approval checkpoints.

Preferred language: ${answers.language || 'Not selected'}
Starting point: ${answers.startingPoint || 'Not selected'}
Website or project idea: ${answers.idea.trim() || 'Not supplied'}
Primary audience: ${[...answers.audience, answers.audienceOther.trim()].filter(Boolean).join('; ') || 'Not selected'}
What the website should achieve: ${[...answers.purpose, answers.purposeOther.trim()].filter(Boolean).join('; ') || 'Not selected'}
Main visitor action: ${answers.action || 'Not selected'}
Facts or assets already available: ${answers.facts.join('; ') || 'None selected'}
Details, links or notes: ${answers.factsDetail.trim() || 'Not supplied'}

Please help me check this foundation first. Then recommend the most suitable website category, pages and sections. Handle layout and creative direction visually inside the GPT; do not ask me to choose technical component-library options.`, [answers])

  function toggle(field, value) { setAnswers((a) => ({ ...a, [field]: a[field].includes(value) ? a[field].filter((item) => item !== value) : [...a[field], value] })) }
  function ready() {
    const key = STEPS[step]?.key
    if (key === 'idea') return answers.idea.trim().length > 2
    if (key === 'facts') return true
    return Array.isArray(answers[key]) ? answers[key].length > 0 : Boolean(answers[key])
  }
  async function copyPrompt() { await navigator.clipboard.writeText(prompt); setCopied(true) }

  if (step === STEPS.length) return (
    <main className="playbook">
      <p className="pb-kicker">Foundation complete · पाया तयार</p>
      <h1>Your GPT starting prompt is ready</h1>
      <p className="pb-lead">Copy this once and paste it into a new conversation with the Deesha's Web Expert.</p>
      <div className="pb-flow"><span>Playbook ✓</span><b>→</b><span>Deesha's Web Expert</span><b>→</b><span>Developer</span></div>
      <textarea className="pb-prompt" value={prompt} readOnly aria-label="Generated GPT prompt" />
      <div className="pb-actions">
        <button className="pb-primary" type="button" onClick={copyPrompt}>{copied ? 'Copied ✓' : 'Copy prompt'}</button>
        <button className="pb-secondary" type="button" onClick={() => setStep(STEPS.length - 1)}>Edit answers</button>
      </div>
      <p className="pb-help">GPT मध्ये नवीन chat उघडा → हा prompt paste करा → Send दाबा.</p>
    </main>
  )

  const current = STEPS[step]
  return (
    <main className="playbook">
      <div className="pb-progress" aria-label={`Step ${step + 1} of ${STEPS.length}`}><span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} /></div>
      <p className="pb-kicker">Step {step + 1} of {STEPS.length}</p>
      <h1>{current.title}</h1>
      <p className="pb-lead">{current.mr}</p>

      {current.key === 'idea' ? <>
        <label className="pb-label" htmlFor="idea">In one or two sentences, what do you want to offer or share?</label>
        <textarea id="idea" autoFocus value={answers.idea} onChange={(e) => setAnswers({ ...answers, idea: e.target.value })} placeholder="Example: I run weekend art classes for children in Pune…" />
        <p className="pb-hint">तुम्ही बोलूनही लिहू शकता. Perfect English आवश्यक नाही.</p>
      </> : current.key === 'facts' ? <>
        <p className="pb-label">Select anything you already have. It is okay to select nothing.</p>
        <div className="pb-grid">{OPTIONS.facts.map((o) => <Choice key={o} multi selected={answers.facts} onClick={() => toggle('facts', o)}>{o}</Choice>)}</div>
        <label className="pb-label pb-space" htmlFor="factsDetail">Optional details or links</label>
        <textarea id="factsDetail" value={answers.factsDetail} onChange={(e) => setAnswers({ ...answers, factsDetail: e.target.value })} placeholder="Names, links, timings, services — only what you know is true" />
      </> : <>
        <div className="pb-grid">{OPTIONS[current.key].map((o) => <Choice key={o} multi={Array.isArray(answers[current.key])} selected={answers[current.key]} onClick={() => Array.isArray(answers[current.key]) ? toggle(current.key, o) : setAnswers({ ...answers, [current.key]: o })}>{o}</Choice>)}</div>
        {(current.key === 'audience' || current.key === 'purpose') && <input className="pb-other" value={answers[`${current.key}Other`]} onChange={(e) => setAnswers({ ...answers, [`${current.key}Other`]: e.target.value })} placeholder="Something else? Type here (optional)" />}
      </>}

      <div className="pb-actions">
        {step > 0 && <button className="pb-secondary" type="button" onClick={() => setStep(step - 1)}>← Back</button>}
        <button className="pb-primary" type="button" disabled={!ready()} onClick={() => setStep(step + 1)}>{step === STEPS.length - 1 ? 'Create my GPT prompt →' : 'Continue →'}</button>
      </div>
      <p className="pb-help">Your answers stay only in this browser until you copy them.</p>
    </main>
  )
}
