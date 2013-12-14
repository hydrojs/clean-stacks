[![NPM
version](https://badge.fury.io/js/hydro-clean-stacks.png)](http://badge.fury.io/js/hydro-clean-stacks)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-clean-stacks.png)](http://travis-ci.org/hydrojs/hydro-clean-stacks)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-clean-stacks/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-clean-stacks?branch=master)

# hydro-clean-stacks

## Synopsis

Remove hydro entires from error stacks

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-clean-stacks'],
  'clean-stacks': true
});
```

CLI:

```bash
$ hydro --clean-stacks
```

## Installation

#### npm:

```bash
npm install hydro-clean-stacks
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run coverage
```

## License

The MIT License (see LICENSE)
