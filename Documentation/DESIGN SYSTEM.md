
# Design System

## Design Intent

The portfolio should feel professional, focused, modern, and technology-oriented.

The interface should emphasize content hierarchy and usability rather than excessive animation or decoration.

## Color Foundation

The existing styling configuration uses a dark palette with emerald accents. These values are the current baseline and may be refined during redesign.

| Token | Current value | Purpose |
|---|---|---|
| Void | `#06090A` | Main background |
| Surface | `#0D1210` | Secondary surfaces |
| Raised surface | `#111815` | Elevated surfaces |
| Ink | `#E9EFEC` | Primary text |
| Muted ink | `#8A9A93` | Secondary text |
| Faint ink | `#54615C` | Subtle text |
| Emerald | `#2FD18F` | Primary accent |
| Emerald glow | `#5CF2B8` | Highlight accent |

Use contrast carefully, especially for secondary text and interactive controls.

## Typography

The current font configuration includes:

- **Space Grotesk:** display and heading typography.
- **Inter:** body text and general interface content.
- **JetBrains Mono:** technical labels and selected metadata.

Typography should establish a clear hierarchy without unnecessary font-size variation.

## Layout and Spacing

- Use consistent horizontal page gutters.
- Maintain readable line lengths.
- Apply consistent spacing between sections and components.
- Ensure layouts adapt to small screens.
- Avoid horizontal overflow.
- Use whitespace to distinguish content groups.

## Surfaces and Borders

Cards and panels may use subtle borders and restrained surface contrast.

Glass effects and blur should be used selectively. Important text must remain readable against its background.

## Motion

Animation should clarify state changes or provide subtle visual feedback.

Avoid excessive parallax, unnecessary continuous animation, distracting counters, and interactions that slow down navigation.

Respect the user's reduced-motion preference.

## Interaction States

Interactive elements should provide appropriate hover, focus, active, and disabled states where applicable.

Keyboard focus must remain visible. Touch targets should be comfortable to use on mobile devices.

## Responsive Design

Layouts should be checked at narrow mobile, tablet, laptop, and wide desktop widths.

Navigation, cards, typography, spacing, and imagery should adapt without clipping or losing important content.

## Accessibility

- Use semantic HTML.
- Provide descriptive link and button labels.
- Include useful alternative text for meaningful images.
- Maintain sufficient text contrast.
- Ensure keyboard accessibility.
- Avoid communicating status through color alone.
- Respect reduced-motion preferences.

## Design Changes

Update this document when the core color palette, typography, layout rules, animation principles, or responsive behavior changes materially.
