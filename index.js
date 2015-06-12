var assert = require('assert');

module.exports = function chaotic(rate) {
  rate = rate || 0.5;
  assert(rate < 1 && rate > 0, 'rate');

  function toss(r) {
    assert(r < 1 && r > 0, 'rate');
    return Math.random() > 1-r;
  }

  return function fuck(r, cb) {
    if (typeof r === 'function') {
      cb = r;
      r = rate;
    }
    return function () {
      cb.apply(
        this,
        [].concat(
          toss(r) ? new Error("murphy's law") : arguments[0],
          [].slice.call(arguments, 1)
        )
      );
    };
  };

};

