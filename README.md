# Gulp Starter

Simple Gulp 4 pipeline for SCSS and JS compilation with BrowserSync live reload.

## What's included

| Plugin | Job |
|---|---|
| `gulp-sass` + `sass` | Compile SCSS → CSS |
| `gulp-autoprefixer` | Add vendor prefixes |
| `gulp-clean-css` | Minify CSS |
| `gulp-babel` | Transpile modern JS (ES2015+) |
| `gulp-concat` | Bundle all JS files into one |
| `gulp-uglify` | Minify JS |
| `gulp-sourcemaps` | Generate `.map` files for debugging |
| `gulp-rename` | Add `.min` suffix to output files |
| `browser-sync` | Live reload dev server |
| `del` | Clean `dist/` before each build |

## Project structure

```
gulp-starter/
├── src/
│   ├── scss/
│   │   ├── main.scss            ← entry point (import partials here)
│   │   ├── abstracts/
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/
│   │   │   └── _button.scss
│   │   └── utilities/
│   │       └── _helpers.scss
│   └── js/
│       ├── main.js              ← entry point
│       └── utils.js
├── dist/                        ← compiled output (git-ignored)
│   ├── css/
│   │   ├── main.css
│   │   ├── main.min.css
│   │   └── main.min.css.map
│   └── js/
│       ├── bundle.js
│       ├── bundle.min.js
│       └── bundle.min.js.map
├── index.html
├── gulpfile.js
├── package.json
└── .babelrc
```

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server with live reload
npm run dev

# 3. Build for production
npm run build
```

## Output

- `/main.css` — expanded CSS (for debugging)
- `/main.min.css` — minified CSS + sourcemap
- `dist/js/bundle.js` — concatenated & transpiled JS
- `dist/js/bundle.min.js` — minified JS + sourcemap

## Adding new SCSS partials

1. Create `src/scss/<folder>/_name.scss`
2. Add `@use '<folder>/name';` in `src/scss/main.scss`

## Adding new JS modules

Just drop `.js` files into `src/js/` — they're automatically picked up and concatenated into `bundle.js`.
