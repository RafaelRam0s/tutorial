var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

/*

1- Criar arquivo .js

2- Colocar um código javascript no arquivo criado do passo 1 de preferência um console.log("Hello World!")

3- Abrir o prompt de comando, para isso clique: "tecla windows" + "r"

4- Escreva "cmd" e de "ok" para iniciar o prompt de comando

5- No prompt de comando acesse a pasta em que foi criado o arquivo, para isso escreva "cd " e logo depois o caminho do arquivo, note que se tiver alguma pasta com espaço no nome, tipo: "Exemplo 01" pode dar erro para encontrar o caminho, então se estiver assim o diretório "C:\Exemplo 01", você tem que escrever "cd "C:\Exemplo 01"", o uso das aspas se torna obrigatório para que possa encontrar

6- Inicie a aplicação criada, escreva "node " e logo depois o nome do arquivo do passo 1

1- Rode no prompt o codigo no arquivo app.js

2- No navegador escreva na barra de url: "localhost:" e em seguida escreva o número da "porta" que foi colocada no arquivo do passo 1, esse "número" vai estar dentro do parênteses da função .listen()

3- Caso queira alterar a mensagem que está aparecendo no site, altere a mensagem dentro da função res.end(), além disso você irá precisar reiniciar o servidor no prompt, para isso abra o prompt e use as teclas "Ctrl" + "+" + "c" e então rode novamente com a função node + nome do diretório do arquivo e atualize a página aberta no navegador

*/