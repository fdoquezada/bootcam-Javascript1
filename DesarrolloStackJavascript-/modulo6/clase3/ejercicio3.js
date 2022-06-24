var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (request, response) {
    //separar la url
    var urlSeparada= url.parse(request.url,true);
    //la variale separada consta de dos partes 
    //host: la parte de la direccion del servidor (localshost)
    //pathname la parte enntre los slash (/): /usuario
    //query : la parte de los parametros(?ryut=123&nombre)

    if (urlSeparada.pathname=="/usuario"){//ok
        let datos={
            rut:urlSeparada.query.rut,
            nombre:urlSeparada.query.nombre,
            apellido:urlSeparada.query.apellido,
    }
        // ***************archivo********
    fs.writeFile("usuario/"+datos.rut+".txt",JSON.string)
        if(err){
            console.log(err,message);
        }else{
            console.log("archivo creado exitosamente");
        }
    })
  
        response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');