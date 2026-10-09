#!/usr/bin/env python3
"""Add a content fingerprint to the CSS / JS links of the site pages, e.g. style.css?v=3fa2c1d0.

GitHub Pages lets browsers reuse a cached file for 10 minutes: after an update a visitor could get
the new HTML with the old stylesheet. With the fingerprint, a changed file has a new URL, so the
browser downloads it together with the page. Run it before every commit:

    python3 tools/cache_bust.py
"""
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "publications/index.html", "research/index.html", "news/index.html",
         "team/index.html", "positions/index.html"]
REF = re.compile(r'((?:href|src)=")((?:\.\./)?)((?:assets/css|assets/js|data)/[\w.-]+\.(?:css|js))(?:\?v=[0-9a-f]+)?(")')


def fingerprint(path):
    return hashlib.md5((ROOT / path).read_bytes()).hexdigest()[:8]


changed = 0
for page in PAGES:
    p = ROOT / page
    s = p.read_text()
    t = REF.sub(lambda m: f"{m.group(1)}{m.group(2)}{m.group(3)}?v={fingerprint(m.group(3))}{m.group(4)}", s)
    if t != s:
        p.write_text(t)
        changed += 1
print(f"{changed} page(s) updated")
