# Maybe Butter

The starting page for **Maybe Butter**, a calm virtual pet by **Dada Walrus Games**, published at https://tkellehe.github.io/maybe-butter/.

## Edit and preview

Edit `index.html` for content and `styles.css` for styling. Keep links relative so they work under `/maybe-butter/`. No dependencies or build step are required.

`assets/game-scene.svg` is a static export of the actual game artwork from the companion `dwg-butters` project. The page icons are exported from the game’s achievement icon set (`src/ui/icons.ts`). The studio logo and locally hosted Fredoka font also come from that project; the font license is included in `assets/FONT-LICENSE.txt`.

The first release is planned for itch.io. Add the real release link when available.

To preview locally, run `python3 -m http.server 8000`, then open http://localhost:8000.

## Publish

GitHub Pages publishes the root of `main`. Commit your changes and run `git push origin main`; GitHub deploys them automatically. `.nojekyll` keeps the site as plain static files.

## GitHub account

This checkout uses `tkellehe` as its commit identity. Its local Git credential helper reads `GH_TOKEN` from `.env`, overriding other Git credentials for this checkout. The helper lives in `.git` and is local to this machine.

`.env` is ignored by Git and must never be committed. `.env.example` shows the required variable without a credential. For GitHub CLI commands in this terminal, load it first:

```sh
set -a
source .env
set +a
gh api user --jq .login
```

The account should be `tkellehe`. New clones need their own credentials; the local helper is not included in the repository.
