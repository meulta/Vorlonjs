var assert = require('assert');
var vorlontools = require("../Scripts/vorlon.tools");

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


describe('Array', function() {
  describe('toolsUserAgent', function () {
    it('should return Android for android user agent', function () {
      var ua = "Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev> ";
      var expected = "Android";
      var actual = VORLON.Tools.GetOperatingSystem(ua);
      assert.equal(actual, expected);
    });
  });
});
