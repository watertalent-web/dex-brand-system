# Changelog

All notable changes to this package are documented in this file.

## v1.1.3 - 2026-05-26

- Removed remaining hardcoded white surfaces from the Filament theme bridge (form labels, section heading, builder and repeater item wrappers no longer render as plain white on the dark brand surface)
- Themed Filament builder and repeater items end-to-end (item card surface, gradient header with uppercase brand heading, dark content area, branded action links)
- Themed common form components that previously fell back to white (rich text editor incl. TipTap/ProseMirror, markdown editor, CodeMirror code editor, color picker preview, modal windows, tags input chips, toggle/radio/checkbox option cards)
- Made generic Filament form layout containers (`fi-fo-component-ctn`, `fi-fo-section`, `fi-fo-fieldset`, `fi-fo-grid`, `fi-fo-group`) transparent so they no longer paint a white layer over the brand surface

## v1.1.2 - 2026-05-19

- Added dedicated styling for Filament simple auth pages (including login)
- Improved login card, headings, labels, and overall auth page contrast

## v1.1.1 - 2026-05-19

- Improved package metadata and README clarity for frontend and Filament usage
- Clarified that tokens can be used without Tailwind and how to update to newer tags

## v1.1.0 - 2026-05-19

- Added exported Filament admin theme bridge at `@dex/brand/filament.css`
- Documented Laravel Filament usage so admin styling works out of the box from the package

## v1.0.0 - 2026-05-18

- Initial private GitHub package structure for `@dex/brand`
- Added exported CSS tokens at `@dex/brand/tokens.css`
- Added exported Tailwind preset at `@dex/brand/tailwind`
- Added installation and usage documentation for Nuxt/Tailwind and plain CSS
