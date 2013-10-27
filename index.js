
/**
 * Module dependencies.
 */

var isInteger = require('isInteger');

/**
 * Fibonacci sequence.
 */

var sequence = (function (n) {
  return Array.apply(0, Array(n)).reduce(function(x, y, z) {
    return x.concat((z < 2) ? z : x[z-1] + x[z-2]);
  }, []);
})(20);

/**
 * Expose `isFibonacci`.
 */

module.exports = isFibonacci;

/**
 * Is Fibonacci
 *
 * Check if a number is within the Fibonacci sequence.
 *
 * @param {Integer} num
 * @return {Boolean}
 */

function isFibonacci(num) {
  return sequence.indexOf(num) != -1;
}

