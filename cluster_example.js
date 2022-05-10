const http = require('http');
const fs = require('fs');
const cluster = require('cluster');

var cpus = require('os').cpus().length;

if(cluster.isMaster) {
  for(let i = 0; i < 4; i++) {
	cluster.fork();	
  }
  cluster.on("listening", worker => {
	console.log("started worker" , worker.process.pid);
  });	
  
   cluster.on("exit",  worker => {
	console.log("stoped worker" , worker.process.pid);
	cluster.fork();
  });	

} else {
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
	server.listen(9000);
}
