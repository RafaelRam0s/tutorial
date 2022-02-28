// Passo 1 - instalar o nodejs
// Passo 2 - abra o prompt de comando cmd
// Passo 3 - Crie uma pasta para ter o seu projeto/site, e crie um arquivo app.js
// Passo 4 - Peque o caminho que a sua pasta está no seu pc, exemplo: "D:\_programas\tutorial\nodejs\mini-aplicacao-nodejs"
// Passo 5 - no prompt de comando dê o comando: cd/d "D:\_programas\tutorial\nodejs\mini-aplicacao-nodejs"
// Passo 6 - instale os node modules: express, 
// Passo 7 - Para instalar, dê o comando: npm install express --save
// Passo 8 - Programe
// Passo 9 - vá no seu diretório pelo prompt e dê o comando o seguinte comando para rodar o seu projeto: node app.js
// Passo 10 - acesse a url http://localhost:8081/

const EXPRESS = require("express");
const APP = EXPRESS();

APP.get("/", function(req, res) {
    res.send("Hello world!");
});

const PORT = 8081;
APP.listen(PORT, function() {
    console.log("Servidor rodando na url: http://localhost:" + PORT + "/");
});
