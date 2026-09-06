import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".next/server/app");
const origin = "https://cloverdaleroofingco.com";
async function walk(folder) {
  const entries = await readdir(folder, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(path.join(folder, entry.name)) : path.join(folder, entry.name)))).flat();
}
const files = (await walk(root)).filter((file) => file.endsWith(".html") && !path.relative(root, file).startsWith("_"));
const pages = new Map();
for (const file of files) {
  const route = "/" + path.relative(root, file).replaceAll("\\", "/").replace(/\.html$/, "").replace(/^index$/, "");
  pages.set(route, await readFile(file, "utf8"));
}
const titles = new Set();
const descriptions = new Set();
let linksChecked = 0;
for (const [route, html] of pages) {
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${route}: exactly one H1`);
  assert.equal((html.match(/<title>/g) ?? []).length, 1, `${route}: exactly one title`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title && !titles.has(title), `${route}: unique title`);
  titles.add(title);
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(description && !descriptions.has(description), `${route}: unique description`);
  descriptions.add(description);
  const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  assert.equal(canonical.length, 1, `${route}: exactly one canonical`);
  assert.equal(canonical[0][1], origin + (route === "/" ? "" : route), `${route}: production canonical`);
  assert(html.includes('id="main-content"'), `${route}: skip link target`);
  assert(!/<meta name="robots"[^>]*noindex/.test(html), `${route}: indexable`);
  assert(html.includes('property="og:image"'), `${route}: share image`);
  for (const [, value] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(value);
  for (const [image] of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="[^"]*"/.test(image), `${route}: image alt`);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (!href.startsWith("/") && !href.startsWith("#") && !href.startsWith(origin)) continue;
    const target = new URL(href.replaceAll("&amp;", "&"), origin + route);
    assert(pages.has(target.pathname), `${route}: broken internal link ${href}`);
    if (target.hash) assert(pages.get(target.pathname).includes(`id="${target.hash.slice(1)}"`), `${route}: broken anchor ${href}`);
    linksChecked++;
  }
}
const sitemap = await readFile(path.join(root, "sitemap.xml.body"), "utf8");
const entries = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(entries.length, pages.size, "Sitemap and indexable pages have equal counts");
for (const route of pages.keys()) assert(entries.includes(origin + route), `Sitemap includes ${route}`);
const robots = await readFile(path.join(root, "robots.txt.body"), "utf8");
assert(robots.includes(`${origin}/sitemap.xml`), "Robots references production sitemap");
console.log(`PASS: ${pages.size} pages; ${linksChecked} internal links and anchors; unique metadata; canonical URLs; image alt text; JSON-LD; sitemap and robots.`);
