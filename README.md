[![NPM
version](https://badge.fury.io/js/hydro-clean-stacks.png)](http://badge.fury.io/js/hydro-clean-stacks)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-clean-stacks.png)](http://travis-ci.org/hydrojs/hydro-clean-stacks)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-clean-stacks/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-clean-stacks?branch=master)

# hydro-clean-stacks

## Synopsis

Remove hydro & chai.js entires from error stacks

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-clean-stacks'],
});
```

Before:

```js
Error: test
    at Object.<anonymous> (/Users/vesln/Code/hydro-clean-stacks/test/fixtures/1.js:2:9)
    at SyncTest.exec (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/test/sync.js:32:13)
    at /Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/test/base.js:105:10
    at EventEmitter.emit (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/node_modules/evts/lib/evts.js:46:26)
    at Base.run (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/test/base.js:101:11)
    at next (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/suite/index.js:58:52)
    at EventEmitter.emit (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/node_modules/evts/lib/evts.js:46:26)
    at Suite.run (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/suite/index.js:62:11)
    at next (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/lib/hydro/suite/index.js:58:52)
    at EventEmitter.emit (/Users/vesln/Code/hydro-clean-stacks/node_modules/hydro/node_modules/evts/lib/evts.js:46:26)
```

After:

```js
Error: test
    at Object.<anonymous> (/Users/vesln/Code/hydro-clean-stacks/test/fixtures/1.js:2:9)
```

### Disable clean stacks

```js
hydro.set({
  plugins: ['hydro-clean-stacks'],
  cleanStacks: false,
});
```

### Add a custom list with patterns to ignore

```js
hydro.set({
  plugins: ['hydro-clean-stacks'],
  ignore: ['node_modules/simple-assert']
});
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
