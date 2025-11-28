# Visual Reference Guide

Visual descriptions of how each component looks and behaves.

## StarkStat Component

### Visual Layout
```
┌────────────────────────────────────────────────────┐
│                                                    │
│              [Glowing Background Blur]             │
│                                                    │
│                    2.5 billion                     │
│              ↑ Giant gradient number ↑             │
│           [Subtle animated counter]                │
│                                                    │
│     people lack access to clean water worldwide    │
│              ↑ Context description ↑               │
│                                                    │
│          [ℹ WHO/UNICEF 2023 ↗]                     │
│            ↑ Optional citation ↑                   │
│                                                    │
│               ─────────────────                    │
│              Decorative divider                    │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Visual Characteristics
- **Number Size**: Massive (8vw on desktop, 12vw on mobile)
- **Font Weight**: Ultra-black (900)
- **Color**: Gradient from accent color start to darker end
- **Shadow**: Glowing text shadow with blur
- **Animation**: Counts from 0 → target number over 2.5 seconds
- **Scroll Trigger**: Animates when 30% visible
- **Background**: Pulsing gradient blur sphere behind number

### Color Variations
```
cyan   → Bright cyan (400) → Deep cyan (600)    [Water/Tech themes]
purple → Bright purple (400) → Deep purple (600) [General impact]
orange → Bright orange (400) → Deep orange (600) [Food/Energy]
pink   → Bright pink (400) → Deep pink (600)    [Social issues]
green  → Bright green (400) → Deep green (600)  [Environment]
```

---

## StatsGrid Component

### Visual Layout (3 columns)
```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│                  │  │                  │  │                  │
│     150+         │  │       15         │  │     $5,000       │
│  ↑ Big number    │  │                  │  │                  │
│                  │  │                  │  │                  │
│ Global           │  │ Days to Build    │  │ Prize Pool       │
│ Participants     │  │                  │  │                  │
│                  │  │                  │  │                  │
│ Hackers from     │  │ From idea to     │  │ Community-       │
│ around the world │  │ submission       │  │ funded rewards   │
│                  │  │                  │  │                  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
   ↑ Cyan accent        ↑ Purple accent      ↑ Orange accent
```

### Visual Characteristics
- **Card Background**: Dark (neutral-900/950)
- **Border**: Subtle accent color border (30% opacity)
- **Number Size**: Large (4xl-5xl)
- **Spacing**: 6 units padding, 6 units gap between cards
- **Hover Effect**:
  - Lifts up slightly (scale 1.05)
  - Border brightens (60% opacity)
  - Background gradient fades in
  - Shadow intensifies
- **Animation**: Staggered entrance (150ms delay between cards)
- **Responsive**: 1 col → 2 cols (md) → 3 cols (lg) → 4 cols (lg for 4-column mode)

### Card States

**Default State:**
```
┌─────────────────────────┐
│ [subtle border]         │
│                         │
│      150+               │
│  Global Participants    │
│  Description text...    │
│                         │
└─────────────────────────┘
```

**Hover State:**
```
┌═════════════════════════┐  ← Border brightens
│ [gradient background]   │  ← Background glows
│     ↑ Lifts up         │
│      150+               │
│  Global Participants    │
│  Description text...    │
│     [corner glow]       │  ← Corner accent appears
└═════════════════════════┘
   ↓ Shadow intensifies
```

---

## AnimatedCounter Component

### Visual Behavior
```
State 1 (Start):    0
                    ↓
State 2 (30%):      45  ← Easing function (fast at start)
                    ↓
State 3 (60%):      120 ← Still quick
                    ↓
State 4 (90%):      210 ← Slowing down
                    ↓
State 5 (100%):     250 ← Final value (smooth stop)
```

### Number Formatting
```
Input: 2500          → Output: 2,500
Input: 2500000       → Output: 2,500,000
Input: 3.14159, 2dp  → Output: 3.14
Input: 0.67, 0dp     → Output: 1 (rounds)

With prefix/suffix:
$2500 → $2,500
150+ → 150+
67% → 67%
```

---

## Animation Timeline

### StarkStat Animation Sequence
```
Scroll position: Component enters viewport (30% visible)
                        ↓
Time 0ms:    [Trigger]
Time 0-1000ms:   Number container fades in + slides up
Time 0-2500ms:   Counter animates 0 → target
Time 300ms:      Context text fades in
Time 500ms:      Citation appears
Time 700ms:      Divider line scales in
Time 1000ms:     Animation complete
```

### StatsGrid Animation Sequence
```
Scroll position: Component enters viewport (20% visible)
                        ↓
Card 1: 0ms delay    → Fade + slide up (500ms duration)
Card 2: 150ms delay  → Fade + slide up (500ms duration)
Card 3: 300ms delay  → Fade + slide up (500ms duration)
Card 4: 450ms delay  → Fade + slide up (500ms duration)
...
```

---

## Responsive Behavior

### StarkStat Breakpoints
```
Mobile (< 640px):
  - Number: 12vw (very large, fills width)
  - Context: text-xl
  - Padding: py-12

Tablet (640px - 1024px):
  - Number: 10vw
  - Context: text-2xl
  - Padding: py-14

Desktop (1024px+):
  - Number: 8vw → 7vw → 6vw (xl)
  - Context: text-3xl
  - Padding: py-16
```

### StatsGrid Breakpoints
```
Mobile (< 768px):
  - 1 column (stacked)
  - Cards full width

Tablet (768px - 1024px):
  - 2 columns (for 2, 3, or 4 col mode)
  - Cards in grid

Desktop (1024px+):
  - 3 columns (3 col mode)
  - 4 columns (4 col mode)
  - 2 columns (2 col mode)
```

---

## Color Theme Reference

### Cyan Theme
- Primary: `#22d3ee` (cyan-400)
- Secondary: `#0891b2` (cyan-600)
- Use for: Water, technology, connectivity stats

### Purple Theme
- Primary: `#c084fc` (purple-400)
- Secondary: `#9333ea` (purple-600)
- Use for: General impact, community stats

### Orange Theme
- Primary: `#fb923c` (orange-400)
- Secondary: `#ea580c` (orange-600)
- Use for: Food, energy, warmth-related stats

### Pink Theme
- Primary: `#f472b6` (pink-400)
- Secondary: `#db2777` (pink-600)
- Use for: Social issues, healthcare stats

### Green Theme
- Primary: `#4ade80` (green-400)
- Secondary: `#16a34a` (green-600)
- Use for: Environmental, sustainability stats

---

## Example Combinations

### Hero Impact Section
```
Large StarkStat (purple) → Main shocking statistic
↓ spacing
StatsGrid (3 cols, mixed colors) → Supporting details
↓ spacing
Large StarkStat (orange) → Call to action stat
```

### Dashboard Style
```
StatsGrid (4 cols) → Hackathon metrics
StatsGrid (3 cols) → Impact metrics
StatsGrid (2 cols) → Featured statistics
```

### Story Flow
```
StarkStat (cyan) → Problem statement
↓
Content section
↓
StarkStat (orange) → Another dimension of problem
↓
Content section
↓
StarkStat (green) → Solution/opportunity
```

---

## Accessibility Features

### Visual Indicators
- High contrast text (WCAG AA compliant)
- Clear focus states on interactive elements (citations)
- Text remains readable without animations

### Screen Reader Support
- Numbers are properly announced with prefix/suffix
- Citation links have proper context
- Semantic HTML structure

### Reduced Motion Support
Consider adding this to your global CSS for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .stark-stat * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
