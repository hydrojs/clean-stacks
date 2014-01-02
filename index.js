/**
 * Remove node_modules/hydro/ entries from the
 * error stacks.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  if (hydro.get('cleanStacks') === false) return;

  hydro.on('post:test', function(test) {
    if (test.status !== 'failed') return;
    if (!test.error.stack) return;
    var stack = test.error.stack.split('\n').filter(function(line) {
      return line.indexOf('node_modules/hydro') === -1;
    });
    test.error.stack = stack.join('\n');
  });
};
