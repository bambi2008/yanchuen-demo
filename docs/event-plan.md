# Event plan

| Event | Environment | Trigger | Allowed parameters | Explicitly excluded |
| --- | --- | --- | --- | --- |
| `view_product` | demo / production | Detailed product page viewed | product slug, language | contact data, free text |
| `view_design_section` | demo / production | Guide section becomes the active reading target | section ID, product slug, language | drawing data, URL query with private content |
| `start_rfq` | demo / production | Visitor first interacts with the RFQ | product slug, application slug, language | name, company, email, phone, requirements |
| `demo_rfq_complete` | demo only | Local validation succeeds and the browser shows the demo summary | product slug, stage, boolean `hasAttachments` | filename, attachment content, company, email, phone, free text |
| `generate_lead` | production only | Backend confirms secure receipt of a real request | product slug, stage, language, internal request ID | raw contact details, requirements or filenames in analytics |

The current code implements only a local `demo_rfq_complete` browser event. No analytics transport is configured.
