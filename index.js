#!/usr/bin/env node
'use strict';
const program = require('commander');
const info = require('./package.json');

program
  .version(info.version, '-v, --version')
  .command('watch', 'starts the watcher which keeps the branches syncronized')
  .command('init', 'runs the initialiation master')
  .parse(process.argv);
