# Political Fact-Checker Dashboard — Design Ideas

## Response 1 — Investigative Broadsheet
<probability>0.08</probability>
<text>
**Design Movement:** Editorial Investigative Journalism / Broadsheet Newspaper
**Core Principles:**
- High-contrast ink-on-paper aesthetic with structured editorial columns
- Data presented as evidence, not decoration — every number earns its space
- Typographic hierarchy does all the heavy lifting; color is used sparingly for verdicts only
- Serious, authoritative tone that mirrors a newspaper's fact-checking desk

**Color Philosophy:** Off-white newsprint (#F7F4EF) background with near-black (#1A1A1A) text. Verdict colors are the only chromatic elements: deep crimson for False, amber for Mixed, forest green for True. This restraint makes the verdict colors pop with urgency.

**Layout Paradigm:** Asymmetric multi-column editorial grid. A wide left column holds the "front page" metrics banner; a narrower right column runs a scrollable "ticker" of recent claims. Below, a full-width data section uses a 3-column newspaper layout.

**Signature Elements:**
- Thin horizontal rules separating sections (like newspaper column dividers)
- Serif display font for headlines; monospace for data/dates
- Verdict "stamps" — bold, rotated labels like a rubber stamp over claim cards

**Interaction Philosophy:** Minimal animation; content reveals on scroll like turning a newspaper page. Hover states use subtle ink-darkening rather than color shifts.

**Animation:** Staggered fade-in on load (0.1s delay between items). No bouncing or sliding — content appears with gravitas.

**Typography System:** Playfair Display (headlines) + IBM Plex Mono (data) + Source Serif 4 (body)
</text>

## Response 2 — Intelligence Briefing Dark Mode
<probability>0.07</probability>
<text>
**Design Movement:** Classified Intelligence / OSINT Dashboard
**Core Principles:**
- Dark, high-contrast interface evoking a government intelligence terminal
- Monochromatic base with neon accent colors for critical data points
- Grid-based data density — every pixel carries information
- Classified document aesthetic with redaction bars and stamp overlays

**Color Philosophy:** Deep charcoal (#0D1117) background, cool slate (#1C2333) cards. Accent palette: electric cyan (#00D4FF) for metrics, amber (#FFB347) for warnings, red (#FF4444) for False verdicts. Green (#00FF88) for True. Feels like a live intelligence feed.

**Layout Paradigm:** Full-width dark dashboard with a persistent left sidebar showing category filters. Main content area uses a masonry-style card grid. Top bar shows live "LAST UPDATED" timestamp and total claim count.

**Signature Elements:**
- Monospace font throughout for the "terminal" feel
- Subtle scan-line texture overlay on the background
- Pulsing dot indicators on claims requiring follow-up

**Interaction Philosophy:** Smooth filter transitions; cards animate in/out when filtered. Hover reveals a "declassify" effect — blurred text sharpens on hover.

**Animation:** Cards slide in from the bottom on load. Filter changes cause cards to fade out/in with a 200ms crossfade.

**Typography System:** JetBrains Mono (all text) with size variation for hierarchy. No serif fonts.
</text>

## Response 3 — Civic Transparency Portal (CHOSEN)
<probability>0.09</probability>
<text>
**Design Movement:** Civic Data Journalism / Government Transparency Report
**Core Principles:**
- Clean, trustworthy aesthetic that signals civic responsibility without sterility
- Bold typographic statements for key metrics; data visualizations as first-class citizens
- Warm neutral base with strong categorical color coding for verdicts
- Accessible, public-facing design that works for all audiences

**Color Philosophy:** Warm white (#FAFAF8) background with slate (#1E2A3A) text. Verdict palette: True (#16A34A green), Mostly True (#65A30D lime), Mixed (#CA8A04 amber), Mostly False (#EA580C orange), False (#DC2626 red). A deep navy (#1E3A5F) serves as the primary brand color for headers and CTAs.

**Layout Paradigm:** Asymmetric hero with a large left-anchored metric display and right-side donut chart. Below, a horizontal scrolling "stats bar" with key numbers. Then a two-column layout: left for charts/visualizations, right for the claims feed. Full-width report table at the bottom.

**Signature Elements:**
- Verdict "badges" with color-coded pill shapes
- Large typographic numbers for key stats (truth rate, total claims)
- Thin left-border accent on claim cards indicating verdict color

**Interaction Philosophy:** Smooth hover lifts on cards, filter pills animate selection, chart tooltips appear on hover. Clicking a claim expands it inline.

**Animation:** Staggered entrance animations (framer-motion) for metric cards. Number counters animate from 0 to final value on load.

**Typography System:** Sora (display/headlines, bold weight) + Inter (body/data) — clean, modern civic feel
</text>

---

## Selected Design: Civic Transparency Portal (Response 3)

This design best serves the public-facing mission of the dashboard. The warm civic aesthetic builds trust, the strong verdict color system makes data immediately scannable, and the asymmetric layout creates visual interest without sacrificing clarity. The animated metric counters create an engaging first impression while the structured data table provides the depth researchers need.
