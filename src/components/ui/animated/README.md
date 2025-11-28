# Animated Statistics Components

A collection of React components for displaying impactful statistics with scroll-triggered animations for the VibCode Utah humanitarian hackathon site.

## Components

### 1. AnimatedCounter.tsx

A reusable React component that animates numbers counting from 0 to a target value with customizable formatting.

**Props:**
- `target` (number, required): The target number to count to
- `duration` (number, optional): Animation duration in milliseconds (default: 2000)
- `prefix` (string, optional): Text/symbol to display before the number (e.g., "$")
- `suffix` (string, optional): Text to display after the number (e.g., "M", "%")
- `decimals` (number, optional): Number of decimal places (default: 0)
- `separator` (boolean, optional): Use thousand separators (default: true)
- `className` (string, optional): Additional CSS classes
- `onComplete` (function, optional): Callback when animation completes

**Example:**
```tsx
<AnimatedCounter
  target={2500}
  prefix="$"
  duration={2000}
  className="text-4xl font-bold text-purple-500"
/>
```

### 2. StarkStat.tsx

A dramatic, full-width statistic component with scroll-triggered animation, designed for maximum visual impact.

### 3. StatsGrid.tsx

A responsive grid component for displaying multiple statistics in a compact, organized layout with staggered animations.

**Props:**
- `number` (number, required): The statistic value
- `prefix` (string, optional): Prefix for the number (e.g., "$")
- `suffix` (string, optional): Suffix for the number (e.g., "M", "%", " billion")
- `decimals` (number, optional): Decimal places (default: 0)
- `context` (string, required): Explanatory text below the number
- `citation` (string, optional): Source citation
- `citationUrl` (string, optional): URL for the citation source
- `accentColor` ('cyan' | 'purple' | 'orange' | 'pink' | 'green', optional): Accent color theme (default: 'purple')
- `className` (string, optional): Additional CSS classes
- `animationDuration` (number, optional): Counter animation duration (default: 2500ms)

**Features:**
- Intersection Observer for scroll-triggered animation
- Large, responsive typography (scales with viewport)
- Dramatic text shadows and gradient effects
- Animated glow backgrounds
- Citation with optional link
- Animates only once when scrolled into view
- Smooth easing animation
- Multiple color themes matching site palette

**Example:**
```tsx
<StarkStat
  client:visible
  number={2.5}
  suffix=" billion"
  decimals={1}
  context="people lack access to clean water worldwide"
  citation="WHO/UNICEF Joint Monitoring Programme 2023"
  citationUrl="https://www.who.int/..."
  accentColor="cyan"
/>
```

**Props for StatsGrid:**
- `stats` (StatItem[], required): Array of statistic objects
- `columns` (2 | 3 | 4, optional): Number of columns in the grid (default: 3)
- `className` (string, optional): Additional CSS classes
- `animationDuration` (number, optional): Counter animation duration (default: 2000ms)
- `staggerDelay` (number, optional): Delay between each card animation in ms (default: 150)

**StatItem interface:**
```typescript
{
  number: number;           // The statistic value
  prefix?: string;          // Optional prefix (e.g., "$")
  suffix?: string;          // Optional suffix (e.g., "%", "+", "M")
  decimals?: number;        // Decimal places (default: 0)
  label: string;            // Main label for the stat
  description?: string;     // Optional description text
  accentColor?: 'cyan' | 'purple' | 'orange' | 'pink' | 'green';
}
```

**Example:**
```tsx
<StatsGrid
  client:visible
  stats={[
    {
      number: 150,
      suffix: '+',
      label: 'Global Participants',
      description: 'Hackers from around the world',
      accentColor: 'cyan',
    },
    {
      number: 15,
      label: 'Days to Build',
      description: 'From idea to submission',
      accentColor: 'purple',
    },
    // ... more stats
  ]}
  columns={3}
  animationDuration={2000}
  staggerDelay={100}
/>
```

## Usage in Astro

Since these are React components, you need to use Astro's client directives:

```astro
---
import StarkStat from '@components/ui/animated/StarkStat';
import AnimatedCounter from '@components/ui/animated/AnimatedCounter';
---

<section class="bg-neutral-950">
  {/* Use client:visible for scroll-triggered loading */}
  <StarkStat
    client:visible
    number={828}
    suffix=" million"
    context="people went to bed hungry in 2023"
    citation="UN World Food Programme"
    accentColor="orange"
  />
</section>
```

### Client Directives

- `client:visible` - Load when component enters viewport (recommended for stats)
- `client:load` - Load immediately on page load
- `client:idle` - Load when browser is idle

## Styling

The components use:
- **Tailwind CSS** utility classes
- **Dark theme** by default (stone/neutral backgrounds)
- **Accent colors**: cyan, purple, orange, pink, green
- **Responsive typography**: Scales from 12vw on mobile to 6vw on xl screens
- **Text shadows** for dramatic effect
- **Gradient backgrounds** with blur effects

## Animation Details

### StarkStat Animation Sequence:
1. Component observes scroll position via IntersectionObserver
2. When 30% visible (with 100px bottom margin):
   - Number fades in and slides up (duration: 1000ms)
   - Counter animates from 0 to target (duration: 2500ms)
   - Context text fades in (delay: 300ms)
   - Citation appears (delay: 500ms)
   - Decorative line scales in (delay: 700ms)
3. Animation runs only once per page load

### AnimatedCounter Animation:
- Uses requestAnimationFrame for smooth 60fps animation
- Easing: custom easeOutQuart function for natural deceleration
- Formats numbers with locale-aware separators
- Supports prefix/suffix and decimal precision

## Color Themes

Each accent color includes:
- Text color (e.g., `text-purple-400`)
- Glow shadow effect
- Gradient (from/to variants)
- Border color

Available colors: `cyan`, `purple`, `orange`, `pink`, `green`

## Example Page

See `StatsShowcase.astro` for a complete example with multiple statistics demonstrating different use cases:
- Water access (cyan)
- Global hunger (orange)
- Internet access (purple)
- Economic disparity (pink)
- Food waste (green)

## Performance Considerations

- Uses IntersectionObserver (no scroll event listeners)
- Animations run only once
- React components are loaded on-demand with Astro client directives
- requestAnimationFrame for efficient counter animations
- Cleanup on unmount prevents memory leaks

## Browser Support

- Modern browsers with IntersectionObserver support
- Fallback: Numbers display immediately without animation
- Requires React 18+ and Astro 4+

## Accessibility

- Semantic HTML structure
- Color contrast meets WCAG AA standards
- Text remains readable without animations
- Links have proper aria attributes
- Focus states on interactive elements
