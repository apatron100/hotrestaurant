var http = require('http');
var port = 8000; // 8080
function handleRequest(request, response) {
	response.end('Hooray! We sent something back!!');
}
var server = http.createServer(handleRequest);
server.listen(port, function () {
	console.log('Serving info, now, on port ' + port);
});