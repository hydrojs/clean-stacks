var Hydro = require('hydro');

test('clean stacks', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    suite: 'clean-stacks',
    cleanStacks: true
  });

  hydro.setup();

  hydro.addTest('fail', function() {
    assert(false);
  });

  hydro.on('post:all', function() {
    var test = hydro.tests()[0];
    test.error.stack.split('\n').forEach(function(line) {
      assert(!/node_modules\/hydro\//.test(line));
      assert(!/node_modules\/chai\//.test(line));
    });
    done();
  });

  hydro.run();
});
