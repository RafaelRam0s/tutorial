var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

// Acesse uma rota dentro do domínio, para ver o exemplo rode no prompt e depois acesse a url: http://localhost:8080/hello-world 2 http://localhost:8080/teste