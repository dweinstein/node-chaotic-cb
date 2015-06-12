var chaotic = require('./index')(0.1);

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

var fun = chaotic(callback);

var funTimes = [
  wrap(fun, null, "ok"),
  wrap(fun, null, "win")
];

funTimes.forEach(function (delayed) {
  delayed();
});

