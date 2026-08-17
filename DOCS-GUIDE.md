# DOCS-GUIDE — how Claude expands the blueprint (Stage 1.5)

> Claude: this is the contract for the three documents in `docs/`.
> **Depth is the product.** Write these at the standard of a professional
> agency's project specification: very detailed, comprehensive, deeply
> structured — typically 15–22 numbered sections per document. I will
> review the full documents (my trainer and workshop volunteers help me),
> so never thin them out "to keep it simple". After each document, walk
> me through it with a short summary as the map — the summary aids the
> review, it never replaces the document.

## Depth standards (all three documents)

- Numbered sections with clear headings; sub-structure wherever a section
  has parts.
- A status tag on every decision-carrying statement (legend below).
- Tables wherever content is tabular: business facts, type scales,
  colour tokens, page/section maps.
- Example JSON shapes for every content file, with realistic field names.
- Recommend-lists AND avoid-lists — saying what not to do is half the
  value.
- Exhaustive over illustrative: cover responsive, accessibility, SEO,
  performance, imagery, motion, copy tone — not just the headline topics.
- Acceptance criteria concrete enough that a volunteer could verify each
  line.

## The status legend (use in all three documents)

- **[CONFIRMED]** — I explicitly said or approved it (traceable to
  BLUEPRINT.md or a recorded answer)
- **[PROPOSED]** — your recommendation, awaiting my yes
- **[CLARIFY]** — a missing decision you will ask me about, one at a time
- **[FUTURE]** — real, but not in this static phase

Never let a [PROPOSED] silently become [CONFIRMED]. Never build on a
[CLARIFY].

## docs/REQUIREMENTS.md must cover

1. Product goal and business goals (from my purposes)
2. Audience — including what must NOT be claimed (e.g. "customers across
   India" ≠ nationwide service, until I confirm)
3. Business facts table with status per fact (name, location, timings,
   experience, WhatsApp, prices, socials — CLARIFY the missing ones)
4. Pages (approved list; extras are FUTURE)
5. CTA hierarchy — primary loud, secondaries quiet, per-context prefilled
   WhatsApp messages
6. One section per capability/feature (gallery, appointments, events…)
   with: why, what the visitor experiences, what I edit myself, static
   limitations stated honestly, and **"Done when"** I can verify
7. Content management (which file owns which fact — one source of truth)
8. Visual, responsive, accessibility, SEO and performance requirements
9. Explicitly out of scope for phase 1
10. **Acceptance criteria** — the checklist that means "phase 1 done"
11. **Next owner decision** — exactly one question, the highest-impact
    unresolved one, stated at the end

## docs/ARCHITECTURE.md must cover

1. Architecture principle in one line, and the primary visitor flow
2. Site map + per-page section order (Speak-Website vocabulary; the
   chosen LAYOUTS.md pattern adapted, not copied)
3. Section intent — one line per section: what it is for
4. Content/data architecture: every content file, its shape, and **real
   options where my workflow should decide** (e.g. recurring weekly
   slots vs date-based — recommend after asking how I actually work)
5. WhatsApp flow: central number, contextual message generation, what a
   slot click does and does not do
6. Component concepts (named, reusable, no premature abstraction)
7. Folder structure
8. Image strategy (originals kept safe, responsive sizes, lazy loading,
   no cropping that destroys the work)
9. SEO structure per route; structured data only from confirmed facts
10. Open decision points that must not be locked yet

## docs/STYLEGUIDE.md must cover

1. Brand character: how it should feel AND an avoid-list
2. Full palette: my colours + derived hovers/darks + warm neutrals +
   usage rules, with contrast checked and failures called out
3. Typography: pairing proposal with weights (webfonts are [PROPOSED] —
   the kit's default is system fonts; flag the trade-off), full type
   scale table (desktop/mobile/weight), line-height rules
4. Layout & spacing scale, content widths
5. Buttons (primary/secondary specs, sizes, touch targets), radius
   language, shadows/borders
6. Header, hero, gallery/portfolio, cards, trust block, appointment UI —
   a short spec each, with wording rules where honesty matters
   ("Enquire for this slot", never "Reserved")
7. Imagery treatment rules (real work, natural colour, no generative
   fakes) and iconography restraint
8. Motion: subtle list + avoid list, reduced-motion respected
9. Mobile style rules
10. Design tokens block (CSS custom properties)
11. **Items to review with owner** — every [PROPOSED] gathered in one list

## The design-craft menu (STYLEGUIDE § "Design craft" is mandatory)

A correct site is not yet an appealing one. The styleguide must include a
**Design craft** section choosing **4–6 named devices** from this menu,
each justified by the brand direction and specced (the CSS approach in a
sentence). Basic hover states are expected wherever applicable — links,
buttons, cards, gallery tiles always have a considered hover/touch state.

**Accent devices:** eyebrow label (small caps accent label above every
section heading) · headline swipe (slightly rotated accent bar behind the
hero's last word) · left-accent cards (3–4px accent left border) ·
ticket-top card (accent top border on the one most important card) ·
accent-dot bullets · section rhythm (alternating grounds + **one dark
band per page** for the trust/CTA moment) · hero glow (one soft radial
accent glow high-corner + a whisper of a second colour low-opposite —
never a flat hero) · ghost numeral (the one true number, huge and
outlined, behind content) · hairline rules · numbered markers (only for
real sequences).

**Hover/press:** card lift (translateY(-4px) + deeper shadow, 150–200ms)
· zoom-within (image scales 1.05 inside an overflow-hidden frame) ·
underline slide on nav links · arrow nudge on text links · hairline
reveal on gallery tiles · CTA breath (one slow glow pulse ≥2.5s on the
primary button — **max one pulsing element per viewport**).

**Scroll/entrance:** fade-up reveal (sections rise 12–16px fading in,
children staggered ~70ms, plays once) · count-up for the true number ·
journey line (scroll-drawn accent line — only for real step sequences) ·
late-arriving sticky mobile CTA (appears after the hero scrolls away).

**Context mapping:** premium/bridal → hero glow, hairlines, ghost
numeral, dark band, zoom-within, near-still motion · friendly/local →
rounded pills, accent dots, softer shadows, livelier lifts, CTA breath ·
bold → headline swipe, ticket-top cards, high-contrast dark band, heavy
eyebrows · minimal → spacing is the effect; one accent device total ·
creative → one signature move done excellently, everything else quiet.

**Reference-website study:** when the blueprint lists websites the owner
admires, visit each one (fetch it) during Stage 1.5 before writing the
styleguide. For every reference, record in the docs: what works there
(layout moves, section ideas, effects, tone) and **how it adapts to this
business** — each borrowed idea a [PROPOSED] item tagged "inspired by
ref N", re-expressed for this owner's content and direction. Improve,
never imitate: no copied text, no copied images, no lifted colour
schemes, and never reproduce a reference so closely that the two sites
could be confused. If a reference can't be reached, say so and move on.
In Stage 1.75, it is natural for one option to be the "reference-led"
expression.

**The signature rule:** at least one chosen device must be justified by
**the business itself, not the direction** — the craft, subject or
material of this specific business expressed as a design decision (a
mehendi artist's ornamental hairline motif; a photographer's oversized
imagery; an accountant's precise tabular rhythm). Two businesses with
the same direction must still not read as reskins of each other. Name
the signature and its reasoning in the Design craft section.

**Guardrails (non-negotiable):** one hero move + one ambient effect max
per page; animate transforms/opacity only; 150–250ms hovers; every hover
has a touch equivalent; `prefers-reduced-motion` disables all motion;
reveals never hide content behind blankness.

## Stage 1.75 — Design options before the build

After the styleguide yes and **before Stage 2**, show me choices:

0. **Open `previews/reference-example.html` first.** That page (a
   fictional yoga studio) is the kit's quality floor: glow hero, swipe
   headline, left-accent cards, ghost numeral, rich photo stand-ins,
   dark band, considered hovers. **Every option you produce must look at
   least that finished.** If an option of yours would look plainer than
   the reference next to it, rebuild it before showing me — never show
   me a wireframe-grade page and call it an option.
1. Build **2–3 self-contained preview files** in `previews/`
   (`option-1.html`, `option-2.html`… — plain HTML+CSS, no dependencies,
   openable by double-click or a browser tab). Each shows a full
   homepage (navbar → hero → 2–3 content sections → dark band or final
   CTA) with **my real content**, expressing a *different device palette*
   within my confirmed direction and colours — e.g. for premium: one
   glow-led and still, one dark-band-led and dramatic, one hairline-led
   and editorial. Steal techniques from the reference file freely —
   retheme them, never reuse its colours or copy. Quality bar per option:
   real type scale and spacing from the styleguide; hero never flat
   (glow or band); photo stand-ins as rich gradients with captions,
   **never grey boxes**; at least 4 menu devices visibly present; every
   interactive element has its hover state. Tell me how to open them.
2. Then help me choose **quickly and interactively**: one question at a
   time, each with your recommendation and why ("I recommend Option 2 —
   the dark band gives your 12 years real weight. Go with it?"). Follow-up
   choices only where they matter (e.g. "keep Option 1's gallery hover on
   top of Option 2?" ). Mixing is allowed.
3. Record the chosen option and any mixes in the styleguide's Design
   craft section as [CONFIRMED], then proceed to Stage 2. The previews
   stay in `previews/` for reference — they are never linked from the
   real site.

## The rhythm

Write REQUIREMENTS in full → walk me through it → my yes → ARCHITECTURE
in full → walk-through → my yes → STYLEGUIDE in full → walk-through →
my yes → then Stage 2. At each walk-through, ask the single
highest-impact [CLARIFY] question. Keep every document current as
answers arrive — they are living documents, and they say so at the top.
And when a confirmed answer belongs in a content file (timings →
site-data's `hours`, the WhatsApp number, prices…), **update that file in
the same turn** as the document — the data and the docs never disagree.
