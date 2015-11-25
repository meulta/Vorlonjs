var assert = require('assert');
var vorlontools = require("../Scripts/vorlon.tools");

describe('Array', function() {
  describe('toolsUserAgent', function () {
    it('should return Android for android user agent', function () {
      var ua = "Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev> ";
      var expected = "Android";
      var actual = vorlontools.VORLON.Tools.GetOperatingSystem(ua);
      assert.equal(actual, expected);
    });
  });
});

describe('Array', function() {
  describe('toolsUserAgent', function () {
    it('should return Windows for Windows user agent', function () {
      var ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240";
      var expected = "Windows";
      var actual = vorlontools.VORLON.Tools.GetOperatingSystem(ua);
      assert.equal(actual, expected);
    });
  });
});

describe('Array', function() {
  describe('toolsUserAgent', function () {
    it('should return iOS for iPad user agent', function () {
      var ua = "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25";
      var expected = "iOS";
      var actual = vorlontools.VORLON.Tools.GetOperatingSystem(ua);
      assert.equal(actual, expected);
    });
  });
});