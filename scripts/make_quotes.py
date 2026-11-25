# Generates src/data/home-quotes.json: the homepage quote carousel.
# Quotes and names are copied exactly from Report 4 (§3 blockquotes); this script only selects.
# Usage: python3 -I scripts/make_quotes.py <report4.md> <out.json>
import json, re, sys
rep = open(sys.argv[1], encoding='utf-8').read().split('\n')
# (start of quote, participant id, story it links to) in carousel order.
# Four removed by Bethany (26 Nov 2026), replacements pending from her:
# Eduardo 'The home that I call home', Michel 'Language… is home', Miri 'I can rebirth myself', Bella 'your time is limited'.
PICKS = [
 ('“Home is a feeling that you carry with you.”', 'karolina', 'home-isnt-a-place'),
 ('“Home... is very much an emotion', 'sammy', 'home-isnt-a-place'),
 ('“Maybe that\'s the reason why I don\'t have a towel', 'eduardo', 'when-home-is-lost'),
 ('“I would never be like, oh, the mountain in Japan', 'ellie', 'more-than-one-home'),
 ('“I think it can\'t be found', 'theo', 'no-single-answer'),
 ('“I\'m not coming back in a house', 'guilia', 'home-isnt-a-place'),
]
out = []
for start, pid, story in PICKS:
    line = next(l for l in rep if l.startswith('> *' + start))
    m = re.match(r'^> \*(“.*?”) — ([^,*]+)', line)
    text, name = m.group(1), m.group(2).strip()
    assert name.lower() == pid, (name, pid)
    out.append({'text': text, 'name': name, 'participant': pid, 'story': story})
json.dump(out, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
