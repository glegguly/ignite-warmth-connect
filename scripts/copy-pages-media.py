"""Bundle the site's existing Lovable-hosted media into a GitHub Pages export."""

import json
from pathlib import Path
from urllib.request import urlopen


root = Path(__file__).resolve().parents[1]
output = root / "dist" / "client"
origin = "https://ignite-warmth-connect.lovable.app"

for pointer in sorted((root / "src" / "assets").glob("*.asset.json")):
    asset = json.loads(pointer.read_text())
    path = asset["url"]
    if not path.startswith("/__l5e/assets-v1/") or ".." in path:
        raise ValueError(f"Unexpected media path in {pointer.name}")

    target = output / path.lstrip("/")
    target.parent.mkdir(parents=True, exist_ok=True)
    with urlopen(origin + path, timeout=30) as response:
        if not response.headers.get("Content-Type", "").startswith("image/"):
            raise ValueError(f"Not an image: {pointer.name}")
        content = response.read()
    if len(content) != asset["size"]:
        raise ValueError(f"Incomplete media download: {pointer.name}")
    target.write_bytes(content)
    print(f"Included {pointer.name}")

if not (output / "index.html").is_file():
    raise FileNotFoundError("The site's home page was not exported")