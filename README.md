# Stacks UI

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bold-commerce/stacks-ui/blob/main/LICENSE.md) [![npm version](https://img.shields.io/npm/v/@boldcommerce/stacks-ui.svg?style=flat)](https://www.npmjs.com/package/@boldcommerce/stacks-ui)

A bare-bones react component library for building platform independent storefront integrations for ecommerce stores.

## Installation

Install with NPM
```bash
$ npm install --save @boldcommerce/stacks-ui
```

Install with Yarn
```bash
$ yarn add @boldcommerce/stacks-ui
```

## Webpack and Style-Loader
Each component has it's own CSS file rather than packaging all of the CSS into a single file to be included in your project. This means you'll need to install the [style-loader][wsl] plugin for Webpack.


## Styleguide & Documentation
Stacks comes with interactive documentation and playground using [react styleguidist][rsg].

To access the docs: First, [clone the repo][gh].

Next install the package dependencies:
```bash
$ yarn install
```

Finally, spin up styleguidist
```bash
$ yarn docs
```

## Tests

Running the tests
```bash
$ yarn test
```

Updating the snapshot the tests
```bash
$ yarn test -u
```


[wsl]: https://github.com/webpack-contrib/style-loader
[rsg]: https://github.com/styleguidist/react-styleguidist
[gh]: https://github.com/boldcommerce/stacks-ui
