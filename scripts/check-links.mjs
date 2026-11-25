// Checks every internal link and image in the built site (dist/) resolves.
// Usage: npm run build && node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const BASE = '/home/';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk('dist');
const broken = [];
let count = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    if (!url.startsWith(BASE)) continue;
    count++;
    const rel = decodeURIComponent(url.slice(BASE.length));
    const target = join('dist', rel);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) broken.push(`${f.replace('dist/', '')} → ${url}`);
  }
}
console.log(`${files.length} pages, ${count} internal links and images checked`);
if (broken.length) { console.log('BROKEN:\n' + broken.join('\n')); process.exit(1); }
console.log('No broken links.');
