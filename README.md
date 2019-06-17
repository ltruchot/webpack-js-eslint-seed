# Webpack Javascript ESLint Seed

## An empty project to begin JS coding

Last updated: Juny 2019

A clean webpack javascript eslint seed, with JavaScript Airbnb rules.

```
npm install
```

at your first use, then

```
npm start
```

to develop your application

```
npm run build
```

to bundle your application, then, deliver your `dist` folder: it contains anything needed

## index.html

Webpack bundle every JavaScript from `./src` and `./node_modules` in your final dist a main.js file, and load it automatically.

Nevertheless, you can change what you want in its template `./public/index.html`, if you need a CDN link for example.

## Assets

Put your static folders/files in `./public`. Webpack will raw-copy them in your final dist, never breaking your relative links.

Example: if an image is in `./public/assets/images/logo.png` reference it as `<img src="assets/images/logo.png">` in your codebase.
