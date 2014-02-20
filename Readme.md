*This repository is a mirror of the [component](http://component.io) module [hkjels/is-fibonacci](http://github.com/hkjels/is-fibonacci). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/hkjels-is-fibonacci`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# is-fibonacci

  Check if a number is in the Fibonacci sequence

## Gotchas

  Only the first twenty Fibonacci numbers are used. Feel free to replace
  the algorithm as long as it is fast and synchronous.

## Installation

  Install with [component(1)](http://component.io):

    $ component install hkjels/is-fibonacci

## API

```javascript
var isFibonacci = require('is-fibonacci');

if (isFibonacci(5)) {
  console.log('Five is a fibonacci number');
}
```

## License

  MIT
