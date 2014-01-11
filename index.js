/**
 * Remove given entries from the error stacks.
 *
 * By default it will remove lines that has the following strings in it:
 *
 * - node_modules/hydro
 * - node_modules/chai
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var conf = hydro.get('cleanStacks');

  if (conf === false) {
    return;
  }

  var defaults = ['node_modules/chai'];
  var ignore = (hydro.get('cleanStacks') || {}).ignore || defaults;

  hydro.on('post:test', function(test) {
    if (test.status !== 'failed') return;
    var error = test.error;
    if (!error.stack) return;

    error.origStack = error.stack;
    var stack = error.stack.split('\n')
    var noise = error.noise.split('\n').slice(2)
    // have to go line by line in case the errors stack
    // is being limited to a small number of frames
    var clean = stack.filter(function(line) {
      return noise.indexOf(line) < 0;
    });

    // remove test.exec() frame
    if (clean.length < stack.length) clean.pop();

    if (ignore) clean = clean.filter(function(line) {
      return ignore.filter(function(pattern) {
        return line.indexOf(pattern) !== -1;
      }).length == 0;
    });

    error.stack = clean.join('\n');
  });
};
