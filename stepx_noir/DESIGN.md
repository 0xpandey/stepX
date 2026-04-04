```markdown
# Design System Specification: Premium Sneaker Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Vault"**
This design system is built to evoke the feeling of a high-security, ultra-luxury vault where street culture meets high-end gallery curation. We are moving away from the "standard e-commerce" look—characterized by cluttered grids and excessive borders—toward a "High-End Editorial" experience. 

To achieve this, we leverage **intentional asymmetry** and **tonal depth**. The interface should feel like a premium physical space; products aren't just "items in a list," they are showcased artifacts. We break the template look by using massive typography scales, overlapping elements that break the grid, and a "Deep Dark" palette that allows the product photography to breathe and glow.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated "Deep Dark" environment. We do not use pure black for everything; we use varying shades of obsidian and charcoal to create a sense of three-dimensional space.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define the end of one section and the start of another, use background color shifts or generous vertical whitespace. 
*   **Example:** A `surface` hero section transitions directly into a `surface_container_low` product gallery. The change in tone is the divider.

### Surface Hierarchy & Nesting
Treat the UI as stacked layers of material.
*   **Base Layer:** `surface` (#131313) or `surface_container_lowest` (#0E0E0E) for the main background.
*   **Secondary Layer:** `surface_container_low` (#1C1B1B) for large content blocks.
*   **Elevated Layer:** `surface_container_high` (#2A2A2A) for interactive cards or modals.
*   **Nesting:** When placing a card inside a section, the card must always be at least one level "Higher" or "Lower" than its parent container to create a natural, borderless lift.

### The "Glass & Gradient" Rule
For floating elements like Navigation Bars or Quick-Buy sheets, use Glassmorphism:
*   **Surface:** `surface_container_highest` at 60% opacity.
*   **Effect:** 20px - 40px Backdrop Blur.
*   **Signature Textures:** For the primary CTA, use a subtle linear gradient from `primary_fixed` (#C3F400) to `primary_fixed_dim` (#ABD600) at a 135-degree angle to provide a metallic, high-velocity sheen.

---

## 3. Typography
The typography strategy creates an "Editorial Power" vibe, pairing the technical, modern edges of **Space Grotesk** with the clean, approachable luxury of **Manrope**.

*   **Display (Space Grotesk):** Used for "Brand Moments"—hero headlines and major price points. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to feel aggressive and premium.
*   **Headline (Space Grotesk):** Used for category titles. Bold and unapologetic.
*   **Body (Manrope):** All functional text. Use `body-lg` (1rem) for product descriptions with a generous line-height (1.6) to ensure an airy, high-end feel.
*   **Labels (Manrope):** `label-md` should always be Uppercase with +0.1em tracking for a "technical spec" look on sneaker details.

---

## 4. Elevation & Depth
In this system, depth is a product of light and tone, not structure.

*   **The Layering Principle:** Avoid shadows on static elements. Instead, use the `surface-container` tiers to "stack" the UI.
*   **Ambient Shadows:** If a component must float (e.g., a floating shopping cart), use a "Neon Glow" shadow. Instead of black, use a 4% opacity version of the `primary` (white) or `surface_tint` (green) with a 40px blur. This mimics how a light source would hit a premium object in a dark room.
*   **The "Ghost Border" Fallback:** If a container is placed on a background of the same color and requires definition for accessibility, use a **Ghost Border**: `outline_variant` at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Filled with `primary_fixed` (#C3F400). Text is `on_primary_fixed` (#161E00). Shape: `md` (0.375rem).
*   **Secondary:** Ghost style. No background, `outline` border at 20% opacity, white text.
*   **Tertiary:** Text only, `label-md` style, with a `primary_fixed` underline that appears only on hover.

### Cards & Product Grids
*   **Style:** No borders, no dividers. Use `surface_container_low`. 
*   **Image Handling:** Sneakers should be shot on a dark background or masked with a subtle `surface_dim` shadow to look integrated into the card.
*   **Spacing:** Use `DEFAULT` (0.25rem) for internal grouping and `xl` (0.75rem) for external margins.

### Input Fields
*   **Base:** `surface_container_highest` background. 
*   **Indicator:** No full border. Only a 2px bottom bar in `primary_fixed` (#C3F400) when the field is focused.
*   **Error:** Use the `error` (#FFB4AB) color for text and the bottom indicator only.

### Chips (Size/Category Selection)
*   **Unselected:** `surface_container_high` background, `on_surface_variant` text.
*   **Selected:** `primary_fixed` background, `on_primary_fixed` text. This is where the neon green "pops" most effectively.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Negative Space:** If you think a section needs more content, it probably actually needs more padding. Use 128px+ vertical padding between major homepage sections.
*   **Use Asymmetry:** Place a large `display-lg` headline on the left and a product image slightly offset to the right, breaking the standard center-alignment.
*   **High-Contrast CTAs:** Ensure the Neon Green is only used for the most important actions. If everything is green, nothing is premium.

### Don't:
*   **No Dividers:** Never use a `<hr>` or a 1px solid line to separate list items. Use a 1-step shift in surface color or 24px of empty space.
*   **No Pure Black (#000):** It kills the "depth" of the dark mode. Stick to the `surface` tokens which provide enough grey-matter to allow shadows to be visible.
*   **No Standard Icons:** Avoid generic, thin-line icons. Use slightly heavier, "filled" or "duotone" icons that match the weight of the **Space Grotesk** headlines.

---

**Director's Final Note:** 
Remember, StepX is not just selling shoes; it is selling an entry into a subculture. Every pixel should feel like it was placed by a curator, not a framework. If the layout feels too "safe," increase the whitespace and bump the typography size. Build for the "Vault."```