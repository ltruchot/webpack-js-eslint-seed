# DEPRECATED

New seed repository, with consistent name: https://github.com/ltruchot/webpack-seed-js-sass

# Webpack Seed evergreen for JavaScript and SASS

## This is an empty project to begin pure JavaScript + Sass front-end coding out of the box

NPM Last updated: Sept. 2019

Clean and classic webpack + eslint (airbnb rules) + babel + file loader scaffolding for real world ES6+ projects.

`npm install` at your first use, then

`npm start` to develop your application

`npm run build` to bundle your application. When it's done, deliver your `dist` folder: it contains anything needed.

## index.js and other JS sources in "src" folder

`./src/index.js` is the entry point for your ES6+ JavaScript. Scaffold your JS app sources in `./src` and import/export what you need.

_Example: if function `add` is exported in file `./src/helpers/example.js` import it as `import { add } from "./helpers/example"` in `index.js`._

## index.html and other HTML pages

Webpack bundle every JavaScript from `./src` and used `./node_modules` in your final dist a main.js file, and load it automatically.

Nevertheless, you can change what you want in its template `./public/index.html`, if you need a CDN link for example.

You can add any new static html page in `./public/pages` and they will share the same CSS and scripts than `index.html`

## Assets

Put your static folders/files in `./public`. Webpack will raw-copy them in your final dist, never breaking your relative links.

_Example: if an image is in `./public/assets/images/logo.png` reference it as `<img src="assets/images/logo.png">` in your codebase._

## Change ESLint in the way you want

`.eslintrc.js` follow Airbnb strict and helpful rules for deliver good quality/well formed code.

Those standards are overidden for few rules (windows project, 80 chars per line, etc). You can remove/change thoses rules or add new in this `.eslintrc.js`.

_Example change `'linebreak-style': ['error', 'windows']` to `'linebreak-style': ['error', 'unix']`_
