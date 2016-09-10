var exec = require('child_process').exec;
var gaze = require('gaze');

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

    console.log('Watching "'+ pattern + '"');

    this.on('changed', runner);
  });
};
