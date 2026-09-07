# SEO/GEO implementation and benchmark, 7 September 2026

Production: https://cloverdaleroofingco.com. Read `report.html` for the plain-language overview.

## Ranked gaps and decisions

| Priority | Gap and expected impact | Evidence | Action / remaining dependency |
| --- | --- | --- | --- |
| 1, high | Verifiable provider and operational inquiries | Visible email is info@fx-media.no; form opens an email draft. No confirmed contractor phone, licence, insurance, genuine project portfolio or review profile supplied. | User confirmation required before publishing provider facts, adding local-business credentials, or routing leads to a roofing partner. Do not manufacture proof. |
| 2, high | Discovery of new priority pages | Initial Google URL Inspection: Clayton Heights, South Surrey and guide unknown. Repeat: two locations discovered but not indexed; guide still unknown. Older sampled pages last crawled 21–23 August. | Added accurate editorial lastmod dates to ten changed pages. All 15 pages are in sitemap and internal navigation. Direct sitemap submission failed because OAuth is read-only and browser requires re-verification. Google decides when to crawl/index; no causal claim about changed inspection status. |
| 3, medium–high | Direct answers and source support | Baseline service and guide copy explained scope but did not cite primary roofing/contractor guidance. | Added four explicit service answers, a quote answer/checklist and attributed RCABC, WorkSafeBC and IKO links. All four location pages link relevant contractor guidance. Six priority queries have a distinct destination and identifiable answer section. |
| 4, medium | Geographic ambiguity | Service/location titles did not consistently specify BC; similarly named places appear in broader search discovery. | Added BC titles and British Columbia context. Kept the four existing coverage areas and route URLs. No service-city page multiplication. |
| 5, medium | Hover navigation and dismissal | Prior mega menu opened by click. Initial review found header-only Escape handling insufficient when opened with a mouse. | Added desktop mouse entry with a 220ms exit grace period; retained native click/keyboard/touch. Document-level Escape closes a hover-open menu with focus elsewhere. Outside click and route change close menus. |
| 6, low | Structured data precision and title length | Location catalog nested OfferCatalog objects in place of service offers. Baseline crawl had three metadata-length notices; first repeat had one cedar title notice. | Corrected Offer → itemOffered → Service, added stable service IDs, shortened metadata. Kept Organization rather than fabricating LocalBusiness address, ratings or credentials. |

## Fixed benchmark protocol

`priority-queries.json` fixes six verbatim English queries and six primary pages. No branded context or site URL was added to prompts. Google: OpenSEO live results, Canada 2124, English, depth 20 **SERP rows**, which include non-organic features. Bing: browser first page, cc=ca and setlang=en. Copilot Search and Perplexity: unsigned-in default answer mode and BC specified in the query. Physical browser location and engine model versions were not controlled. Copilot refreshes may return cached answers; Perplexity after-pass used fresh query sessions.

| Measurement | Baseline | After content changes | Final pass after title correction |
| --- | --- | --- | --- |
| Google domain appearances in returned rows | 0/6 queries | 0/6 | 0/6 |
| Bing domain appearances on first result page | 0/6 | 0/6 | 0/6 |
| Copilot Search answers citing this domain | 0/6 | 0/6 | 0/6 |
| Perplexity answers citing this domain | 3/6, homepage only | 3/6, homepage only | 4/6, homepage only |
| Sampled Google URL Inspection | 4 indexed, 3 unknown | 4 indexed, 2 discovered/not indexed, 1 unknown | Not resampled a third time |

The first three Perplexity queries are repair, replacement and cedar conversion. The final pass also cited the homepage for the Clayton Heights inspection query. South Surrey and the quote query did not cite the site. This variation does not prove the changes caused a gain. Google AI overview rows returned null answer content, so they were not scored. This is not a ChatGPT or Gemini benchmark. The saved browser records contain observed source URLs/labels; the tool could not export full browser pages. Domain-level estimates are provider estimates, not measured traffic. The keyword discovery call returned unrelated repair terms through a fallback; those suggestions and their volumes were rejected.

## Validation and stopping condition

Typecheck, lint, production build, all-page HTML validation and the six-page answer mapping check passed. Built-page checks cover 15 routes, 693 internal links/anchors, unique metadata, preferred URLs, image text alternatives, parseable structured data, sitemap and robots. Production browser checked mouse pointer entry, keyboard Enter/Escape (including main-content focus), mobile menu tap and route cleanup, plus nine changed pages at 390px without horizontal overflow. Pointer entry was exercised using the browser tool's drag movement because it has no standalone hover command. No real inquiry was sent. External source claims were checked against their linked primary pages. The adversarial review caught and prompted the Escape and evidence-overwrite fixes.

The full production crawl uses the same 30-page budget, same start URL and Lighthouse disabled. Baseline audit `5c3cec2b-a291-47b3-8c77-be92328cf89d` reached 15 pages, zero critical/warning issues, three informational length notices. First repeat `1183b698-5917-4132-8b88-2b4672cfa1fb` reached 15 pages, zero critical/warning issues, one informational notice. Final audit `4dc83b5b-36ec-492a-98cb-07e4c986edce` reached all 15 pages and reported zero issues of any severity. Content commit `4f2904e`, final title correction `5979dfb`; both deployed to Production. Final title was verified at the public cedar URL.

Do not interpret passing checks as proof that no high-impact SEO gap remains. Verified provider evidence, reliable lead delivery and search discovery remain dependencies. A second same-session benchmark showed no visibility gain. Further unchanged polling cannot establish future ranking or AI inclusion; rerun this fixed protocol after Google has fetched the changed pages or the missing business evidence is supplied. No unattended loop or recurring automation was created.

## Required owner actions

1. Confirm whether this is an operating roofer or a lead-generation concept; provide the real provider and approved contact/receiving system before activating business-specific trust and delivery.
2. Sign in to Search Console for `sc-domain:cloverdaleroofingco.com`, open Sitemaps, and submit `https://cloverdaleroofingco.com/sitemap.xml`. The connected API has read-only scope; no permissions were expanded. Check submission status and then URL Inspection for the new pages. Submission is not an indexing guarantee.

## Primary references

- [RCABC homeowner questions](https://www.rcabc.org/faq/): assessment, written scope, warranties and contractor documents.
- [WorkSafeBC clearance letters](https://www.worksafebc.com/en/insurance/why-clearance-letter): registration and premium standing.
- [IKO document library](https://www.iko.com/na/document-library/): product-specific installation and warranty documentation; no brand affiliation asserted.
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features): ordinary SEO foundations and indexed/snippet-eligible pages; no special AI markup promised.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): canonical URLs and accurate modification dates.

The local contractor-site kit informed the implementation standard; this audit's numerical findings come from current production tools and stored evidence, not the kit or social-media posts.
