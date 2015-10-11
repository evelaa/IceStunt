var http = require("http");
var url = require("url");

function SetUp(route,handle){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log("Peticion recibida para" + pathname );

		route(handle,pathname,res);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server start at port 8888")
}

exports.SetUp= SetUp ;