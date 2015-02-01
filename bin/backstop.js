#!/usr/bin/env node

// requires
var backstop = require('../lib/backstop');

// parse args
var userArgs = process.argv.slice(2);
var task = userArgs[0];

// run command
try {
  backstop.commands[task]();
} catch(e) {
  backstop.commands.list();
}
