var serv=require("./HttpTestServer");
var rout=require("./router");
var requestHandlers=require("./requestHandlers");

var handle= {};
handle["/"] = requestHandlers.init;
handle["/init"] = requestHandlers.init;
handle["/upload"] = requestHandlers.upload;

serv.SetUp(rout.route,handle);