#!/usr/bin/env python3
"""Build the web logos from the master image imgs/cv_lab.jpg.

    python3 tools/build_logo.py

Writes (white background removed -> transparent PNG, trimmed):
  assets/img/logo-mark.png  – the CV symbol only      (navbar)
  assets/img/logo-full.png  – symbol + LAB + name     (footer / large uses)
  assets/img/favicon.png    – square symbol           (browser tab)
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "imgs" / "cv_lab.jpg"
OUT = ROOT / "assets" / "img"
MARK_ROWS = 0.55     # the symbol occupies the top ~55% of the master image


def to_rgba(img):
    """Remove only the *outer* white background (flood-fill from the corners), with
    soft anti-aliased edges. White areas inside the symbol stay opaque, so the logo
    also looks right on dark backgrounds."""
    rgb = img.convert("RGB")
    marked = rgb.copy()
    for corner in ((0, 0), (rgb.width - 1, 0), (0, rgb.height - 1), (rgb.width - 1, rgb.height - 1)):
        ImageDraw.floodfill(marked, corner, (255, 0, 255), thresh=40)
    m = np.asarray(marked).astype(int)
    outer = (m[..., 0] == 255) & (m[..., 1] == 0) & (m[..., 2] == 255)
    # pixels within 3 px of the outer background carry the anti-aliased edge
    grown = np.asarray(Image.fromarray((outer * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(7))) > 0

    c = np.asarray(rgb).astype(float)
    a = 1.0 - c.min(axis=2) / 255.0                      # colour un-mixing against white
    safe = np.maximum(a, 1e-3)[..., None]
    fg = np.clip((c - 255.0 * (1.0 - a)[..., None]) / safe, 0, 255)
    soft = np.clip((a - 0.03) / 0.97, 0, 1)
    alpha = np.where(outer, 0.0, np.where(grown, soft, 1.0))
    fg = np.where(grown[..., None] & ~outer[..., None], fg, c)
    out = np.dstack([fg, alpha * 255]).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def trim(im, pad=0.02):
    box = im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    im = im.crop(box)
    p = round(max(im.size) * pad)
    canvas = Image.new("RGBA", (im.width + 2 * p, im.height + 2 * p), (0, 0, 0, 0))
    canvas.paste(im, (p, p))
    return canvas


def main():
    master = to_rgba(Image.open(SRC))
    w, h = master.size

    full = trim(master)
    full = full.resize((900, round(full.height * 900 / full.width)), Image.LANCZOS)
    full.save(OUT / "logo-full.png", optimize=True)

    mark = trim(master.crop((0, 0, w, round(h * MARK_ROWS))))
    mark = mark.resize((round(mark.width * 360 / mark.height), 360), Image.LANCZOS)
    mark.save(OUT / "logo-mark.png", optimize=True)

    # favicon: symbol on a white rounded square (stays readable in dark browser themes)
    size = 256
    icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    r = 52  # rounded corners (drawn by hand: old Pillow has no rounded_rectangle)
    d = ImageDraw.Draw(icon)
    d.rectangle((r, 0, size - 1 - r, size - 1), fill=(255, 255, 255, 255))
    d.rectangle((0, r, size - 1, size - 1 - r), fill=(255, 255, 255, 255))
    for x, y in ((0, 0), (size - 2 * r, 0), (0, size - 2 * r), (size - 2 * r, size - 2 * r)):
        d.pieslice((x, y, x + 2 * r, y + 2 * r), 0, 360, fill=(255, 255, 255, 255))
    inner = mark.copy()
    inner.thumbnail((int(size * 0.84), int(size * 0.84)), Image.LANCZOS)
    icon.alpha_composite(inner, ((size - inner.width) // 2, (size - inner.height) // 2))
    icon.save(OUT / "favicon.png", optimize=True)

    for n in ("logo-mark", "logo-full", "favicon"):
        im = Image.open(OUT / f"{n}.png")
        print(f"{n}.png  {im.size[0]}x{im.size[1]}  {(OUT / f'{n}.png').stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
