# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## GitHub Pages

The site at `https://glegguly.github.io/ignite-warmth-connect/` is published by
`.github/workflows/deploy-pages.yml` whenever changes reach `main`. In the GitHub
repository, open **Settings → Pages → Build and deployment** and select
**GitHub Actions** as the source. The next push will export the bilingual page,
bundle its photos and logo, and deploy it automatically. You can also start
the workflow manually from the **Actions** tab.

For a local static export, run `GITHUB_PAGES=true bun run build` and then
`python3 scripts/copy-pages-media.py`. The publishable files are in `dist/client`.
Normal Lovable builds continue to use the root URL and its existing media service.
