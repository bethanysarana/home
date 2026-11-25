# Generates src/data/research.json for The Research page.
# Every sentence is copied exactly from its source; this script only selects.
# Sources: WordPress export (post 90) and Report 4 (not in this repo).
# Usage: python3 -I scripts/make_research.py <wordpress.xml> <report4.md> <out.json>
import html, json, re, sys
xml, rep_path, out = sys.argv[1:4]

x = open(xml, encoding='utf-8').read()
post = next(c for c in re.findall(r'<content:encoded><!\[CDATA\[(.*?)\]\]></content:encoded>', x, re.S)
            if 'How I make sense of it all' in c)
t = re.sub(r'<script.*?</script>', '', post, flags=re.S)
t = re.sub(r'<style.*?</style>', '', t, flags=re.S)
t = re.sub(r'<(br|/p|/h\d|/li|/div|/summary|/span)[^>]*>', '\n', t)
t = html.unescape(re.sub(r'<[^>]+>', '', t))
wp = [l.strip() for l in t.split('\n') if l.strip()]

def after(marker, n):
    i = wp.index(marker)
    return wp[i + 1:i + 1 + n]

def between(start, end):
    i = wp.index(start); j = wp.index(end, i)
    return wp[i + 1:j]

steps = json.loads('{' + re.search(r'var stepData = \{(.*?)\};', post, re.S).group(1) + '}')
step_out = []
for k in sorted(steps, key=int):
    m = re.match(r'<strong>(.*?)</strong><br>(.*)$', steps[k], re.S)
    step_out.append({'n': int(k), 'title': html.unescape(m.group(1)), 'text': html.unescape(m.group(2))})
pos = re.findall(r'class="process-pulse-btn" data-step="(\d)"[^>]*style="top: ([\d.]+)%; left: ([\d.]+)%;"', post)
for n, top, left in pos:
    step_out[int(n) - 1].update(top=float(top), left=float(left))

rep = open(rep_path, encoding='utf-8').read().split('\n')
def section(title):
    s = next(i for i, l in enumerate(rep) if re.match(r'^#+ ' + re.escape(title) + r'\s*$', l))
    lines = []
    for l in rep[s + 1:]:
        if l.startswith('#'): break
        lines.append(l)
    return lines
def paras(title):
    return [re.sub(r'^\*(.*)\*$', r'\1', l.strip()) for l in section(title)
            if l.strip() and not l.startswith('|') and not l.startswith('- ') and not l.startswith('**')]

analysis = section('Data analysis')
table = [[c.strip().strip('*') for c in l.strip().strip('|').split('|')] for l in analysis if l.startswith('|')]
table = [r for r in table if not set(''.join(r)) <= set('-: ')]
limits = paras('4.7 Strengths, limitations, and what a visual gallery is actually made of')

data = {
  'background': paras('Project background'),
  'objectives': [l[2:].strip() for l in section('Objectives') if l.startswith('- ')],
  'groups': {
    'phase1': 'Phase 1: In progress',
    'travellers': after('Travellers', 3),
    'phase2': 'Phase 2: Upcoming comparative enquiry',
    'locals': after('Locals', 4),
    'between': after('People in between', 3),
    'note': next(l for l in wp if l.startswith('Every conversation so far has been with a traveller')),
  },
  'demographicsHeading': next(l for l in wp if l.startswith('Demographics from all')),
  'conversation': {
    'intro': between('How a conversation works', 'Some questions I keep coming back to:'),
    'questionsLead': 'Some questions I keep coming back to:',
    'questions': [{'label': a, 'text': b} for a, b in zip(*[iter(between('Some questions I keep coming back to:', 'How I make sense of it all'))] * 2)],
    'participation': paras('Participation'),
    'interviews': paras('Interviews'),
  },
  'process': {
    'intro': wp[wp.index(next(l for l in wp if l.startswith('There is a method'))):][:3],
    'steps': step_out,
  },
  'analysis': {
    'paragraphs': paras('Data analysis'),
    'table': {'head': table[0], 'rows': table[1:]},
  },
  'position': paras('4.4 The researcher, the setting, and a planned test of both'),
  'limitations': {
    'noteOnMe': between('A note on me', "A note on who I've spoken to (and who I haven't yet)"),
    'report': {'proximity': limits[2], 'sample': limits[3], 'coverage': limits[4],
               'quotes': limits[5], 'gallery': limits[1]},
    'organising': between("How I'm starting to organise what I'm hearing", 'Where will this go?'),
  },
}
# Past tense for the completed traveller conversations (Bethany, 26 Nov 2026).
# Report 4's "Interviews" text was written as a plan; only the verbs change.
TENSE = [
 ('It will use informal', 'It used informal'),
 ('Prospective participants will be invited', 'Prospective participants were invited'),
 ('which may take place over coffee', 'which took place over coffee'),
 ('Conversations will be immersive, and follow an', 'Conversations were immersive, and followed an'),
 ('structure that broadly encompasses the', 'structure that broadly encompassed the'),
 ('Conversation audio will be recorded with consent.', 'Conversation audio was recorded with consent.'),
 ('Insights and reflections will be documented', 'Insights and reflections were documented'),
]
joined = '\n'.join(data['conversation']['interviews'])
for old, new in TENSE:
    assert old in joined, old
    joined = joined.replace(old, new)
data['conversation']['interviews'] = joined.split('\n')

for check in ['travellers', 'locals', 'between']: assert data['groups'][check], check
assert len(data['process']['intro']) == 3 and len(step_out) == 7 and all('top' in s for s in step_out)
json.dump(data, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
