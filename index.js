var assert = require('assert');

module.exports = function chaotic(rate) {
  rate = rate || 0.5;
  assert(rate < 1 && rate > 0, 'rate');

  function toss() {
    return Math.random() > 1-rate;
  }

  return function fuck(cb) {
    return function () {
      cb.apply(
        this,
        [].concat(
          toss() ? new Error("murphy's law") : arguments[0],
          [].slice.call(arguments, 1)
        )
      );
    };
  };

};

