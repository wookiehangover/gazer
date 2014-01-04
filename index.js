var exec = require('child_process').exec;
var gaze = require('gaze');
var debounce = require('lodash.debounce');

module.exports = function(pattern, cmd){
  function runner(event, filepath){
    console.log('Running: '+ cmd);
    exec(cmd, function(err, stdout, stderr){
      if (err) {
        console.log(err);
      }
      console.log(stdout);
      console.log(stderr);
    });
  }

  gaze(pattern, function(err, watcher){
    if (err) {
      throw new Error(err);
    }

    var fileCount = Object.keys(this.watched()).length;

    console.log('Watching "'+ pattern +'" : ' +
                fileCount +' file'+ (fileCount > 1 ? 's' : ''));

    this.on('all', debounce(runner, 100));
  });
};

