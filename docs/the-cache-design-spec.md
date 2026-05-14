# THE CACHE
## Design & Animation Specification
*UI/UX Reference Document — v1.0*

---

## DESIGN PHILOSOPHY

The Cache should feel like a **real institutional archive website that has aged 60 years and survived a civilizational collapse** — but still loads. Not broken. Not post-apocalyptic. Just... slightly ancient. The way a university library website from 2003 feels today — functional, serious, a little stiff, completely committed to its own seriousness.

Every design decision should ask: **would a real museum do this?** If yes, do it — then push it slightly further.

**Three words that define the aesthetic:**
`AGED` `INSTITUTIONAL` `PRECISE`

---

## COLOR PALETTE

```
--color-parchment:        #F5F0E8   /* primary background */
--color-parchment-dark:   #EDE6D6   /* secondary background, cards */
--color-parchment-aged:   #D9CFBA   /* borders, dividers, subtle surfaces */

--color-ink:              #1A1612   /* primary text */
--color-ink-faded:        #4A3F35   /* secondary text, captions */
--color-ink-ghost:        #8C7B6E   /* metadata, labels, footnotes */

--color-accent-red:       #8B2E2E   /* classification tags, alerts, highlights */
--color-accent-ochre:     #B5813A   /* secondary accent, hover states */
--color-accent-green:     #3A5E3A   /* "Well-documented" condition badge */

--color-corrupted:        #2A1A2E   /* dark background for corrupted sections */
--color-corrupted-text:   #C084FC   /* glitch/corrupted text color */

--color-overlay:          rgba(26, 22, 18, 0.6)  /* modal overlays */
```

**Never use pure white or pure black.** Everything is slightly aged.

---

## TYPOGRAPHY

### Type Scale

```
--font-display:   'Playfair Display', 'Libre Baskerville', Georgia, serif
--font-body:      'EB Garamond', 'Crimson Text', Georgia, serif
--font-mono:      'IBM Plex Mono', 'Courier New', monospace
--font-ui:        'Inter', system-ui, sans-serif  /* UI labels only */
```

### Usage Rules

| Element | Font | Weight | Size |
|---|---|---|---|
| Site name / Hero title | Display | 700–900 | 72–120px |
| Section headings (H1) | Display | 700 | 48–64px |
| Article headings (H2) | Display | 600 | 32–40px |
| Sub-headings (H3) | Display | 400 italic | 24–28px |
| Body text | Body | 400 | 18–20px |
| Captions / metadata | Body | 400 italic | 14–16px |
| Artifact IDs | Mono | 400 | 12–14px |
| Classification tags | UI | 600 uppercase | 11px |
| Footnotes | Body | 400 | 13px |

### Type Behaviors
- Body text line-height: 1.7–1.8 (academic paper spacing)
- Generous paragraph spacing — let the text breathe like a journal
- Artifact IDs always in monospace, always letter-spaced: `CAT-2024-0047`
- Pull quotes in large italic Display font, left-bordered in `--color-parchment-aged`
- `[DATA CORRUPTED]` and `[FRAGMENT MISSING]` always in mono, always in `--color-accent-red`

---

## LAYOUT

### Grid
12-column grid. Max content width: 1200px. Generous margins (min 48px sides on desktop).

### Spacing System
Base unit: 8px. Use multiples: 8, 16, 24, 32, 48, 64, 96, 128.

### Key Layout Patterns

**Hero (Homepage)**
Full viewport height. Large centered type. Subtle aged-paper texture as background. A thin horizontal rule below. No images — just type and texture.

**Catalogue Grid**
3-column card grid on desktop, 2 on tablet, 1 on mobile. Cards have visible borders in `--color-parchment-aged`. Artifact ID in mono top-left of each card. Clean, dense, like a real catalogue.

**Artifact Page**
Single column, narrow (720px max). Lots of white space. Metadata block at top (styled like a museum label). Body text in generous serif. Footnotes at bottom with hairline rule separator.

**Collection Landing**
Full-width header with collection name and curatorial note. Below: the artifact grid.

---

## TEXTURE & SURFACE

- **Background texture:** Subtle paper grain overlay on `--color-parchment`. Use a noise texture at 3–5% opacity. Should feel like aged paper, not wallpaper.
- **Card surfaces:** Slightly darker parchment with a 1px solid border. No box shadows — museums don't have drop shadows. Use borders.
- **Dividers:** Thin hairline rules (`1px solid --color-parchment-aged`). Occasionally double-rule for section breaks (like academic papers).
- **The "Corrupted" treatment:** Certain entries or sections marked as corrupted get a dark background (`--color-corrupted`), glitchy text, and a subtle scan-line overlay effect via CSS.

---

## ANIMATIONS & MOTION

The motion design philosophy: **everything moves like something old being carefully handled.**

No bouncy springs. No playful easing. Everything is deliberate, measured, slightly slow. Like a museum attendant placing an artifact in a display case.

---

### PAGE LOAD — "THE EXCAVATION"

When any page loads, content reveals top-to-bottom as if being uncovered from sediment.

```
Sequence:
1. Page background fades in first (100ms)
2. Header/nav slides down from top (300ms, ease-out)
3. Hero or page title: characters appear one by one
   — not a typewriter tick, a slow fade-in per character (20ms per char)
4. Body content blocks fade up sequentially
   — each block: translateY(24px) → translateY(0), opacity 0→1
   — stagger: 80ms between blocks
   — easing: cubic-bezier(0.22, 1, 0.36, 1)
5. Metadata / artifact ID lines: appear last, fade in as a unit
```

Total load animation duration: ~1.2s. Never longer.

---

### TEXT ANIMATIONS

**Hero Title — "The Stamp"**
The site name "THE CACHE" does not animate in softly. It arrives.
- Starts at scale(1.04), opacity 0
- Moves to scale(1), opacity 1
- Duration: 600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Feels like a rubber stamp coming down on paper

**Artifact ID — "The Type"**
Artifact IDs (monospace) type themselves character by character on page load.
- 40ms per character
- No cursor blink — just characters appearing
- Feels like a typewriter, not a terminal

**Section Headings — "The Reveal"**
Headings on scroll use a clip-path reveal:
- Heading text sits behind a rectangle mask
- On scroll-enter: mask slides left to right, revealing text
- Duration: 700ms, ease-out
- Like a redaction label being peeled back

**Body Text — "The Settle"**
Paragraphs fade up on scroll-enter:
- translateY(16px) → translateY(0)
- opacity 0 → 1
- Duration: 500ms
- Stagger 60ms per paragraph if multiple visible at once

**[DATA CORRUPTED] Text**
Any `[DATA CORRUPTED]` or `[FRAGMENT MISSING]` text has a persistent subtle animation:
- Characters randomly flicker between the correct character and a random symbol (░ █ ▓ ?)
- Interval: every 3–6 seconds, 1–2 characters flicker for 80ms
- Should feel like signal degradation, not a glitch effect
- Never distracting — subtle, ambient

---

### HOVER STATES

**Catalogue Cards**
- Border color transitions from `--color-parchment-aged` → `--color-ink-faded`
- Background shifts from `--color-parchment-dark` → `--color-parchment` (slightly lighter, "illuminated")
- Artifact ID brightens slightly
- NO translation/lift — cards don't move. Museums don't have bouncy cards.
- Transition: 200ms ease

**Navigation Links**
- No underline animation gimmicks
- Color shifts from `--color-ink-ghost` → `--color-ink`
- A thin bottom border appears (1px, `--color-accent-ochre`)
- Transition: 150ms ease

**Classification Tags**
- Background fills in from left (clip-path or background-size animation)
- Text color inverts (dark on light → light on dark)
- Transition: 200ms ease

**"Read Entry" / CTA Buttons**
- Styled like museum labels — rectangular, bordered, no border-radius
- Hover: background fills with `--color-ink`, text becomes `--color-parchment`
- Transition: 250ms ease
- No shadow, no scale

---

### SCROLL BEHAVIORS

**Sticky Header**
- On scroll down past hero: header compresses (padding reduces), site name shrinks
- Transition is slow and smooth: 400ms
- A thin bottom border appears on the header — like it's been pressed flat

**Scroll Progress**
- A thin line across the very top of the viewport tracks scroll progress
- Color: `--color-accent-ochre`
- 1px tall, no label

**Parallax (Minimal)**
- Hero background texture moves at 0.3x scroll speed — subtle depth
- No other parallax — restraint is the rule

---

### PAGE TRANSITIONS (if SPA/router)

Between pages:
1. Current page fades to `--color-parchment` (300ms)
2. New page fades in from `--color-parchment` (300ms)
3. Total: 600ms

Do NOT slide pages. Sliding feels like a phone app. This is an archive.

---

### SPECIAL INTERACTION — "THE CORRUPTED ENTRY"

Some artifact entries are marked as CONDITION: CORRUPTED. These pages have a distinct experience:

- Background: `--color-corrupted` (near-black purple)
- Text: `--color-corrupted-text` (muted purple)
- CSS scan-line overlay: repeating horizontal lines at 2px gap, 1px solid, 2% opacity
- On page load: text appears with a brief horizontal glitch shift — content slides 4px right then snaps back (200ms, one time only)
- Occasional random character substitutions in body text (see `[DATA CORRUPTED]` above)
- The condition badge pulses gently: opacity 1 → 0.6 → 1, 3s loop

---

### SOUND (OPTIONAL, OFF BY DEFAULT)

If implementing audio:
- A faint ambient hum on corrupted pages (low-frequency drone, looped)
- A subtle paper-rustle sound on card hover (short, 200ms)
- A typewriter click sound synced to the Artifact ID typing animation
- All sounds OFF by default. Toggle in footer: "Enable Archive Ambience"

---

## CONDITION BADGES

Every artifact has a condition. Badges are styled like physical museum labels.

| Condition | Color | Style |
|---|---|---|
| Well-documented | `--color-accent-green` on parchment | Solid border, filled |
| Fragmentary | `--color-accent-ochre` on parchment | Dashed border |
| Corrupted | `--color-corrupted-text` on dark | Glitch flicker (see above) |
| Under Review | `--color-ink-ghost` on parchment | Dotted border, italic text |

---

## MICRO-DETAILS THAT SELL THE BIT

- Footnote numbers are superscript, clickable, scroll to footnote at bottom
- Hovering a fake citation shows a tooltip with the full fake reference
- Artifact IDs are copyable — clicking copies to clipboard, shows "Reference copied." in small mono text for 2 seconds
- Every page has a "Last catalogued: [fake future date]" in the footer
- The browser tab favicon: a small wax seal or fragment icon
- 404 page: "This artefact has been lost to the Collapse. Excavation ongoing."
- Print styles: pages print like actual museum catalogue sheets, with the archive watermark

---

## WHAT NOT TO DO

- No border-radius on anything institutional (buttons, cards, badges) — use 0 or 2px max
- No drop shadows — use borders
- No gradients except very subtle texture overlays
- No sans-serif for body text
- No bright colors anywhere
- No animations faster than 150ms or longer than 800ms
- No looping animations except the corrupted page effects
- No parallax on anything except the hero texture
- No emoji in the UI (they exist only as documented artifacts within entries)
