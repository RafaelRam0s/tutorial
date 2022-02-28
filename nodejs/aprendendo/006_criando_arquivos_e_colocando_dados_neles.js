var fs = require('fs');
var path = require("path");

fs.appendFile(path.resolve(__dirname, './006_arquivo_texto_criado_automatico_ao_rodar_o_projeto.txt'), 'Hello content test!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// O fs.appendFile() anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado, no primeiro parâmetro passamos o local do arquivo, no segundo parâmetro colocamos o conteúdo que o arquivo irá receber e no terceiro uma função que deve ser executada ao ser chamado

// Se o arquivo já estiver criado ele adiona o texto ao final do arquivo