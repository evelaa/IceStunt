var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("Holi");
	response.end('Hello\n');
}).listen(8888);

console.log("Server running on 8888");