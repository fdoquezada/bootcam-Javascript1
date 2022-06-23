//cargar modulos (librerias)
var http = require('http');
var url = require('url');

function cuadrado(numero){
    return numero*numero;
}
//a) solo con pathname
http.createServer(function (request, response) {
    let q=url.parse(request.url,true);
    let ruta=q.pathname;
    let partes=ruta.split("/");
    console.log(ruta);
    console.table(partes);

    //revisamos cuantas oartes tiene una ruta
    if(partes.length!=3){
        response.writeHead(404,{'Content-Type': 'text/plain'});
        response.write("Recurso no encontrado. Problamente la ruta este mal")
    }else if(partes[1]!='numero'){
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("El recurso no se encontro")
    }else if(!Number(partes[2])){
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("no se pudo realizar el calculo");
    }else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(cuadrado(partes[2]).toString());
    }
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(8081);

console.log('servidor iniciado');
//127.0.0.1:8081/numero/5
//127.0.0.1:8081/numero?valor=5
//127.0.0.1:8081?numero=5



