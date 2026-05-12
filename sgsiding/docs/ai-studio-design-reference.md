# AI Studio Design Reference — SG Siding Website Upgrade

## Purpose

This file is a design reference only.

Do not copy this as a new app.
Do not replace the existing project with the AI Studio files.
Do not copy AI Studio package.json dependencies.
Do not convert the project to TypeScript unless the existing repo already uses TypeScript.
Do not create duplicate files.

Use this document to guide the cosmetic redesign of the existing SG Siding website.

---

## Project Goal

Upgrade the existing SG Siding one-page website so it feels:

- More premium
- More local
- More Pacific Northwest / Vancouver Island
- More like a high-end custom siding specialist
- Better on mobile
- Less like a generic Wix/template contractor website

The website is mainly a showcase/portfolio site Shaun can send to homeowners when they ask to see his work.

---

## Brand Direction

SG Siding should feel:

- Premium
- Rugged
- Local
- Skilled
- Clean
- Trustworthy
- High-end but not flashy
- More custom-home exterior specialist than generic contractor

---

## Target Audience

Homeowners looking for quality siding and custom exterior finishing.

---

## Services To Emphasize

Only emphasize:

- Siding installation
- Soffit
- Hardie / fiber cement siding
- New builds
- Custom exterior finishing

Important: do not mention siding repair.

---

## Critical Content Rule

Do not say “siding repair.”
Do not add siding repair as a service.
Do not imply that siding repair is a focus.

---

## Preferred Visual Direction

The AI Studio concept had a strong premium contractor direction, but the final site should be darker and more dramatic.

Preferred dark-mode palette:

- Deep charcoal / near-black main background
- Dark forest green secondary background
- Warm off-white text
- Soft stone / grey muted text
- Cedar / bronze / muted copper accent
- Subtle borders using translucent off-white or warm grey

Avoid:

- Generic contractor blue
- Cheap gradients
- Overly bright colors
- Playful design
- Cookie-cutter Wix/template look

---

## Logo Requirement

The existing SG logo must be preserved.

Do not redesign it.
Do not replace it.
Do not remove it.
Do not create a new logo.

The logo should remain in the navbar/header and be adjusted only for:

- sizing
- spacing
- alignment
- contrast
- mobile layout

---

## Hero Section Direction

The hero should be the strongest visual section.

Use:

- Large premium headline
- Strong Vancouver Island / local positioning
- Short confident subheadline
- Clear mailto CTA
- Large image frame using real project photos

Important:

The main large hero image area should use the existing hardcoded project photos with a carousel effect.

Do not use placeholder icons.
Do not invent image paths.
Do not remove existing photos.
Do not break the existing gallery/carousel.

---

## Suggested Hero Copy Direction

Possible headline:

High-End Custom Exterior Finishing

Possible subheadline:

Premium siding, soffit, and fiber cement installation for Vancouver Island homes and new builds.

Possible CTA:

Request a Quote

Possible local label:

Vancouver Island Exterior Specialist

---

## Navigation Direction

Keep the website one page.

Navigation should scroll to sections on the same page.

Suggested nav items:

- Home
- Services
- Gallery
- About
- Contact

The existing SG logo should remain on the left side of the navbar.

Mobile nav should feel clean, simple, and premium.

---

## Service Presentation Direction

Services should be presented as premium cards or a strong service bar.

Approved service labels:

- Siding Installation
- Custom Soffit
- Hardie Installation
- Fiber Cement
- New Build Finishes
- Custom Exterior Finishing

Do not use “Siding Repair.”

---

## Gallery / Carousel Direction

The existing photos are important because this site is primarily a showcase.

Improve the gallery/carousel by focusing on:

- larger image presentation
- better cropping
- cleaner spacing
- dark premium framing
- subtle captions if useful
- mobile-friendly image sizing
- avoiding clutter

The hero can reuse the same existing photo source if it keeps the code cleaner.

Avoid duplicate image arrays if possible.

---

## Contact Direction

Replace any form, EmailJS, or complex form submission flow with a simple mailto CTA.

Use the confirmed email already in the codebase. If no other confirmed email exists, use:

mailto:shaun@sgsiding.ca

The contact section should still feel premium.

Possible CTA copy:

Ready to talk about your exterior project?

Button:

Email Shaun

---

## Architecture Rules

Keep the existing project architecture clean.

Do not create duplicate files such as:

- AppNew.jsx
- HomeRedesign.jsx
- Navbar2.jsx
- HeroFinal.jsx
- GalleryNew.jsx

Modify existing files/components cleanly.

Prefer:

- reusable components
- simple data arrays for nav links, services, and images
- clear component names
- no dead code
- no unused duplicate components
- no unnecessary dependencies

---

## Implementation Priorities

1. Inspect the existing repo first.
2. Identify current components, image data, logo asset, carousel, and contact setup.
3. Plan before editing.
4. Implement in small chunks.
5. Preserve the existing SG logo.
6. Use the real existing project photos in the hero carousel.
7. Convert the visual design toward dark premium Pacific Northwest style.
8. Replace contact form/EmailJS with mailto.
9. Remove unused code safely.
10. Run existing validation/build commands.

---

## AI Studio Concept Notes

The AI Studio concept included useful ideas:

- SG SIDING brand presence
- Vancouver Island label
- High-end custom exterior finishing copy
- Trusted PNW contractor badge
- Request a Quote CTA
- Premium service bar
- Warm cedar accent
- Forest green palette
- Large hero visual area
- Simple mailto CTA

Use these as inspiration only.
Do not copy the AI Studio app directly.
