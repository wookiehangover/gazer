var assert = require('chai').assert;
var exec = require('child_process').exec;

describe('gazer', function(){

  var pattern = 'example/*.less';
  var compile = './node_modules/.bin/lessc --verbose example/foo.less example/foo.css';

  it('should watch files and run a command', function(done){
    var cmd = ['./bin/cmd.js --pattern', pattern, compile];
    var child = exec(cmd.join(' '), function(err, stdout, stderr){
      if (err) {
        assert.ok(false, err);
        done();
      }
    });

    child.stdout.on('data', function(data){
      if (/Watching/.test(data)) {
        console.log(data.trim(), 'Watching "example/foo.less" : 1 file');
        assert.equal(data.trim(), 'Watching "example/foo.less" : 1 file');
        process.nextTick(function(){
          exec('echo "* { color: black }" > example/foo.less');
        });
      }

      if (/^lessc/.test(data)) {
        assert.include(data, 'lessc: wrote');
        done();
      }
    });
  });

});
