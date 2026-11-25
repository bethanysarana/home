// Markdown conventions for fieldnotes (see src/content/fieldnotes/format-example.md),
// applied to the rendered HTML of a fieldnote only:
// - An image alone on its line with a title, ![alt](/fieldnotes/x.jpg "Caption"),
//   becomes a captioned figure.
// - A paragraph starting with ✎ becomes a handwritten note.
// - Image paths starting with / get the site base (e.g. /home/ on GitHub Pages).
export function fieldnoteHtml(html: string, base: string): string {
  const prefix = base.replace(/\/$/, '');
  return html
    .replace(/(<img[^>]*\ssrc=")\/(?!\/)/g, `$1${prefix}/`)
    .replace(/<p>\s*(<img[^>]*?)\stitle="([^"]*)"([^>]*>)\s*<\/p>/g,
      (_m, a, caption, b) => `<figure class="fn-figure">${a}${b.replace(/>$/, ' loading="lazy">')}<figcaption>${caption}</figcaption></figure>`)
    .replace(/<p>✎\s*/g, '<p class="fn-note">');
}
