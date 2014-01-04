#!/usr/bin/env node
var gazer = require('../');

var argv = require('optimist')
  .usage('Usage: gazer --pattern "public/less/**/*.less" <your command>')
  .demand('pattern')
  .argv;

var pattern = argv.pattern;
var patternIndex = process.argv.indexOf(pattern) + 1;
var cmd = process.argv.slice(patternIndex, Infinity).join(' ');

if (cmd.length === 0) {
  throw new Error('You must provide a command to run');
}

gazer(pattern, cmd);
