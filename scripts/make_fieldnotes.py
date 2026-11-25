# Generates src/data/fieldnotes-wp.json (Fieldnotes cards and feedback) and
# src/data/about.json (About page text) from the WordPress export and Report 4.
# Every sentence is copied exactly; this script only selects.
# Usage: python3 -I scripts/make_fieldnotes.py <wordpress.xml> <report4.md> <outdir>
import html, json, re, sys
xml, rep_path, outdir = sys.argv[1:4]
x = open(xml, encoding='utf-8').read()
post = next(c for c in re.findall(r'<content:encoded><!\[CDATA\[(.*?)\]\]></content:encoded>', x, re.S)
            if 'How I make sense of it all' in c)
t = re.sub(r'<script.*?</script>', '', post, flags=re.S)
t = re.sub(r'<style.*?</style>', '', t, flags=re.S)
t = re.sub(r'<(br|/p|/h\d|/li|/div|/summary|/span)[^>]*>', '\n', t)
t = html.unescape(re.sub(r'<[^>]+>', '', t))
wp = [l.strip() for l in t.split('\n') if l.strip()]

i = wp.index("What I'm loving so far!")
cards = [{'title': wp[i + 1 + 2 * k], 'text': wp[i + 2 + 2 * k]} for k in range(4)]
j = wp.index('Emerging feedback')
feedback = [l for l in wp[j + 1:j + 4] if l.startswith('“')]
feedback = [q for q in feedback if 'lalalal' not in q]   # WordPress placeholder: never publish
assert [c['title'] for c in cards] == ['Pause & Reflect', 'Connection', 'Research Shift', 'Redefining Home']
assert len(feedback) == 2
json.dump({'lovingHeading': wp[i], 'cards': cards, 'feedbackHeading': wp[j], 'feedback': feedback},
          open(f'{outdir}/fieldnotes-wp.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

rep = open(rep_path, encoding='utf-8').read().split('\n')
def paras(title):
    s = next(k for k, l in enumerate(rep) if re.match(r'^#+ ' + re.escape(title) + r'\s*$', l))
    out = []
    for l in rep[s + 1:]:
        if l.startswith('#'): break
        if l.strip() and not l.startswith(('|', '- ', '**')): out.append(l.strip())
    return out
intro = paras('1. Introduction')
impact_i = next(k for k, l in enumerate(rep) if l.strip() == '**Envisaged impact**')
impact = [l.strip() for l in rep[impact_i + 1:impact_i + 8] if l.strip() and not l.startswith('#')]
about = {
  'wpIntro': wp[1], 'wpQuestion': wp[2], 'wpFollow': wp[3],
  'reportIntro': intro[0],
  'origin': paras('Project background')[1],
  'impact': impact[0],
  'registers': paras('4.8 What this project is for')[0],
}
assert about['wpIntro'].startswith('As a Doctor') and about['reportIntro'].startswith('I am a Doctor')
assert about['impact'].startswith('The project aims') and about['registers'].startswith('This project produces')
json.dump(about, open(f'{outdir}/about.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
