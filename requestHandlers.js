var exec = require("child_process").exec;

function init(res){
	console.log("Manipulador de peticion 'init' ha sido llamado.");
	exec("ls -lah", function (error,stdout,stderr) {
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(stdout);
		res.end();
	});
}

function upload(res){
	console.log ("Manipulador de peticion 'upload' ha sido llamado.");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("Hi upload");
	res.end();
}

exports.init=init;
exports.upload=upload;