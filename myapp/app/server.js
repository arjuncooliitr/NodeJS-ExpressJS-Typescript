var http = require('http');
var url = require('url');
var converter = require('./converter');

// http://localhost:3000/rgbToHex?red=255&green=100&blue=100
// http://localhost:3000/hexToRgb?hex=ff00ff

var server = http.createServer( (req, res) => {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    if(pathname === '/rgbToHex') {
        var result = converter.rgbToHex(parseInt(query['red']), 
                parseInt(query['green']),
                parseInt(query['blue']));
        res.end(result.toString());
    } else if(pathname === '/hexToRgb') {
        result = converter.hexToRgb(query['hex']);
        res.end(result.toString());
    }
});

server.listen(3000, () => console.log("server started!!!"));
