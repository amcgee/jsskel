'use strict';

var test = require('tape');
var square = require('../').square;

test('square', function (t) {
    t.equal(square(2), 4);
    t.end();
});
