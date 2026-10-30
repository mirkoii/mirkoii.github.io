# Verification and review notes

## Automated checks

- ESLint, strict TypeScript and Vite production build.
- Vitest: three content integrity checks for repository provenance, milestone ordering and unverified education exclusion.
- npm dependency audit: zero known vulnerabilities at install time.
- Playwright CLI using the installed Chromium executable: architecture layer selection, project filters, persisted theme across reload, mobile menu navigation and closing, horizontal overflow at 320/390/768/1024/1440px, reduced-motion preference and print visibility of all four projects while a screen filter is active.
- axe-core WCAG 2 A/AA and 2.1 AA scans in light and dark themes. A decorative illustration label contrast issue was corrected; subsequent scans found zero violations. Automated checks do not replace assistive-technology user testing.
- Browser console: no JavaScript errors; Motion logs an informational development warning when reduced motion is deliberately enabled.
- Desktop/mobile screenshots and print PDF generated under ignored `output/playwright/`; printed pages rendered with Poppler and visually inspected.

## Design and implementation decisions

- Local system fonts and a CSS architecture illustration avoid remote font/image requests and large visual assets. Lucide imports are tree-shaken; Motion animates entrance opacity/position, respecting reduced motion. CSS transitions also respect reduced motion.
- Persistent theme follows the system preference on first visit; storage failure is non-fatal. A small head script applies the theme before React starts.
- Semantic links, buttons, landmarks, skip navigation, visible keyboard focus, keyboard-operable filters/layers and an Escape-close mobile menu. No custom dialog or unnecessary focus trap.
- A static sources page and noscript identity/contact fallback remain readable without React. SEO metadata, Person JSON-LD, canonical URL, PNG Open Graph card, favicon, robots and sitemap are included. The site is a single page with anchor navigation, so no SPA fallback rewrite is needed.
- Print CSS replaces the marketing hero with name/title/contact, removes controls and reveals all projects regardless of the current interactive filter.
- CV content lives in `src/data/cv.ts`; static source notes live in `public/sources.html`. Claims require public evidence. Identity/title are owner-supplied. Employment, education, exact tenure, client names and outcomes are not inferred.
- External links use `noreferrer`; there are no analytics, third-party runtime requests, forms, secrets or backend. Dev-only axe-core is not imported into the production application.
- CI has read-only repository permissions. Manual Pages deployment requires approved input and main branch, and write/OIDC permissions are limited to the deployment job. Configure environment required reviewers before production use. No deployment was run.

## Follow-up content

The career section currently documents public repository milestones. Add a sourced employment history, education and additional certifications only when identity and public evidence are confirmed. The HackerRank certificate is clearly described as owner-shared repository evidence, without claiming independent issuer validation.

## Reproducing UI checks

Run `npm ci`, `npm run build`, and `npm run preview`. Use Playwright CLI against `http://127.0.0.1:4173` to snapshot and exercise the controls. Install Chromium with the CLI if needed. For accessibility, inject `node_modules/axe-core/axe.min.js` into the page and run `axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } })` for each theme. Verify zero violations. Save screenshots/PDFs to `output/playwright/`.
