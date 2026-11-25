import json, re, sys
wp = json.load(open(sys.argv[1]))
rep = open(sys.argv[2]).read().split('\n')
outdir = sys.argv[3]
slugs = {1:"home-isnt-a-place",2:"its-never-the-room",3:"no-single-answer",4:"when-home-is-lost",
         5:"more-than-one-home",6:"hard-talks-often",7:"language-remembers",8:"starting-over"}
# Evidence lines: Report 4 wording; 3.7's denominator set to 26 on Bethany's instruction (25 Nov 2026).
evidence = {
 1:"Word-category coding: 26 of 26 conversations.",
 2:"Negative-case coding: 17 of 26 conversations.",
 3:"Find/create coding: 19 of 26 conversations.",
 4:"A single, clean, and independently corroborated case, included for its conceptual weight rather than its prevalence.",
 5:"Childhood home structure coding: 20 of 26 conversations; roughly one in four coded participants departs from a single, stable childhood home.",
 6:"9 of 26 conversations read in depth carry a disclosed history of significant difficulty.",
 7:"Coded across 3 of 26 conversations read in depth.",
 8:"Coded across 3 of 26 conversations.",
}
# Paragraphs left out of the public page (see MIGRATION_NOTES.md):
omit = [  # emptied on Bethany's instruction, 26 Nov 2026: publish everything
]
_old_omit = [
 "The range of severity is wide",                      # 3.6: names participants alongside abuse histories
 "Sammy's account adds a sharper mechanism",           # 3.8: repeats the previous paragraph
]
heads = [i for i,l in enumerate(rep) if re.match(r'^## 3\.\d', l)]
end = next(i for i,l in enumerate(rep) if l.startswith('# 4.'))
bounds = heads + [end]
def y(s): return '"' + s.replace('\\','\\\\').replace('"','\\"') + '"'
for k in range(8):
    n = k + 1
    h = rep[heads[k]][3:].strip()
    num, title = h.split(' ', 1)
    body = rep[heads[k]+1:bounds[k+1]]
    body = [l for l in body if l.strip() != f"*{evidence[n].replace('3 of 26 conversations read','3 of 21 conversations read')}*" and not re.match(r'^\*(Word-category|Negative-case|Find/create|Childhood home structure) coding|^\*A single, clean|^\*9 of 26|^\*Coded across', l)]
    paras = '\n'.join(body).strip().split('\n\n')
    paras = [p for p in paras if not any(p.lstrip('> *').startswith(o) for o in omit)]
    f = [x for x in wp['findings'] if x['n']==n][0]
    fm = f"""---
order: {n}
label: {y(f['label'])}
headline: {y(f['headline'])}
summary: {y(f['text'])}
researchHeading: {y(title)}
reportSection: {y(num)}
evidence: {y(evidence[n])}
---

"""
    open(f"{outdir}/{slugs[n]}.md","w").write(fm + '\n\n'.join(paras) + '\n')
    print(n, slugs[n], len(paras), 'paragraphs')
