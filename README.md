# Webpack library starter

Originated from [here](https://github.com/krasimir/webpack-library-starter) and adapted for Webpack 4 + visual studio code.

Webpack based boilerplate for producing libraries (Input: ES6, Output: universal library)

## What's different in this fork

* Latest and greatest: Webpack 4, Latest Babel 6.
* ES6 Unit tests: [myclass].test.js files lay next to the origins. (see test:watch script)
* dev build have node_modules.js extracted and source maps - no rebuild of bundle with node_modules when user's code changed
* "build" script - generates 1) prod module 2) minified version

## TODO

* [ ] clean package.json dependencies
* [ ] make test build have separate node_modules.js, like dev build