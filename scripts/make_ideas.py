# Generates src/content/ideas/*.md from Report 2 (§3 headings and §4 Discussion).
# Every sentence is copied exactly from the report; this script only selects.
# Usage: python3 scripts/make_ideas.py <report2.md> <outdir>
import json, re, sys
rep = open(sys.argv[1]).read().split('\n')
outdir = sys.argv[2]

def heading(num):
    for l in rep:
        if l.startswith(f'## {num} '): return l[len(f'## {num} '):].strip()
    raise SystemExit(f'missing heading {num}')

def paras(num):
    """Paragraphs under '## num' up to the next heading."""
    start = next(i for i, l in enumerate(rep) if l.startswith(f'## {num} '))
    out = []
    for l in rep[start + 1:]:
        if l.startswith('#'): break
        if l.strip(): out.append(l.strip())
    return out

# (slug, title from SPEC §7, intro = Report 2 §3 heading, discussion paragraphs as (section, index),
#  stories, people named in those paragraphs, related ideas)
IDEAS = [
 ('feeling-relationship-activity', 'Home as feeling, relationship and activity', '3.1',
  [('4.2', 0), ('4.4', 0)], ['home-isnt-a-place'],
  ['sian', 'karolina', 'ellie', 'erika', 'emma', 'shila'], ['belonging-and-safety', 'movement-and-continuity']),
 ('belonging-and-safety', 'Belonging and safety', '3.2',
  [('4.3', 1)], ['its-never-the-room'], [], ['feeling-relationship-activity', 'loss-and-the-possibility-of-home']),
 ('finding-and-creating-home', 'Finding and creating home', '3.3',
  [], ['no-single-answer'], [], ['feeling-relationship-activity', 'reinvention-and-identity']),
 ('movement-and-continuity', 'Movement and continuity', '3.5',
  [('4.2', 1), ('4.3', 0)], ['more-than-one-home'], ['michel', 'eduardo'],
  ['loss-and-the-possibility-of-home', 'feeling-relationship-activity']),
 ('loss-and-the-possibility-of-home', 'Loss and the possibility of home', '3.4',
  [('4.5', 0)], ['when-home-is-lost', 'hard-talks-often'], [],
  ['movement-and-continuity', 'reinvention-and-identity']),
 ('language-and-meaning', 'Language and meaning', '3.7',
  [('4.4', 1)], ['language-remembers'], [], ['feeling-relationship-activity', 'movement-and-continuity']),
 ('reinvention-and-identity', 'Reinvention and identity', '3.8',
  [], ['starting-over'], [], ['finding-and-creating-home', 'loss-and-the-possibility-of-home']),
]
for order, (slug, title, sec, refs, stories, people, related) in enumerate(IDEAS, 1):
    fm = {'order': order, 'title': title, 'intro': heading(sec), 'introSection': sec,
          'discussionSections': sorted({s for s, _ in refs}), 'stories': stories,
          'people': people, 'related': related}
    body = '\n\n'.join(paras(s)[i] for s, i in refs)
    with open(f'{outdir}/{slug}.md', 'w') as f:
        f.write('---\n' + '\n'.join(f'{k}: {json.dumps(v, ensure_ascii=False)}' for k, v in fm.items()) + '\n---\n\n' + body + '\n')

# Page opening and closing: §4.1 Summary and §4.8 Conclusion, whole.
with open(f'{outdir}/../../data/what-emerges-frame.json', 'w') as f:
    json.dump({'summary': paras('4.1'), 'conclusion': paras('4.8')}, f, ensure_ascii=False, indent=1)
