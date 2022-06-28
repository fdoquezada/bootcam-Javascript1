const { Console } = require('console');

require('dotenv').config();
console.log(process.env.PUERTO);
console.log(process.env.CORREO);

console.log(process.env["PUERTO"]);

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(process.env.PUERTO);

console.log('Server running at: ' + process.env.PUERTO);
