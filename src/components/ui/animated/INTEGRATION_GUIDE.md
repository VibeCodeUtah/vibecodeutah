# Integration Guide

Quick guide to integrating the animated statistics components into your Astro pages.

## Quick Start

### 1. Import the components in your Astro page

```astro
---
import StarkStat from '@components/ui/animated/StarkStat';
import StatsGrid from '@components/ui/animated/StatsGrid';
---
```

### 2. Add to your page with client directives

```astro
<section class="bg-neutral-950 py-24">
  <StarkStat
    client:visible
    number={2500000}
    context="lines of code written by participants"
    accentColor="purple"
  />
</section>
```

## Integration Examples

### Example 1: Adding to Homepage

Add impactful statistics to your hero section or after your main content:

```astro
---
// src/pages/index.astro
import Layout from '@layouts/MainLayout.astro';
import StarkStat from '@components/ui/animated/StarkStat';
---

<Layout title="VibCode Utah">
  <!-- Your existing hero content -->

  <!-- Add dramatic stat -->
  <div class="bg-neutral-950">
    <StarkStat
      client:visible
      number={828}
      suffix=" million"
      context="people went to bed hungry last night"
      citation="UN World Food Programme 2023"
      citationUrl="https://www.wfp.org/global-hunger-crisis"
      accentColor="orange"
    />
  </div>

  <!-- Rest of your content -->
</Layout>
```

### Example 2: Stats Section with Grid

Create a dedicated statistics section:

```astro
---
import StatsGrid from '@components/ui/animated/StatsGrid';

const hackathonStats = [
  {
    number: 150,
    suffix: '+',
    label: 'Participants',
    accentColor: 'cyan' as const,
  },
  {
    number: 15,
    label: 'Days',
    accentColor: 'purple' as const,
  },
  {
    number: 5000,
    prefix: '$',
    label: 'Prize Pool',
    accentColor: 'orange' as const,
  },
];
---

<section class="bg-neutral-900 py-16">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-white text-center mb-12">
      Event Stats
    </h2>
    <StatsGrid
      client:visible
      stats={hackathonStats}
      columns={3}
    />
  </div>
</section>
```

### Example 3: Impact Page

Create a dedicated impact/statistics page:

```astro
---
// src/pages/impact.astro
import Layout from '@layouts/MainLayout.astro';
import StarkStat from '@components/ui/animated/StarkStat';
import StatsGrid from '@components/ui/animated/StatsGrid';
---

<Layout title="Our Impact">
  <div class="bg-neutral-950">

    <!-- Hero stat -->
    <StarkStat
      client:visible
      number={2.5}
      suffix=" billion"
      decimals={1}
      context="people lack access to clean water worldwide"
      citation="WHO/UNICEF 2023"
      citationUrl="#"
      accentColor="cyan"
    />

    <!-- Supporting stats grid -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <StatsGrid
          client:visible
          stats={[
            {
              number: 67,
              suffix: '%',
              label: 'Internet Access',
              description: 'Global connectivity rate',
              accentColor: 'purple',
            },
            // ... more stats
          ]}
          columns={3}
        />
      </div>
    </section>

    <!-- Another dramatic stat -->
    <StarkStat
      client:visible
      number={3.6}
      suffix=" billion"
      decimals={1}
      context="people live on less than $6.85 per day"
      citation="World Bank 2023"
      accentColor="pink"
    />

  </div>
</Layout>
```

### Example 4: Inline with Existing Content

Mix stats with your existing sections:

```astro
<!-- Your mission section -->
<Section title="Our Mission">
  <p>We're building solutions for global challenges...</p>
</Section>

<!-- Add impact stat -->
<div class="bg-neutral-950">
  <StarkStat
    client:visible
    number={1.1}
    suffix=" billion"
    decimals={1}
    context="tons of food wasted globally each year"
    citation="UNEP Food Waste Index 2024"
    accentColor="green"
  />
</div>

<!-- Continue with more content -->
<Section title="How It Works">
  <!-- ... -->
</Section>
```

## Styling Tips

### Match Your Site Theme

The components are designed to work with your existing dark theme, but you can customize:

```astro
<!-- Wrap in a colored background section -->
<section class="bg-gradient-to-b from-neutral-950 via-purple-950/20 to-neutral-950">
  <StarkStat
    client:visible
    number={100}
    suffix="%"
    context="committed to humanitarian impact"
    accentColor="purple"
  />
</section>
```

### Add Spacing

Use Tailwind utilities to add spacing:

```astro
<div class="py-24 md:py-32">
  <StarkStat
    client:visible
    number={500}
    suffix="+"
    context="lives impacted"
    accentColor="cyan"
    className="my-16"
  />
</div>
```

### Combine with Existing Layouts

```astro
<Section title="Impact Stats" id="impact">
  <div class="grid gap-16">
    <StarkStat
      client:visible
      number={1000}
      suffix="+"
      context="hours of volunteer coding"
      accentColor="purple"
    />

    <StatsGrid
      client:visible
      stats={yourStats}
      columns={3}
    />
  </div>
</Section>
```

## Performance Tips

1. **Use `client:visible`** - Only loads when component enters viewport
2. **Group stats** - Use StatsGrid for multiple small stats instead of multiple StarkStats
3. **Limit animations** - Don't use too many StarkStat components on one page (they're meant to be impactful focal points)

## Recommended Usage

- **StarkStat**: 1-3 per page max, for major impactful statistics
- **StatsGrid**: Great for sections with 3-12 related stats
- **AnimatedCounter**: Use directly when you need custom layouts

## Color Combinations

Mix accent colors for visual variety:

```astro
<StarkStat accentColor="cyan" />    <!-- Water/tech themes -->
<StarkStat accentColor="orange" />  <!-- Food/energy themes -->
<StarkStat accentColor="purple" />  <!-- General impact -->
<StarkStat accentColor="pink" />    <!-- Social issues -->
<StarkStat accentColor="green" />   <!-- Environmental -->
```

## Accessibility

The components are built with accessibility in mind:
- Semantic HTML
- Proper contrast ratios
- Works without JavaScript (shows final values)
- Screen reader friendly

## Need Help?

Check out the example files:
- `StatsShowcase.astro` - Full examples of StarkStat
- `StatsGridExample.astro` - Full examples of StatsGrid
- `README.md` - Complete component documentation
