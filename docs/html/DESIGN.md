---
name: Cosmic Anamorphic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bec7d3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#88929d'
  outline-variant: '#3e4851'
  surface-tint: '#93ccff'
  primary: '#93ccff'
  on-primary: '#003351'
  primary-container: '#00aaff'
  on-primary-container: '#003c5d'
  inverse-primary: '#006398'
  secondary: '#c0c1ff'
  on-secondary: '#0e00aa'
  secondary-container: '#2013e9'
  on-secondary-container: '#afb2ff'
  tertiary: '#ecb2ff'
  on-tertiary: '#520071'
  tertiary-container: '#d97bff'
  on-tertiary-container: '#5f0082'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#06006c'
  on-secondary-fixed-variant: '#1c0ae7'
  tertiary-fixed: '#f8d8ff'
  tertiary-fixed-dim: '#ecb2ff'
  on-tertiary-fixed: '#320047'
  on-tertiary-fixed-variant: '#74009f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  deep-navy: '#050516'
  cyber-cyan: '#00E0FF'
  void-surface: '#121218'
  text-silver: '#E0E0E0'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  margin-safe: 32px
  gutter: 24px
  panel-width: 320px
---

## Brand & Style

The design system is engineered for a high-tech, AI-driven creative environment where 3D anamorphic video production feels less like a technical chore and more like a cinematic experience. The brand personality is **mysterious, elite, and powerful**, evoking the feeling of a futuristic command center floating in deep space.

The visual style is a sophisticated blend of **Glassmorphism and Futurism**. It utilizes deep layers of transparency, frosted textures, and vibrant neon light-leaks to represent the intersection of AI intelligence and visual light. The interface should feel immersive and "unbounded," using background blurs and subtle glows to create a 3D depth that mimics the anamorphic content being produced.

Key principles:
- **Atmospheric Depth:** Layers are not just stacked; they are suspended in a 3D space with varying levels of blur.
- **Luminous Interaction:** Every interactive element should feel like a light source, emitting subtle glows.
- **Cinematic Precision:** High-contrast typography and razor-sharp lines against dark voids to emphasize professional-grade output.

## Colors

This design system utilizes a "Deep Space" palette. The foundation is **#050505 (Deep Space Black)**, providing a pure void for content to live in. We contrast this with **#050516 (Galactic Navy)** for UI surfaces to prevent a completely flat black appearance.

- **Primary (Electric Blue):** Used for primary actions, active AI processing states, and focus indicators.
- **Secondary (Cyber Purple):** Used for creative tools, 3D manipulation controls, and secondary highlights.
- **Accents:** Neon Cyan and Cyber Purple are often used as gradients to represent "AI Energy" or light-path trajectories.
- **Neutral:** A range of silvers and desaturated navies are used for text and borders to maintain a professional, low-fatigue environment for long production sessions.

## Typography

The typographic hierarchy balances bold, geometric expression with technical precision. 

- **Headlines:** Space Grotesk provides a futuristic, technical aesthetic with distinctive letterforms. Large display headers should use tight tracking to emphasize the "engineered" feel.
- **Body:** Hanken Grotesk is chosen for its exceptional legibility and modern, clean geometry, ensuring that complex creative instructions are easy to read.
- **Metadata & Technicals:** JetBrains Mono is used for all coordinate data, AI parameters, and file information, reinforcing the tool's identity as a high-precision instrument.

Avoid using italics in technical contexts; use font-weight shifts or color changes (e.g., dimming to secondary text) to create hierarchy.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid model**. The main viewport for 3D production should be fluid, maximizing the "canvas" area, while toolbars and inspector panels remain at fixed widths (e.g., 320px) to ensure consistent control sizing.

- **The Grid:** Use a 12-column grid for landing pages, but switch to a workspace-based "No Grid" layout for the tool interface, relying on absolute positioning of floating panels with a 24px margin from the screen edge.
- **Rhythm:** An 8px linear scale handles all spacing.
- **Safe Areas:** Maintain a 32px safe zone around the edge of the viewport to allow for "floating" glass elements to breathe without touching the bezel.

## Elevation & Depth

This design system uses **Glassmorphism and Tonal layers** rather than traditional shadows.

- **Base Layer:** The "Deep Space" background (#050505).
- **Surface Layer:** Dark navy panels with a subtle 1px border (#ffffff15) and a Backdrop Blur of 20px.
- **Floating Layer:** Interactive modals or floating tooltips use higher transparency and a secondary border highlight (e.g., a top-left gradient stroke) to imply a light source from above.
- **Glows:** Instead of black drop-shadows, use **Cyan or Purple drop-shadows** with very low opacity (10-15%) and high blur (40px+) to simulate light emitting from the UI elements themselves.

## Shapes

The shape language is **"Rounded-Technical."** We avoid the overly soft "bubbliness" of consumer apps, opting for a medium 8px (0.5rem) radius that feels modern and approachable but retains its structural integrity.

- **UI Controls:** 8px radius.
- **Panels/Cards:** 16px (1rem) radius.
- **Status Indicators:** Full pill-shape for chips and toggle-switches.
- **3D Gizmos:** Sharp or minimal rounding to emphasize precision.

## Components

### Buttons
- **Primary:** Gradient background (Electric Blue to Cyber Purple), 8px radius, white text. On hover, increase the glow intensity using a colored shadow.
- **Secondary:** Ghost style. Transparent background, 1px Cyan border, Cyan text.
- **Glass Action:** Semi-transparent white (10%) with backdrop blur. Used for tools sitting directly over 3D content.

### Inputs & Selects
- Dark navy background with a 1px border. On focus, the border glows Electric Blue and the label (in JetBrains Mono) shifts to the primary color. Use monospaced fonts for numerical input.

### Chips / Status Tags
- Pill-shaped with a faint background tint. For "Processing" or "Rendering" states, add a subtle breathing animation to the background glow.

### Cards & Panels
- Utilize the Glassmorphic stack: `background: rgba(18, 18, 24, 0.7)`, `backdrop-filter: blur(20px)`, and a `1px` border with a linear gradient from top-left (#FFFFFF30) to bottom-right (#FFFFFF05).

### Toolbars
- Floating, detached panels with a higher elevation. Icons should be thin-stroke (1.5px) and transition from grey to Electric Blue on active states.

### Timeline & Keyframes
- High-contrast technical components. The playhead should be a vibrant neon line that leaves a faint "trail" glow as it moves across the dark canvas.