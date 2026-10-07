# SEO implementation

## Demo state

- Every public purchasing route has one visible H1 and readable server-rendered copy.
- English and Simplified Chinese routes have independent titles and descriptions.
- Product, design guide and RFQ routes link to one another with real destinations.
- Content images use specific alt text and explicit dimensions through `next/image`.
- The guide uses 12 local section IDs; no silicone section points to the membrane guide.
- Root metadata sets `noindex, nofollow, noarchive`. `robots.txt` allows crawling so preview crawlers can read the meta directive; it is not used as a substitute for `noindex`.
- `/proposal` has its own noindex metadata and is intentionally absent from a public sitemap.
- Demo canonical and hreflang values use `NEXT_PUBLIC_SITE_URL` when configured; the placeholder origin is not a statement that production is live.

## Production checklist

1. Decide the primary domain only after checking `.com` and `.com.hk` history.
2. Set the production origin, enable indexing for approved purchasing pages and preserve noindex on `/proposal`.
3. Configure one-to-one 301 redirects from reviewed legacy paths.
4. Emit canonical and reciprocal `en` / `zh-Hans` hreflang on the live domain.
5. Generate a production sitemap that excludes `/proposal`.
6. Connect a secured RFQ endpoint and verify consent, retention and access rules.
7. Fire `generate_lead` only after the backend confirms receipt; keep `demo_rfq_complete` separate.
8. Validate structured data against visible, client-confirmed company information only.

## Measurement boundary

The demo does not claim rankings, Google index counts, live Core Web Vitals, traffic, qualified leads or revenue improvement. The original-site laboratory measurements supplied in the brief are a dated baseline, not results for this build.
