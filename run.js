#!/usr/bin/env node
const fs = require('fs')
const argv = require('yargs')
  .usage('Generate statistics on the teams in the league')
  .demand('f')
  .alias('f', 'file')
  .describe('f', 'Load a file')
  .argv

let lines = []
fs.createReadStream(argv.file)
.on('data', function (buf) {
  lines = lines.concat(buf.toString().split(/\r\n?|\n/))
})
.on('end', function () {
  console.log(lines.flat().filter(l => l))
})
.on('error', () => { console.log(new Error('There was a problem loading the file')) })