var assert = require('assert');
var vorlontools = require("../Scripts/vorlon.tools");

('Array', function() {
  describe('toolsUserAgent', function () {
    it('should return Android for android user agent', function () {
      var ua = "Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev> ";
      var expected = "Android";
      var actual = VORLON.Tools.GetOperatingSystem(ua);
      assert.equal(actual, expected);
    });
  });
});
