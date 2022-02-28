var http = require('http');

var Modulo = require("./002_modulo_exemplo");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!' + Modulo(1, 2));
}).listen(8080);



