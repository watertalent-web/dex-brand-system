# `@dex/brand`

DEX shared design system package for frontend apps and Laravel Filament admin panels.

## Exports

- `@dex/brand/tokens.css` - shared CSS variables and base styles
- `@dex/brand/tailwind` - shared Tailwind preset
- `@dex/brand/filament.css` - Filament theme bridge (maps DEX tokens to Filament variables)

## Install

```bash
npm i github:watertalent-web/dex-brand-system#v1.1.1
```

Alternative package managers:

```bash
pnpm add github:watertalent-web/dex-brand-system#v1.1.1
yarn add github:watertalent-web/dex-brand-system#v1.1.1
```

## Frontend Usage

Import tokens in your global stylesheet:

```css
@import "@dex/brand/tokens.css";
```

This works in any frontend stack, even without Tailwind.

Use the Tailwind preset in `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import dexPreset from "@dex/brand/tailwind";

export default {
  presets: [dexPreset],
  content: ["./components/**/*.{vue,js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
} satisfies Config;
```

## Laravel Filament Usage

In the Filament theme CSS file (the one used in `->viteTheme(...)`), add:

```css
@import "@dex/brand/tokens.css";
@import "@dex/brand/filament.css";
```

Then make sure the same CSS file is registered in your panel provider via `->viteTheme(...)`.

## Updating

Pin to a tag in your project `package.json`, for example:

```json
{
  "dependencies": {
    "@dex/brand": "github:watertalent-web/dex-brand-system#v1.1.1"
  }
}
```

When a newer package release is available, update the tag (for example from `v1.1.0` to `v1.1.1`) and reinstall dependencies.
