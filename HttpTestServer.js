var http = require("http");

function SetUp(){
	function onRequest(req,res){
		console.log("Peticion recibida");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end("Hello\n");
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server start at port 8888")
}

exports.SetUp= SetUp ;