# json-canparse

> Checks if string can be parsed with JSON

## Install

```
$ npm install json-canparse
```

## Usage

```js
require('json-canparse');

const goodJson = '{"foo": "bar"}';
const badJson  = '{"foo:bar"}';

// Will be true
var yes = JSON.canParse(goodJson);

// Will be false
var no  = JSON.canParse(badJson);

```

OK, let's be serious ... this is not a very sophisticated piece of software ;)
