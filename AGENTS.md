<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Session: UI/UX Pro Max Audit & Fix (July 4 2026)

Ran full UI/UX audit against all 9 priority categories. Fixed all CRITICAL (P1-P2) and HIGH (P3-P5, P9) issues.

### Changes made

**layout.tsx** — Added skip-to-content link (`#main-content`), changed `min-h-screen` to `min-h-dvh`

**page.tsx** — Added `id="main-content"`, `useReducedMotion` for page-load animation

**globals.css** — Added `*:focus-visible` outline styles, `prefers-reduced-motion: reduce` global override

**Navbar.tsx** — Added IntersectionObserver-based active section tracking with `layoutId="activeNav"` spring animation, expanded hamburger to `w-11 h-11` (44px), mobile links to `min-h-[44px]`, added `passive: true` to scroll listener, dynamic `aria-label` for mobile menu toggle

**Footer.tsx** — Expanded social icon links to `w-11 h-11` (44px touch targets) with hover background

**Projects.tsx** — Fixed mobile tag text from `text-[10px]` to `text-xs`, added `useReducedMotion` to all motion.div entries

**GlowCard.tsx, Skills.tsx, Experience.tsx, Hero.tsx** — Added `useReducedMotion` to conditionally disable entry/hover/tap animations

**Codebase.txt** regenerated (1572 lines)

### Build: 0 errors, 0 warnings

### Key audit findings resolved
| Category | Issue | Fix |
|----------|-------|-----|
| P1 Accessibility | No skip link | Added `<a href="#main-content">` in layout |
| P1 Accessibility | No reduced-motion | CSS global + framer-motion `useReducedMotion` |
| P2 Accessibility | No visible focus-rings | `*:focus-visible` outline styles |
| P2 Touch | Touch targets < 44px | Hamburger, social icons, mobile links → 44px |
| P3 Navigation | No active section highlight | IntersectionObserver + layoutId animation |
| P3 Responsive | Tags at 10px on mobile | Bumped to `text-xs` (12px) |
| P4 Layout | `min-h-screen` on mobile | Changed to `min-h-dvh` |
| P5 Interaction | No tap feedback on nav | `touch-feedback` utility on hamburger |
