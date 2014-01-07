/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    chai: {
      styles: 'assert',
      stack: true
    },
    proxies: {
      test: 'addTest'
    },
    plugins: [
      'hydro-chai',
    ],
    suite: 'hydro-clean-stacks',
    formatter: 'hydro-simple',
    tests: [
      'test/*.js'
    ]
  });
};
