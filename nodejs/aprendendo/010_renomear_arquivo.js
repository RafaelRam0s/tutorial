var fs = require('fs');
var path = require("path");

fs.rename(path.resolve(__dirname, './010_texto.txt'), path.resolve(__dirname, './010_teste.txt'), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.rename(path.resolve(__dirname, './010_teste.txt'), path.resolve(__dirname, './010_texto.txt'), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// O fs.rename() renomeia o arquivo, o primeiro parâmetro diz o local do arquivo atual, e o segundo parâmetro informa a rota que deverá possuir