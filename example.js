var chaotic = require('./index')();

function callback(err, res) {
  setTimeout(function() {
    console.log(err?err:res);
  }, 100);
}

function wrap(func) {
  var args = [].slice.call(arguments, 1);
  return function() {
    func.apply(this, args);
  };
}

var funTimes = [
  wrap(chaotic(0.9, callback), null, "probably fails"),
  wrap(chaotic(0.1, callback), null, "probably succeeds"),
  wrap(chaotic(0.5, callback), new Error("normal error"), "definitely fails, but what kind?")
];

funTimes.forEach(function (delayed) {
  delayed();
});

