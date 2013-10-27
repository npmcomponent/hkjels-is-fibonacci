
/**
 * Test dependencies.
 */

var isFibonacci = require('is-fibonacci')
  , assert = require('assert');


describe('isFibonacci(n)', function() {

  it ('is within the Fibonacci-sequence', function(done) {
    assert(isFibonacci(1));
    assert(isFibonacci(2));
    assert(isFibonacci(3));
    assert(isFibonacci(5));
    assert(isFibonacci(8));
    assert(isFibonacci(13));
    assert(isFibonacci(21));
    done();
  });

  it ('is NOT within the Fibonacci-sequence', function(done) {
    assert(!isFibonacci(4))
    assert(!isFibonacci(7))
    assert(!isFibonacci(9))
    assert(!isFibonacci(10))
    assert(!isFibonacci(11))
    assert(!isFibonacci(12))
    assert(!isFibonacci(14))
    done();
  });

});

