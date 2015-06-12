# SYNOPSIS

Return a callback that errors randomly with a particular ratio.

# USAGE

```javascript
var chaos = require('chaotic-cb')(0.9);

var cb = chaos(function(err, res) { console.log(err?err:res); });
cb(null, "testing...");

var cb = chaos(0.9, function(err, res) { console.log(err?err:res); });
cb(null, "I probably won't happen...");
```

See the [example](example.js)

