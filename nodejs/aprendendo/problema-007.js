var fs = require('fs');
var path = require("path");

fs.open(path.resolve(__dirname, './007_texto_apagar.txt'), 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});