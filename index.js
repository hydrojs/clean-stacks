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

  var defaults = ['node_modules/hydro', 'node_modules/chai'];
  var ignore = (hydro.get('cleanStacks') || {}).ignore || defaults;

  hydro.on('post:test', function(test) {
    if (test.status !== 'failed') return;
    if (!test.error.stack) return;

    test.error.origStack = test.error.stack;

    var stack = test.error.stack.split('\n').filter(function(line) {
      return ignore.filter(function(pattern) {
        return line.indexOf(pattern) !== -1;
      }).length == 0;
    });

    test.error.stack = stack.join('\n');
  });
};
