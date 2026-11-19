#!/usr/bin/env python3
"""Replace public website portraits with smaller, metadata-free copies.

Run only on Jekyll's built _site output, never on the private source images.
Filenames and file formats are retained so generated HTML links keep working.
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_SIZE = (512, 512)
IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg"}


def process_image(path: Path) -> tuple[int, int]:
    before = path.stat().st_size
    with Image.open(path) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)

        # Do not carry through EXIF, ICC, GPS, text chunks, or other metadata.
        temp = path.with_name(f".{path.stem}.public{path.suffix}")
        if path.suffix.lower() in {".jpg", ".jpeg"}:
            if image.mode != "RGB":
                if "A" in image.getbands():
                    backdrop = Image.new("RGB", image.size, "white")
                    backdrop.paste(image, mask=image.getchannel("A"))
                    image = backdrop
                else:
                    image = image.convert("RGB")
            image.save(temp, format="JPEG", quality=84, optimize=True, progressive=True)
        else:
            if image.mode not in {"RGB", "RGBA", "L", "LA", "P"}:
                image = image.convert("RGBA")
            image.save(temp, format="PNG", optimize=True, compress_level=9)
        temp.replace(path)
    return before, path.stat().st_size


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: optimize_published_photos.py <built_site_images_members_dir>", file=sys.stderr)
        return 2

    directory = Path(sys.argv[1])
    if not directory.is_dir():
        print(f"Expected built member photos directory: {directory}", file=sys.stderr)
        return 1

    images = sorted(p for p in directory.rglob("*") if p.is_file() and p.suffix.lower() in IMAGE_SUFFIXES)
    if not images:
        print(f"No member photos found under {directory}", file=sys.stderr)
        return 1

    before = after = 0
    for path in images:
        a, b = process_image(path)
        before += a
        after += b
        print(f"{path.name}: {a:,} -> {b:,} bytes")
    print(f"Processed {len(images)} photos; total {before:,} -> {after:,} bytes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
