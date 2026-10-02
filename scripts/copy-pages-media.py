"""Bundle the site's existing Lovable-hosted media into a GitHub Pages export."""

import json
import subprocess
from pathlib import Path


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
    subprocess.run(
        ["curl", "--fail", "--location", "--silent", "--show-error", "--retry", "3", "--output", str(target), origin + path],
        check=True,
    )
    if target.stat().st_size != asset["size"]:
        raise ValueError(f"Incomplete media download: {pointer.name}")
    print(f"Included {pointer.name}")

if not (output / "index.html").is_file():
    raise FileNotFoundError("The site's home page was not exported")