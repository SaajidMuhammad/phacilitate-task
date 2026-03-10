# Ascone Landing Page

A modern, responsive one-page landing page for Ascone, a fintech application. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

### Production Build

```bash
pnpm build
pnpm start
```

## Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Framework   | Next.js 16 (App Router)  |
| UI          | React 19                 |
| Styling     | Tailwind CSS v4          |
| Animations  | Framer Motion 12         |
| Language    | TypeScript 5             |

## Project Structure

```
app/
  layout.tsx              Root layout with metadata
  page.tsx                Page composition
  globals.css             Brand design tokens and base styles
components/
  layout/
    Header.tsx            Sticky nav with top banner, mobile drawer
    Footer.tsx            Multi-column footer with bottom links
  sections/
    Hero.tsx              Hero with staggered fade-in, phone mockup, stat cards
    LogoStrip.tsx         Partner logo row
    AboutUs.tsx           Centered about heading
    FeatureCards.tsx       Two-column feature cards (savings, global transfers)
    Values.tsx            Three-column value proposition cards
    Stats.tsx             Dark green stats banner ($14B, 23k+)
    FAQ.tsx               Accordion FAQ with animated expand/collapse
    CTA.tsx               Full-width call-to-action with star graphics
  ui/
    Button.tsx            Polymorphic button/anchor with variants
    AnimatedSection.tsx   Scroll-triggered stagger animation wrapper
lib/
  constants.ts            Static content, navigation, and FAQ data
```

## Brand Guide

- **Typography:** Helvetica (Bold, SemiBold, Medium, Regular)
- **Colors:**
  - Primary dark green: `#1C3F3A`
  - Light sage: `#E0EAE8`
  - Cream: `#EBE8D8`
  - Navy: `#0A0C29`

## Animations

- **Hero:** Staggered fade-in + slide-up on load (headline, subtext, CTA, stat cards)
- **Scroll sections:** Content blocks animate into view via Intersection Observer with stagger
- **Buttons:** Scale + transition on hover (200ms ease-out)
- **Cards:** Subtle lift + shadow on hover (300ms ease-out)
- **FAQ accordion:** Smooth height + opacity animation on expand/collapse
- **Mobile nav:** Animated drawer open/close
- **Accessibility:** All animations respect `prefers-reduced-motion` media query

## Assumptions

- Helvetica is used as the primary typeface (with Helvetica Neue and Arial as fallbacks)
- Brand logo text "Ascone" rendered in Georgia serif per the design
- Placeholder abstract SVG visuals used for the hero phone mockup and CTA graphics
- All external links point to `#` as placeholders
- FAQ answers are representative placeholder copy
