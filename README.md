# SYNOPSIS

Return a callback that errors randomly with a particular ratio.

# USAGE

```javascript
var chaos = require('chaotic')(0.9);

var cb = chaos(function(err, res) { console.log(err?err:res); });
cb(null, "testing...");
```

See the [example](example.js)

