//
// node.js script to serve up the index.html file
// to run from command line type >node photonserver.js
// then open browser and enter http://localhost:8081
//
console.log("Serving up a Photon.")

var http = require('http');
var fs = require("fs");

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();
    }).listen(8081);
});
