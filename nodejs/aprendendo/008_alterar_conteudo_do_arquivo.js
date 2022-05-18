var fs = require('fs');
var path = require("path");

fs.writeFile(path.resolve(__dirname, './008_texto_apagar.txt'), 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// O fs.writeFile()método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado: