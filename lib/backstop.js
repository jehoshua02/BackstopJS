var npm = require('./util/npm');


var backstop = {};
backstop.commands = {};

backstop.commands.list = function () {
  console.log('Available commands:');
  for (var command in this) {
    console.log('  ' + command);
  }
};

backstop.commands.init = function () {
  npm.commands.run(['gulp', 'genConfig']);
};

backstop.commands.reference = function () {
  npm.commands.run(['gulp', 'reference']);
};

backstop.commands.test = function () {
  npm.commands.run(['gulp', 'test']);
};


module.exports = backstop;
