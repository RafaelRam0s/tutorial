/*
O módulo Nodemailer pode ser baixado e instalado usando o NPM:
npm install nodemailer

Para isso abra o prompt de comando, acesse a sua pasta com "cd " + caminho da pasta, e rode o código "npm..."

Ao baixar o npm, será criado automaticamente uma pasta chamada de node_modules, não se preocupe com essa pasta, ela simplesmente armazena os modulos auxiliares que vc solicitou, a mas baixa um monte de coisa a mais, é pq esses módulos precisam de outros e então eles instalam conforme for necessário para uso
*/

var nodemailer = require('./013_pasta/node_modules/nodemailer/lib/nodemailer.js');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});