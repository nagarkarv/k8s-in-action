const http = require('http');
const os = require('os');
var count = 1;

console.log(" K8s test server starting...");

var handler = function(request, response) 
{
	count++;
	if( count < 5){
		console.log("Received request from " + request.connection.remoteAddress);
		response.writeHead(200);
		response.end("Status: 200 (OK), You've hit " + os.hostname() + "\n");
	}
	else {
		console.log("KILL receive from " + request.connection.remoteAddress);
		response.writeHead(500);
		response.end("Status:400 (NOT OK), You've hit " + os.hostname() + "\n");
		count = 0;
	}

};

var www = http.createServer(handler);

www.listen(8080);
