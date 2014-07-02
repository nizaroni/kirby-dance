kirby-dance
===========

<('.'<) (>'.')> <('.'<) (>'.')>

Generate strings of dancing Kirbies in Node.js and the browser.

Example
-------

```js
var kirbyDance = require('kirby-dance');

console.log(kirbyDance(4)); // "<('.'<) (>'.')> <('.'<) (>'.')>"

console.log(kirbyDance(-7)); // "(>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')>"
```


API
---

### kirbyDance(n) ###

Returns a string of `n` dancing Kirbies, where `n` is an integer. If `n` is negative, it reverses the dance.


License
-------

ISC
