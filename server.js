// get fs module
var fs = require('fs');

// get http module
var http = require('http');
/**
* 
*/ 

var server = http.createServer(function (req, res) {
	
	var stream = fs.createReadStream('fs1.js');

	stream.on('data', function(chunk) {
		res.write(chunk.toString()); // n times
	});

	stream.on('error', function(err) {});

	stream.on('end', function() {
		res.end();
	});

	
});


server.listen(9000, () => console.log("Server Started!!!")); // port --> serversocket

