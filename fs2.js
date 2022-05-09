
var fs = require('fs');


fs.readFile('fs1.js', (err,data) => {
   console.log("data inside:" + data.toString());
});// callback function added to macro task; macrotask to stack by event loop

console.log("done!!!" ); // not blocked
