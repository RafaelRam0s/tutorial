var fs = require('fs');
var path = require("path");

fs.unlink(path.resolve(__dirname, './009_texto_apagar.txt'), function (err) {
  if (err) throw err;
  console.log('Deletado!');
});

// O fs.unlink() exclui o arquivo especificado: