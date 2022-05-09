const fs = require('fs');

// the stream returned by this method has a default highWaterMark of 64 KiB.
var stream = fs.createReadStream('fs1.js');


stream.on('data', function(chunk) {
	console.log(chunk.toString()); // n times
});

stream.on('error', function(err) {});

stream.on('end', function() {
	console.log("END!!!");
});


