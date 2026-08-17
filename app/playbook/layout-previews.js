/**
 * Tiny wireframe previews for the layout picker — a sketch says more than
 * a sentence for a non-technical room. Muted blocks = content, the teal
 * block = the primary call to action.
 */

const INK = '#d8d3c6' // content blocks
const SOFT = '#eae7dd' // section grounds
const CTA = '#0e6f64' // the loud button
const BAR = '#c8c2b2' // navbar / footer

function Frame({ children }) {
  return (
    <svg
      viewBox="0 0 80 104"
      width="72"
      height="94"
      aria-hidden="true"
      style={{ flexShrink: 0, background: '#fbfaf6', borderRadius: 6, border: '1px solid #e6e2d8' }}
    >
      {children}
    </svg>
  )
}

const PREVIEWS = {
  L1: (
    <Frame>
      <rect x="4" y="4" width="72" height="6" rx="1" fill={BAR} />
      <rect x="4" y="14" width="72" height="22" rx="2" fill={SOFT} />
      <rect x="24" y="20" width="32" height="4" rx="1" fill={INK} />
      <rect x="31" y="27" width="18" height="5" rx="2.5" fill={CTA} />
      <rect x="4" y="40" width="22" height="16" rx="2" fill={INK} />
      <rect x="29" y="40" width="22" height="16" rx="2" fill={INK} />
      <rect x="54" y="40" width="22" height="16" rx="2" fill={INK} />
      <rect x="4" y="60" width="72" height="10" rx="2" fill={SOFT} />
      <rect x="4" y="74" width="34" height="10" rx="2" fill={INK} />
      <rect x="42" y="74" width="34" height="10" rx="2" fill={INK} />
      <rect x="4" y="88" width="72" height="4" rx="1" fill={SOFT} />
      <rect x="4" y="96" width="72" height="6" rx="1" fill={BAR} />
    </Frame>
  ),
  L2: (
    <Frame>
      <rect x="4" y="4" width="72" height="6" rx="1" fill={BAR} />
      <rect x="4" y="14" width="34" height="26" rx="2" fill={SOFT} />
      <rect x="7" y="18" width="26" height="3" rx="1" fill={INK} />
      <rect x="7" y="24" width="20" height="3" rx="1" fill={INK} />
      <rect x="7" y="31" width="16" height="5" rx="2.5" fill={CTA} />
      <rect x="42" y="14" width="34" height="26" rx="2" fill={INK} />
      <rect x="4" y="44" width="72" height="6" rx="1" fill={SOFT} />
      <rect x="4" y="54" width="22" height="16" rx="2" fill={INK} />
      <rect x="29" y="54" width="22" height="16" rx="2" fill={INK} />
      <rect x="54" y="54" width="22" height="16" rx="2" fill={INK} />
      <rect x="4" y="74" width="72" height="14" rx="2" fill={SOFT} />
      <rect x="4" y="92" width="72" height="8" rx="1" fill={BAR} />
    </Frame>
  ),
  L3: (
    <Frame>
      <rect x="4" y="4" width="72" height="5" rx="1" fill={BAR} />
      <rect x="18" y="13" width="44" height="4" rx="1" fill={INK} />
      <rect x="4" y="22" width="34" height="24" rx="2" fill={INK} />
      <rect x="42" y="22" width="34" height="24" rx="2" fill={INK} />
      <rect x="4" y="50" width="34" height="24" rx="2" fill={INK} />
      <rect x="42" y="50" width="34" height="24" rx="2" fill={INK} />
      <rect x="4" y="78" width="72" height="10" rx="2" fill={SOFT} />
      <rect x="31" y="80" width="18" height="5" rx="2.5" fill={CTA} />
      <rect x="4" y="92" width="72" height="8" rx="1" fill={BAR} />
    </Frame>
  ),
  L4: (
    <Frame>
      <rect x="4" y="4" width="56" height="6" rx="1" fill={BAR} />
      <rect x="63" y="4" width="13" height="6" rx="3" fill={CTA} />
      <rect x="4" y="14" width="72" height="24" rx="2" fill={SOFT} />
      <rect x="18" y="20" width="44" height="5" rx="1" fill={INK} />
      <rect x="28" y="29" width="24" height="6" rx="3" fill={CTA} />
      <rect x="12" y="44" width="56" height="4" rx="1" fill={INK} />
      <rect x="12" y="52" width="56" height="4" rx="1" fill={INK} />
      <rect x="12" y="60" width="56" height="4" rx="1" fill={INK} />
      <rect x="4" y="70" width="72" height="12" rx="2" fill={SOFT} />
      <rect x="26" y="73" width="28" height="6" rx="3" fill={CTA} />
      <rect x="4" y="88" width="72" height="4" rx="1" fill={SOFT} />
      <rect x="4" y="96" width="72" height="6" rx="1" fill={BAR} />
    </Frame>
  ),
  L5: (
    <Frame>
      <rect x="4" y="4" width="56" height="6" rx="1" fill={BAR} />
      <rect x="63" y="4" width="13" height="6" rx="3" fill={CTA} />
      <rect x="4" y="14" width="72" height="18" rx="2" fill={SOFT} />
      <rect x="10" y="18" width="34" height="4" rx="1" fill={INK} />
      <rect x="10" y="25" width="24" height="3" rx="1" fill={INK} />
      <rect x="4" y="36" width="52" height="5" rx="1" fill={INK} />
      <rect x="60" y="36" width="16" height="5" rx="2.5" fill={CTA} />
      <rect x="4" y="45" width="52" height="5" rx="1" fill={INK} />
      <rect x="60" y="45" width="16" height="5" rx="2.5" fill={CTA} />
      <rect x="4" y="56" width="22" height="14" rx="2" fill={INK} />
      <rect x="29" y="56" width="22" height="14" rx="2" fill={INK} />
      <rect x="54" y="56" width="22" height="14" rx="2" fill={INK} />
      <rect x="4" y="74" width="72" height="14" rx="2" fill={SOFT} />
      <rect x="4" y="92" width="72" height="8" rx="1" fill={BAR} />
    </Frame>
  ),
  L6: (
    <Frame>
      <rect x="4" y="4" width="72" height="6" rx="1" fill={BAR} />
      <rect x="4" y="14" width="72" height="18" rx="2" fill={SOFT} />
      <rect x="16" y="19" width="48" height="4" rx="1" fill={INK} />
      <rect x="30" y="26" width="20" height="5" rx="2.5" fill={CTA} />
      <rect x="4" y="36" width="22" height="18" rx="2" fill={INK} />
      <rect x="29" y="36" width="22" height="18" rx="2" fill={INK} />
      <rect x="54" y="36" width="22" height="18" rx="2" fill={INK} />
      <rect x="4" y="58" width="26" height="16" rx="2" fill={INK} />
      <rect x="34" y="60" width="42" height="3" rx="1" fill={INK} />
      <rect x="34" y="66" width="36" height="3" rx="1" fill={INK} />
      <rect x="4" y="78" width="72" height="4" rx="1" fill={SOFT} />
      <rect x="4" y="85" width="72" height="4" rx="1" fill={SOFT} />
      <rect x="26" y="93" width="28" height="6" rx="3" fill={CTA} />
    </Frame>
  ),
}

export function LayoutPreview({ id }) {
  return PREVIEWS[id] ?? null
}
