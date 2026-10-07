# QA results

Test date: 2026-10-07 (Asia/Shanghai). This file records executed checks and does not convert unavailable measurements into passing results.

## Automated checks

- Dependency installation: **passed** with the locked `package-lock.json` using Node 22-compatible dependencies.
- Production build: **passed** with Vinext 1.0.0-beta.5, Next.js 16.3.4 and Vite 8.0.13.
- ESLint: **passed** with no reported errors or warnings.
- Hosted packaging and private deployment: **passed** through the Sites release workflow; immutable commit and version details remain available in the project deployment history.
- HTTP route check: **passed** for all 11 intended pages and `robots.txt`; the test unknown path returned HTTP 404.

## Browser checks

- 390px, 768px and 1440px: **passed** across all 11 routes. Browser audit found one H1 per page, zero empty links and no horizontal overflow.
- Header brand lockup: **passed** at desktop and 390px mobile widths. The original logo asset and lettering remain unchanged; the logo is placed directly in the header without a frame, accent rail, shadow, or supporting label.
- Display-heading typography: **passed** on the Traditional Chinese home and request pages at desktop and 390px mobile widths. Reduced scale, looser leading, softer tracking, and balanced wrapping remove cramped or orphaned lines.
- English and Traditional Chinese document language: **passed** (`en` and `zh-Hant-HK` respectively).
- Traditional Chinese localisation: **passed** for Hong Kong-facing terminology, `zh-Hant` reciprocal hreflang, `zh_HK` Open Graph locale, language switch labels and Traditional Chinese metadata.
- Page-specific title and `noindex, nofollow, noarchive`: **passed** across every route.
- English and Traditional Chinese purchasing paths: **passed** for home → product → guide → RFQ.
- Language switch: **passed** in both directions using native document navigation, including preservation of product, application and guide-topic parameters on RFQ links. This avoids the current Vinext client-side `Link` runtime failure.
- Guide table of contents: **passed** with 12 mobile/desktop entries pointing to the correct local IDs. Smooth-scroll landing remained below the sticky header.
- RFQ required fields: **passed**; invalid submission showed three required-field errors while preserving the selected product and application.
- RFQ attachments: **passed** for invalid type, over-10MB rejection, valid JPG selection, removal and re-selection.
- RFQ local demo submit: **passed** with fictional data, no drawing, double-submit protection and an on-page “nothing was sent” summary.
- 404 route: **passed** visually and returned HTTP 404.
- Screenshots: 1440px product and 390px Chinese-home screenshots were captured and visually inspected in the Codex browser session. The browser-control surface did not provide a local file export path.

## Performance

Three-run mobile Lighthouse 13.5.0 was attempted for home, product and guide against the locally built Worker. It is **unmeasured in this environment**: both installed Google Chrome 155.0.8059.39 and a clean temporary Chrome Headless Shell 155.0.8059.39 were blocked by the macOS execution sandbox while registering the Chromium Mach-port rendezvous service (`Permission denied (1100)`). All 10 attempted Lighthouse launches failed before navigation, so no scores or timings are reported. This is an environment limitation, not a substituted pass.

For formal acceptance, rerun the documented 3× mobile matrix on an environment that permits headless Chromium. Use Lighthouse 13.5.0, RTT 150ms, throughput about 1,638.4Kbps, CPU slowdown 4×, cold cache and no login; record every run, median and range without rewriting failed results.

## Known production follow-ups

- Client confirmation is required before public use of downloaded company imagery.
- Current certificate validity, legal entity and scope have not been verified.
- Primary-domain and `.com.hk` migration decisions require historical data review.
- The RFQ is intentionally local-only and has no receiving endpoint.
- The private deployed URL requires the owner to continue with ChatGPT sign-in; public access was not enabled.
