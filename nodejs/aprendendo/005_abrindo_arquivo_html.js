console.log("programa iniciado")

var http = require('http');
var fs = require('fs');

var path = require("path");

http.createServer(function (req, res) {
  fs.readFile(path.resolve(__dirname, './005_html.html'), function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    console.log("programa acessou o site")
    
    return res.end();
  });
}).listen(8080);

// Este programa faz com que possa ser aberto um arquivo html, ao acessar a url ele é carregado automaticamente