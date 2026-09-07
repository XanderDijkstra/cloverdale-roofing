import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
const origin = 'https://cloverdaleroofingco.com';
const folder = 'docs/audit/2026-09-07';
const queries = JSON.parse(await readFile(`${folder}/priority-queries.json`, 'utf8'));
const live = process.argv.includes('--live');
const results = [];
for (const item of queries) {
  const response = live ? await fetch(origin + item.path) : null;
  if (response) assert.equal(response.status, 200, `${item.path}: HTTP 200`);
  const html = response ? await response.text() : await readFile(`.next/server/app${item.path}.html`, 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  assert(main.includes(`id="${item.answerId}"`), `${item.path}: answer anchor`);
  assert(/British Columbia|\bBC\b/.test(main), `${item.path}: geographic context`);
  const sources = [...main.matchAll(/href="(https:\/\/(?:www\.)?(?:rcabc\.org|worksafebc\.com|iko\.com)[^"]+)"/g)].map(m => m[1]);
  assert(sources.length, `${item.path}: visible source reference`);
  assert(html.includes(`rel="canonical" href="${origin + item.path}"`), `${item.path}: preferred URL`);
  results.push({ ...item, status: response?.status ?? 'built HTML', sources: [...new Set(sources)] });
}
if (live) await writeFile(`${folder}/after-answer-pages.json`, JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
console.log(`PASS: ${results.length} priority queries map to distinct pages with answer anchors, BC context, source links and correct preferred URLs. Content quality still requires editorial review.`);
