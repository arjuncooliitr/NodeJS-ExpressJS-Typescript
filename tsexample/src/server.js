"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var http_1 = require("http");
var server = http_1.createServer(function (request, response) {
    switch (request.url) {
        case "/file":
            var stream = fs_1["default"].createReadStream("./server.ts");
            stream.on("data", function (chunk) {
                response.write(chunk);
            });
            stream.on("end", function () {
                response.end();
            });
            break;
        case "/":
            response.end("Hello World!!!");
    }
});
server.listen(1234);
