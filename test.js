'use strict';

var expect = require('chai').expect;
require('./index.js');

describe('#canParse', function() {

    it('should return false on invalid input', function() {
       var actual = JSON.canParse('');
       expect(actual).to.equal(false);
    });

    it('should return true on valid JSON string', function() {
       var actual = JSON.canParse('{"test":true}');
       expect(actual).to.equal(true);
    });

    it('should return true on "null" string', function() {
       var actual = JSON.canParse('null');
       expect(actual).to.equal(true);
    });

});
