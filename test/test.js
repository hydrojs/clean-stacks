var Hydro = require('hydro');

test('clean stacks', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    suite: 'clean-stacks',
    'clean-stacks': true,
    proxies: { 'spec': 'addTest' },
    tests: [__dirname + '/fixtures/1.js']
  });

  hydro.on('post:all', function() {
    var test = hydro.tests()[0];
    test.error.stack.split('\n').forEach(function(line) {
      assert(!/node_modules\/hydro\//.test(line));
    });
    done();
  });

  hydro.run();
});
