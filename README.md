# `@dex/brand`

Reusable DEX design system assets distributed from a public GitHub repository as a Git dependency.

## What is included

- `@dex/brand/tokens.css` -> shared CSS custom properties and utility classes
- `@dex/brand/filament.css` -> Filament admin theme bridge based on DEX brand tokens
- `@dex/brand/tailwind` -> shared Tailwind preset (`src/tailwind.ts`)

## Install from GitHub

Install in a consumer project with npm:

```bash
npm i github:watertalent-web/dex-brand-system#v1.0.1
```

Or add the dependency manually in `package.json`:

```json
{
  "dependencies": {
    "@dex/brand": "github:watertalent-web/dex-brand-system#v1.0.1"
  }
}
```

If you use another package manager:

```bash
pnpm add github:watertalent-web/dex-brand-system#v1.0.1
yarn add github:watertalent-web/dex-brand-system#v1.0.1
```

## Usage in Nuxt + Tailwind

### 1) Import CSS tokens

In your global stylesheet (for example `assets/css/main.css`):

```css
@import "@dex/brand/tokens.css";
```

`tokens.css` automatically loads the required Google Fonts (`Barlow Condensed` and `Space Grotesk`), so no separate font import is required.

### 2) Use the Tailwind preset

In `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import dexPreset from "@dex/brand/tailwind";

export default {
  presets: [dexPreset],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
} satisfies Config;
```

## Usage in Laravel Filament

Import the Filament bridge stylesheet in your panel theme file:

```css
@import "@dex/brand/tokens.css";
@import "@dex/brand/filament.css";
```

Then register that theme in your panel provider as usual (for example via `->viteTheme()`).
The exported `filament.css` file maps DEX tokens to Filament's expected color and font variables, so the admin UI picks up the package styles out of the box.

## Usage in plain CSS projects

Import the token file once in your main CSS entry:

```css
@import "@dex/brand/tokens.css";
```

Then consume variables directly:

```css
.card {
  background: var(--dex-surface);
  color: var(--dex-text);
  border: 1px solid var(--dex-border);
}
```

## Versioning and updates

- This repository uses SemVer tags (`v1.0.0`, `v1.1.0`, ...)
- Consumers update explicitly by changing the git tag in `package.json`
- Keep release notes in `CHANGELOG.md` for token and preset updates

## Access and CI

- Public repository access is enough for local development and CI installs
- Keep dependencies pinned to SemVer tags to avoid unexpected changes
- If you use GitHub API-heavy workflows, configure a low-scope token only when needed
