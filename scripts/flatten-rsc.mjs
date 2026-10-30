// Next 16 static export writes RSC segment files nested (out/kontakt/__next.kontakt/__PAGE__.txt)
// while the client router prefetches them flat (/kontakt/__next.kontakt.__PAGE__.txt).
// Vercel resolves that itself; on Cloudflare static assets the flat name 404s. Copy each nested
// segment file to its flat dotted name so client-side navigation finds it.
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join, sep } from "node:path";

const root = "out";
let n = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".txt")) {
      const parts = p.split(sep);
      const i = parts.findIndex((s, k) => k < parts.length - 1 && s.startsWith("__next."));
      if (i === -1) continue;
      copyFileSync(p, join(...parts.slice(0, i), parts.slice(i).join(".")));
      n++;
    }
  }
}
walk(root);
console.log(`flatten-rsc: ${n} segment files copied`);
