# Contractor-site implementation review

Reviewed 2026-09-06 against `C:\dev\contractor-site-kit\docs\methodology` and the site's actual source and rendered pages.

## What the X references changed

| Reference | Applied to this site | Still dependent on business information |
| --- | --- | --- |
| [Noah Igler: homepage checklist](https://x.com/noahiglerSEO/status/2087499847326630281) | Existing service/location headline and hero form preserved. Contextual service selection, persistent form fields, explicit next steps, mobile assessment action after the form scrolls out of view. | Real trust proof, phone access, confirmed response expectations, CRM delivery, conversion measurement. |
| [Jary: five-point clarity checklist](https://x.com/jarydesign/status/2030397326443913466) | Clear service decisions, focused inquiry form, fewer repeat selections, reachable contact information, usable mobile navigation. | Verified phone number, actual crew/project photography, and review source. |
| [Andy Walker: service/location architecture](https://x.com/andywalkerhq/status/1970978075589439690) | Four substantial service pages, four substantial location pages, both directory pages, cross-links, full breadcrumbs, and mega menus. Each service has its own scope, process, quote factors, limits, and FAQs. | Additional areas or service/location combinations require genuine coverage and material local evidence. A full keyword matrix was not generated. |
| [Noah Igler: AI-site audit](https://x.com/noahiglerSEO/status/2090400207066333529) | Automated built-HTML audit for all 15 public pages: metadata uniqueness, one H1, production canonicals, valid JSON-LD, images with alt text, every internal link/anchor, sitemap inventory, and robots sitemap declaration. Useful 404 and legacy redirects. | Search Console indexing and field performance are not established by build checks. |
| [Alex Lathery: portfolio](https://x.com/AlexLathery/status/1988002046385992097) | Used as a visual reference, retaining this site's navy/lime identity and Archivo typography. Expanded editorial content, consistent footer, stronger focus treatment, and removal of obsolete design CSS. Illustrative images are not presented as completed-project evidence. | Real branding assets and project photography. This is not a claim that the site reproduces a particular portfolio design. |
| [Jary: focused campaign landing pages](https://x.com/jarydesign/status/2086236011563045353) | Kept one primary assessment intent. The main site remains multi-page. Existing homepage headline retained while paid-ad status is unknown. | Campaign-specific pages and messaging require the actual campaign, offer, and tracking destination. |

The original kit also rejected `llms.txt` as a required ranking feature. No ranking guarantee, fabricated rating, local office, insurance badge, or emergency response promise was added.

## Site inventory

- `/`
- `/services` and `/services/roof-repair`, `/services/roof-replacement`, `/services/cedar-roof-conversion`, `/services/roof-inspection`
- `/locations` and `/locations/cloverdale`, `/locations/clayton-heights`, `/locations/south-surrey`, `/locations/langley-border`
- `/about`, `/contact`, `/roofing-guide`, `/privacy`

The homeowner guide covers repair/replacement decisions, quote comparison, assessment preparation, and handover questions. About explains the working process without inventing a company history. Contact and Privacy describe the actual inquiry flow.

## Inquiry behavior

The site currently uses `mailto:` addressed to `info@fx-media.no`, from `src/lib/site.ts`. It does not submit to a website database, send mail from a server, book appointments, or persist a CRM lead.

- Service pages preselect the appropriate service.
- Contact fields survive Back/Continue and a changed service selection.
- Native required-field and email validation remain enabled.
- The button says **Open email draft**, and the page explicitly says the request has not been sent.
- The draft includes the selected service, area when present, entered contact/property details, source page, and current URL's bounded UTM labels when present.
- The manual copy fallback preserves the request if no email handler opens; copying has a success state and a manual-selection fallback.
- No form payload, email address, or phone number is emitted to an analytics service.
- No advertising pixel, session recorder, or analytics vendor is installed. No conversion event is claimed when only an email draft opens.

## Technical changes

- Metadata factory includes coherent Open Graph/Twitter information and the production image.
- Added branded icon, skip-to-content link, focusable main target, readable focus treatment, and reduced-motion support.
- Rebuilt footer links every service and location plus the guide, contact, and privacy notice.
- Removed unused global styles from retired designs; retained active form foundations.
- Added `nosniff`, referrer policy, and unused-device-permission restrictions; disabled the framework identification header.
- Preserved `/2`, `/2/*`, and `/service-areas` redirects.
- Updated the existing Vercel `www` domain redirect from 307 to 308, preserving the apex destination and URL path. HTTP already redirects to HTTPS with 308.
- Unknown routes return HTTP 404; no blanket home redirect.

Implementation checked against [Google's structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Google's AI-content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content), the installed Next.js documentation, and [Vercel's domain API](https://vercel.com/docs/rest-api/projects/update-a-project-domain).

## Verification

Run after each meaningful change:

```sh
npx tsc --noEmit
npm run lint
npm run build
npm run check:site
```

The current audit passes 15 pages and 687 internal links/anchors. Browser checks at 390px covered all pages for horizontal overflow and single H1s. Representative desktop/mobile screenshots covered service content, the guide, menus, and forms. Form tests covered preselection, Back/Continue retention, changed service, valid/invalid required fields, draft payload, and clipboard fallback. Test data was not emailed. No delivery or notification test was performed because no server delivery is configured.

These are functional and rendered-page checks, not a Lighthouse score, field Core Web Vitals measurement, legal-compliance certification, or proof of search rankings.

## Business activation checklist

1. Confirm the real roofing provider and approved inquiry email/phone; the repository originally describes a contractor website concept.
2. Supply genuine reviews/profile URLs, credentials, warranty terms, and actual project/team photos before adding those trust elements or richer local-business schema.
3. Confirm an active receiving CRM/client configuration and notification recipients before replacing email drafts with server submissions. Validate storage and notifications separately with an explicitly authorized test.
4. Confirm paid-ad destinations before changing campaign-linked headlines or offers.
5. Search Console ownership and URL inspection were verified on 7 September 2026. Four sampled older URLs are indexed; the sampled Clayton Heights, South Surrey, and homeowner-guide URLs are unknown to Google. See `docs/audit/2026-09-07/`. Verify discovery after the sitemap refresh; conversion delivery and field-performance measurement remain separate activation work.

The page and navigation implementation is reviewable without these facts. Operational lead delivery and verified trust cannot be completed by substituting invented business details.
