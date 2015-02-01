var npm = require('npm');
var deasync = require('deasync');


// load npm
var loaded = null;
npm.load(function (err, npm) {
  loaded = npm;
});

// wait for load
while (loaded === null) {
  deasync.runLoopOnce();
}


module.exports = npm;
