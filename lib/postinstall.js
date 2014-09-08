#!/usr/bin/env node
/*
 * command line interface for nfd
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

var path 		= require('path'),
		fs 	 		= require('fs'),
		pathSep = require('path').sep;

var exec = require('child_process').exec;

var mkdirp = require('mkdirp');

var osenv = require('osenv');

console.log('Env:');
console.dir(osenv.home());
console.dir(osenv.path());
console.dir(osenv.user());

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

// TODO remove old code
/*
var mkdirSync = function (path) {
  var dirs = path.split(pathSep);
	var root = "";

	while (dirs.length > 0) {
		var dir = dirs.shift();
		if (dir === "") { // If directory starts with a /, the first path will be an empty string.
			root = pathSep;
		}
		if (!fs.existsSync(root + dir)) {
			fs.mkdirSync(root + dir);
		}
		root += dir + pathSep;
	}
}
*/

var nscaleRoot = getUserHome() + "/.nscale";

console.log("Post install nscale, nscale root: " + nscaleRoot);

var prc = exec('whoami');
console.log('User:');
prc.stdout.pipe(process.stdout);

var dataDir = nscaleRoot + '/data';
mkdirp.sync(dataDir);

var logDir = nscaleRoot + '/log';
mkdirp.sync(logDir);

var cfgSrc = path.resolve(__dirname, '../config/default-config.json');
var cfgOutDir = nscaleRoot + '/config';
var cfgOutPath = cfgOutDir + '/config.json';

mkdirp.sync(cfgOutDir);

if (!fs.existsSync(cfgOutPath)) {

	fs.readFile(cfgSrc, 'utf8', function (err,data) {
	  if (err) {return console.log(err);}
	  var result = data.replace(/\$NSCALE_ROOT/g, nscaleRoot);

	  console.log("Installing config: " + cfgOutPath);

	  fs.writeFile(cfgOutPath, result, 'utf8', function (err) {
	     if (err) {return console.log(err);}
	  });
	});

}
