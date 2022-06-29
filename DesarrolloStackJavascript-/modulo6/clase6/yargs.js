//var argumentos=process.argv.slice(2); 
//console.table(argumentos);
//var puerto=argumentos[0]
//var mensaje=argumentos// elimina los elemntos selecionados 

//console.log(process.argv[0]);
//console.log(process.argv[1]);
/* 
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('mensaje');
}).listen(8081); */

//console.log('Server running at http://127.0.0.1:8081/');


var yargs=require('yargs');

//var parametrosSinyargs= process.argv.slice(2);
var parametrosConyargs= yargs(process.argv.slice(2)).argv;

/* console.log(parametrosSinyargs);
console.log("**************");
console.log(parametrosConyargs); */

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/'+parametrosConyargs.puerto);





