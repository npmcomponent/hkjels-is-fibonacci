
/**
 * Module dependencies.
 */

var isInteger = require('KenanY-isInteger')
  , sequence = require('hkjels-fibonacci')(20);

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

