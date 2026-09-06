# Cloverdale Roofing Co.

Next.js 16 / React 19 / TypeScript contractor website, deployed to Vercel from `main`.
Production: https://cloverdaleroofingco.com

The site has 15 public pages: homepage, service and location directories, four services,
four locations, About, Contact, a homeowner guide, and a privacy notice.

## Develop and verify

```sh
npm install
npm run dev
npx tsc --noEmit
npm run lint
npm run build
npm run check:site
```

`check:site` audits the built HTML and sitemap for metadata, canonicals, internal links,
anchors, image alt text, structured data, and the complete public page inventory.

## Content

- Company configuration and services: `src/lib/site.ts`
- Detailed service content: `src/lib/service-content.ts`
- Service areas: `src/app/site-data.ts`
- Detailed location content: `src/app/locations/location-content.ts`
- Design: `src/app/homepage2.module.css` and component CSS modules

## Operational status

The original build was a roofing contractor concept. The current form prepares an email
for `info@fx-media.no`; it does not store a CRM lead, send mail from the website, or book
an appointment. Real provider identity, contact details, reviews, credentials, and project
photos still need confirmation. Do not invent these or present illustrative images as
completed work.

See [the implementation review](docs/IMPLEMENTATION.md) for the X-reference mapping,
implemented practices, verification, and remaining business activation requirements.
