# Webpack Javascript ESLint Seed

## An empty project to begin pure JavaScript front-end coding out of the box

NPM Last updated: June 2019

This is a clean webpack-javascript-eslint seed, with Babel for ES6+ and Airbnb for Lint rules.

`npm install` at your first use, then

`npm start` to develop your application

`npm run build` to bundle your application. When it's done, deliver your `dist` folder: it contains anything needed.

## index.js and other sources

`./src/index.js` is the entry point for your ES6+ JavaScript. Scaffold your JS app sources in `./src` and import/export what you need.

## index.html

Webpack bundle every JavaScript from `./src` and `./node_modules` in your final dist a main.js file, and load it automatically.

Nevertheless, you can change what you want in its template `./public/index.html`, if you need a CDN link for example.

## Assets

Put your static folders/files in `./public`. Webpack will raw-copy them in your final dist, never breaking your relative links.

_Example: if an image is in `./public/assets/images/logo.png` reference it as `<img src="assets/images/logo.png">` in your codebase._
