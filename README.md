# Yan Chuen website demo

A private, bilingual B2B purchasing demo for Yan Chuen Co., Ltd. It turns verified public product, process and engineering material into a working path from product discovery to a local-only RFQ demonstration.

Private owner preview: `https://yanchuen-demo.jose2026mao.chatgpt.site` (ChatGPT sign-in required).

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run lint
npm run start
```

## Routes

| English | Simplified Chinese | Purpose |
| --- | --- | --- |
| `/` | `/zh` | Homepage and product entry points |
| `/products` | `/zh/products` | Verified product range |
| `/silicone-rubber-keypad` | `/zh/silicone-rubber-keypad` | Detailed silicone keypad page |
| `/design-guides/silicone-rubber-keypad` | `/zh/design-guides/silicone-rubber-keypad` | Twelve-section engineering guide |
| `/request-a-quote` | `/zh/request-a-quote` | Local-only RFQ demonstration |
| `/proposal` | — | Chinese client review page |

## Demo safety

- The whole demo is `noindex`; `/proposal` remains noindex in any future production configuration.
- The RFQ does not call Yan Chuen, email, WhatsApp, a CRM or a backend.
- Attachments are only validated in browser memory and are not uploaded.
- Successful demo validation dispatches a local `demo_rfq_complete` event with non-PII fields only.
- Source and asset use boundaries are recorded in `content/sources.json` and `content/assets.json`.

## Project files

- `content/`: fact and asset ledgers.
- `public/assets/`: optimized local copies of public company imagery.
- `docs/seo-implementation.md`: implemented SEO and production checklist.
- `docs/redirect-map.csv`: proposed, not deployed, URL mapping.
- `docs/event-plan.md`: demo and production event boundary.
- `docs/qa-results.md`: executed checks and remaining limitations.

The private Sites project ID is stored in `.openai/hosting.json`. No real domain, DNS or original-site setting is changed by this repository.
