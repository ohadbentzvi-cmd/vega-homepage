---
name: VEGA Holdings
description: Staffing, cleaning, and facility management brand site — Hebrew RTL, restrained teal palette, Open Sans Condensed display.
colors:
  white: "#FFFFFF"
  surface: "#F7F8F9"
  teal-whisper: "#E5EBEB"
  teal-mid: "#AAC0C0"
  dark: "#404141"
  teal-dark: "#627778"
typography:
  display:
    fontFamily: "Open Sans Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(44px, 6.5vw, 72px)"
    fontWeight: 700
    lineHeight: 1.05
  headline:
    fontFamily: "Open Sans Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(28px, 4vw, 42px)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  card: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "#627778"
    textColor: "#FFFFFF"
    rounded: "4px"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "#404141"
    textColor: "#FFFFFF"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#627778"
    rounded: "4px"
    padding: "10px 28px"
  stats-bar:
    backgroundColor: "#AAC0C0"
    textColor: "#FFFFFF"
  topbar:
    backgroundColor: "#404141"
    textColor: "rgba(255,255,255,0.8)"
---

# Design System: VEGA Holdings

## 1. Overview

**Creative North Star: "The Reliable Partner"**

VEGA Holdings is not a technology startup or a luxury brand — it is a 25-year-old Israeli company that connects people to jobs and manages buildings. The design communicates earned trust through restraint, legibility, and structural clarity. Nothing decorative competes with the message. The palette is muted teal-on-charcoal: professional without coldness, warm without sweetness.

The site is Hebrew-first (RTL). Every layout decision must feel native in right-to-left reading order. The video hero is the emotional anchor; every subsequent section builds credibility systematically. The job listings section is a direct conversion goal alongside the contact form.

This system explicitly rejects: generic SaaS landing page tropes, gradient text, glassmorphism, hero-metric templates with glowing numbers, overcrowded grid layouts, and the "translated English" register that plagues many Hebrew business sites.

**Key Characteristics:**
- Hebrew RTL throughout; spacing and alignment respect reading direction
- Restrained teal palette used with intention — accent on ≤20% of surface
- Open Sans Condensed for all display and headline text; weight contrast carries hierarchy
- Photography and video as primary emotional layer — no decorative illustrations
- Flat by default; shadow only on hover to signal interactivity

## 2. Colors

A muted coastal teal against charcoal — authoritative but not cold.

### Primary
- **Operational Teal** (#627778): The primary action color. Used on CTA buttons, active nav underlines, section eyebrows, link hovers, the stats bar accent. Appears on roughly 15% of any given screen.

### Secondary
- **Mid Teal** (#AAC0C0): Stats bar background, icon tinting in feature cards, logo sparkle. The "warm signal" color — communicates scale and coverage without aggression.

### Neutral
- **Charcoal Near-Black** (#404141): Primary text, top info bar background, dark CTA hover state, footer background.
- **Pale Surface** (#F7F8F9): Section alternating background — breaks visual monotony without introducing color.
- **Teal Whisper** (#E5EBEB): Borders, dividers, card borders, subtle section separators.
- **Pure White** (#FFFFFF): Nav background, card surfaces, form backgrounds.

### Named Rules
**The Accent Ceiling Rule.** Operational Teal (#627778) appears on no more than 20% of any screen. Its restraint is what makes buttons and active states feel decisive, not decorative.

## 3. Typography

**Display/Headline Font:** Open Sans Condensed (Bold 700, fallback: Arial Narrow)
**Body Font:** Open Sans (Regular 400 / Medium 500 / SemiBold 600, fallback: Arial)

**Character:** Condensed headlines give the site a print-quality authority — like a well-designed newspaper rather than a tech product. The pairing within a single super-family keeps everything cohesive while allowing strong scale contrast.

### Hierarchy
- **Display** (700, clamp(44px–72px), 1.05): Hero title only. "אנשים טובים. / תוצאות מצויינות." Two-line construction, period at end of each line.
- **Headline** (700, clamp(28px–42px), 1.15): Section titles, service names, job board header.
- **Title** (700, 17–20px, 1.3): Card titles, job card headings, footer column titles.
- **Body** (400, 15px, 1.8): All descriptive copy. Max line length 72ch in Hebrew prose blocks.
- **Label** (700, 12px, 0.1em letter-spacing, uppercase): Section eyebrows only ("מי אנחנו", "הזדמנויות תעסוקה"). Used sparingly — maximum one per section.

### Named Rules
**The Condensed-Only Display Rule.** Condensed weight is reserved for headlines and display. Body text, labels, and nav links always use regular Open Sans.

## 4. Elevation

Flat by default. Surfaces are coplanar at rest; depth appears only as a response to interaction. No ambient shadows on static cards at rest (except the feature-card PNGs which carry their own shadow as part of the image asset).

### Shadow Vocabulary
- **Hover lift** (`0 10px 32px rgba(98,119,120,0.15)`): Applied on `.hover` state of job cards, about feature cards, testimonial cards. Signals clickability.
- **Hero overlay**: Not a shadow — a directional gradient overlay on the video hero. Dark-to-transparent from the content side.

### Named Rules
**The Flat-By-Default Rule.** All surfaces render flat at rest. Shadows appear only on hover as a state signal. An elevated-looking static card without a hover target is a design error.

## 5. Components

### Buttons
- **Shape:** Gently squared (4px radius)
- **Primary:** #627778 background, white text, `padding: 12px 32px`, 15px/600 weight
- **Hover:** transitions to #404141 over 200ms ease
- **Outline/Ghost:** transparent + 1.5px #627778 border; hover fills to #627778 + white text
- **Hero outline variant:** white text + white 55% border + blur backdrop; used only on the video hero where dark CTA competes with the image

### Feature Cards
Cards are the designed PNG assets from the icons folder — they carry their own icon, bold title, and descriptive body text. The site does not recreate these in HTML; it renders them as images with white background, 10px radius, and hover-lift shadow. This is intentional: the visual consistency of the card set came from the designer's source files.

### Client Logo Bar
- Grayscale (filter: grayscale 100%, opacity 0.65) at rest; full color + full opacity on hover
- Continuous scroll animation, 28s loop, pauses on hover
- Fade edge masks on both sides

### Navigation
- White background, 72px height, full border-bottom 1px teal-whisper
- Active link: teal underline 2px at bottom of nav bar height
- Hover: same underline animates in via scaleX transform
- Top info bar: charcoal background, right-aligned phone + address, 12.5px
- CTA "מרכז מידע": teal button with ⓘ icon, 42px height, 4px radius

### Job Cards
- White background, 1.5px teal-whisper border, 10px radius
- Hover: translateY(-4px), hover-lift shadow, border shifts to mid-teal
- Badge: "חדש" = teal-whisper/teal-dark; "דחוף" = pink-tint/warm-red
- Footer row: salary in teal-dark, apply CTA in teal-dark

### Stats Bar
- #AAC0C0 background, white text, 28px padding
- 4 stats in a flex row, 1px white/35% dividers between them
- Display numbers in Open Sans Condensed Bold

## 6. Do's and Don'ts

### Do:
- **Do** use Open Sans Condensed Bold for every headline and display text. Never use a serif or decorative font.
- **Do** render the hero with a video background — static image is an acceptable fallback but not the preferred state.
- **Do** place the stats bar immediately below the hero, on #AAC0C0. The stats are part of the hero's emotional punchline.
- **Do** keep the nav background white and not transparent. The header is structurally separate from the hero.
- **Do** use grayscale + opacity for client logos at rest; hover restores color. This keeps the section from feeling cluttered.
- **Do** respect RTL: padding-right before padding-left, text-align right as default, flex-direction row is fine but verify at breakpoints.

### Don't:
- **Don't** use gradient text (background-clip: text). All text is solid color.
- **Don't** use glassmorphism. No backdrop-filter on static surfaces.
- **Don't** use a hero-metric template (large number, glow, SaaS dashboard). The stats bar is intentionally plain.
- **Don't** add icons above section headings. The feature card PNGs carry the icon vocabulary; don't mix in inline SVG icon-grids.
- **Don't** use dark mode. The site is light by default; a nighttime construction-site viewer is not the target user.
- **Don't** animate layout properties (height, width, padding). Only transform and opacity for motion.
- **Don't** break the Condensed-Only Display Rule by using Open Sans Condensed for body copy.
- **Don't** add a side-stripe border accent (border-left > 1px colored) to any card or list item.
