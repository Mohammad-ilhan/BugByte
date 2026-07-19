## Visual Polish & UX — Quick Wins

Targeted, high-impact additions that fit the current fire/water theme without rebuilding any section. Each item is small in scope but visibly elevates the site.

### 1. Testimonials section (new)
A new `TestimonialsSection.tsx` placed between Projects and Experience. Theme-aware card grid with a quote mark watermark, client name, project they hired you for, and a subtle tilt-on-hover (reusing `TiltCard`). Auto-rotating featured quote at the top with manual dot navigation.

You'll provide the actual testimonial quotes — placeholder content will be wired in initially, marked clearly with `TODO` so you can swap in real text easily.

### 2. Scroll progress bar
A 2px fire-gradient bar pinned to the top of the viewport that fills as the user scrolls. Theme-reactive (fire → water gradient).

### 3. Magnetic CTAs
The Hero's "View Projects", "Hire Me", and "Resume" buttons get a subtle magnetic pull toward the cursor on hover (max ~8px offset, spring-smoothed). Premium Linear/Apple feel. Disabled for reduced-motion and touch.

### 4. Section reveal upgrade
Replace the basic fade-up on section headings with a split-letter reveal for the gradient word in each `<h2>` (e.g. "Intelligence", "Expertise", "Projects", "Connect"). Letters cascade in with stagger 40ms. Single shared component `<GradientReveal>`.

### 5. Project card image preview on hover
Project cards currently show only an icon. On hover (desktop), reveal a small thumbnail strip from the existing `screenshots` array (already on AI projects) sliding up from the bottom. Cards without screenshots stay as-is. No new assets needed.

### 6. Marquee tech ticker
A slim infinite-scroll marquee above the Skills section showing the tech logos/names ("Python • RAG • FAISS • Ollama • React • Tailwind • …"). Pauses on hover. Theme-aware divider color.

### 7. Footer upgrade
Current footer is one line. Add: quick nav links, social icons, "Available for freelance" status dot (pulsing green), and a "Back to top" button with smooth scroll.

### 8. Cursor-follow glow on dark theme
A soft 200px radial glow that follows the cursor across the page (fire orange in fire theme, cyan in water theme). Mix-blend-overlay so it only highlights, never obscures. Disabled on touch.

### Technical notes
- All effects respect `useReducedMotion` and touch detection (no-ops on mobile where appropriate).
- All colors via existing semantic tokens (`--primary`, `--ember`, gradient-fire). No hardcoded hex.
- No new dependencies — framer-motion already installed.
- Bundle impact: <8KB gzipped total.

### Files
**New**
- `src/components/TestimonialsSection.tsx`
- `src/components/ScrollProgress.tsx`
- `src/components/MagneticButton.tsx`
- `src/components/GradientReveal.tsx`
- `src/components/TechMarquee.tsx`
- `src/components/CursorGlow.tsx`

**Edited**
- `src/pages/Index.tsx` — mount ScrollProgress, CursorGlow, TestimonialsSection
- `src/components/HeroSection.tsx` — wrap CTAs in MagneticButton, use GradientReveal for "Ilhan"
- `src/components/AboutSection.tsx` / `SkillsSection.tsx` / `ProjectsSection.tsx` / `ContactSection.tsx` — swap headline gradient span for GradientReveal
- `src/components/SkillsSection.tsx` — render TechMarquee above grid
- `src/components/ProjectsSection.tsx` — hover thumbnail strip on cards with screenshots
- `src/components/Footer.tsx` — expanded layout with quick links, social, status, back-to-top

### Not included (ask if you want any)
- Blog/articles section (no content yet)
- Analytics dashboard / GA4 integration (needs your measurement ID)
- 3D / WebGL effects (heavier; can do later if you want)
