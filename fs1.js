
var fs = require('fs');

var content = fs.readFileSync('fs1.js'); // pushed on stack and blocking

console.log("Got :" + content.toString());
