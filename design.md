# Sentiment Analysis Platform - Design Style Guide

## Design Philosophy

### Visual Language
The platform embodies a sophisticated, data-driven aesthetic that balances professional credibility with modern innovation. The design language draws inspiration from high-end financial terminals and cutting-edge AI interfaces, creating an environment that feels both authoritative and forward-thinking.

### Color Palette
**Primary Colors:**
- Deep Navy: #0B1426 (Primary background)
- Charcoal: #1A2332 (Secondary background)
- Slate Blue: #2D3748 (Card backgrounds)

**Accent Colors:**
- Electric Blue: #3B82F6 (Primary accent, positive sentiment)
- Cyan: #06B6D4 (Secondary accent, neutral sentiment)
- Purple: #8B5CF6 (Tertiary accent, data highlights)
- Teal: #14B8A6 (Quaternary accent, system alerts)

**Sentiment Colors:**
- Positive: #10B981 (Emerald green)
- Negative: #EF4444 (Coral red)
- Neutral: #6B7280 (Cool gray)

**Text Colors:**
- Primary Text: #F9FAFB (Pure white)
- Secondary Text: #D1D5DB (Light gray)
- Muted Text: #9CA3AF (Medium gray)

### Typography
**Primary Font:** 'Inter' - Clean, modern sans-serif for excellent readability in data-heavy interfaces
**Secondary Font:** 'JetBrains Mono' - Monospace for code, data values, and technical information
**Display Font:** 'Poppins' - Bold, geometric sans-serif for headings and key metrics

**Hierarchy:**
- H1: 2.5rem, Poppins Bold
- H2: 2rem, Poppins SemiBold
- H3: 1.5rem, Inter SemiBold
- Body: 0.875rem, Inter Regular
- Caption: 0.75rem, Inter Medium

## Visual Effects & Animation

### Core Libraries Integration
**Background Effects:**
- Shader-park for dynamic particle systems and data flow visualizations
- p5.js for creative coding elements and interactive data art
- PIXI.js for high-performance particle effects and fluid animations

**Text Effects:**
- Typed.js for typewriter animations in hero sections
- Splitting.js for advanced text reveal animations
- Anime.js for smooth property animations and staggering effects

**Data Visualization:**
- ECharts.js for interactive charts with custom dark themes
- Custom WebGL shaders for real-time data flow animations
- Smooth gradient transitions for sentiment meter animations

### Animation Principles
**Micro-interactions:**
- Hover states with subtle 3D tilt effects (2-3 degrees)
- Button press animations with scale transforms (0.95x)
- Card elevation changes with shadow animations
- Color transitions for sentiment state changes

**Data Animations:**
- Smooth number counting animations for metrics
- Progressive chart drawing with easing curves
- Particle systems that respond to sentiment changes
- Fluid background patterns that reflect data flow

**Loading States:**
- Skeleton screens with shimmer effects
- Progressive data loading with smooth transitions
- Animated progress indicators with gradient fills

## Layout & Structure

### Grid System
**Desktop:** 12-column grid with 24px gutters
**Tablet:** 8-column grid with 20px gutters  
**Mobile:** 4-column grid with 16px gutters

### Component Spacing
**Base Unit:** 8px
- XS: 4px, S: 8px, M: 16px, L: 24px, XL: 32px, XXL: 48px

### Card Design
**Style:** Elevated cards with subtle borders and soft shadows
**Border Radius:** 12px for cards, 8px for buttons, 6px for inputs
**Shadows:** Multi-layer shadows for depth without harshness

## Interactive Elements

### Buttons
**Primary:** Gradient background with hover state brightness increase
**Secondary:** Transparent with colored border and hover fill
**Icon Buttons:** Circular with subtle background on hover

### Form Elements
**Inputs:** Dark backgrounds with colored focus states
**Dropdowns:** Custom styled with smooth open/close animations
**Toggles:** Smooth sliding animations with color transitions

### Navigation
**Top Navigation:** Fixed header with backdrop blur effect
**Side Navigation:** Collapsible with smooth slide animations
**Breadcrumbs:** Subtle hover effects with directional indicators

## Data Visualization Style

### Chart Aesthetics
**Background:** Transparent with subtle grid lines
**Colors:** Consistent with brand palette, maximum 3 colors per chart
**Animations:** Smooth data transitions with staggered reveals
**Interactions:** Hover tooltips with rich contextual information

### Sentiment Indicators
**Gauges:** Circular progress with gradient fills and animated values
**Meters:** Horizontal bars with smooth fill animations
**Badges:** Rounded rectangles with sentiment-appropriate colors

### Dashboard Widgets
**Cards:** Consistent elevation and spacing
**Metrics:** Large numbers with contextual subtext
**Trends:** Arrow indicators with color-coded direction
**Alerts:** Subtle notification badges with pulse animations

## Responsive Design

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

### Mobile Adaptations
- Simplified navigation with hamburger menu
- Stacked chart layouts for better readability
- Touch-optimized button sizes (minimum 44px)
- Reduced animation complexity for performance

## Accessibility

### Color Contrast
- All text meets WCAG 2.1 AA standards (4.5:1 minimum)
- Interactive elements have clear focus indicators
- Color is never the only indicator of meaning

### Motion Preferences
- Respect prefers-reduced-motion settings
- Provide alternatives to motion-based interactions
- Ensure core functionality works without animations

## Brand Applications

### Logo Treatment
- Monochromatic versions for different backgrounds
- Minimum size requirements for readability
- Clear space guidelines around logo usage

### Iconography
- Consistent stroke width and style
- Sentiment-specific icon variations
- Scalable vector format for all icons

### Photography Style
- Abstract, technology-focused imagery
- Dark, moody lighting with blue accent colors
- Minimal human subjects, focus on data and interfaces