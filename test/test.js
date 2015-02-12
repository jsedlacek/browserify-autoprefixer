var browserify = require('browserify');
var concatStream = require('concat-stream');
var partialify = require('partialify');

var assert = require('chai').assert;

var autoprefixer = require('..');

describe('browserify-autoprefixer', function() {
  it('should transform css file', function(done) {
    var b = browserify();
    b.transform(autoprefixer);
    b.transform(partialify);
    b.require(__dirname + '/fixture.css');
    b.bundle().pipe(concatStream(function(result) {
      assert.include(result.toString(), "-webkit-transform");
      done();
    }));
  });
});
