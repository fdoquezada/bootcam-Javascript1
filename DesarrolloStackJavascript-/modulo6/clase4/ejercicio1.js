/* const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('hola fernando quezada'))




app.listen(port, () => console.log(`app listening on port ${port}!`))


app.get('/', (req, res) => {
  res.send('GET request to the homepage')
}); */
//Localhost:8093/comida?nombre=Arroz
//Localhost:8093/fin
//paso 1.- crear el servidor
//paso 2.- verificar el request (en este caso, la ruta comida y el parametro nombre)
//paso 3.- guardar los datos que vienen (lista de alimentos)
//paso 4.- cuando llegue la ruta "fin", enviar la lista por correo

var http        = require('http');
var url         = require('url');
var nodemailer  = require('nodemailer');


var alimentos="";

 var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "granferna@gmail.com",
        pass: 'ymtkzxjrxvwjpneq'

    }
 });

 http.createServer(function (request, response) {
    let q= url.parse(request.url,true); //url separada
    //comprobar que la ruta sea "comida" o "fin"
    if (q.pathname=="/comida"){
        //comprobar que exista un sólo parámetro y sea "nombre"        
        //console.table(q.query);
        //console.table(Object.keys(q.query));
        if(Object.keys(q.query).length!=1){
            response.writeHead(404, {'Content-Type': 'text/plain'});      
            response.write("Ruta no encontrada (1)");    
        }else if(Object.keys(q.query)[0]!="nombre"){
            response.writeHead(404, {'Content-Type': 'text/plain'});      
            response.write("Ruta no encontrada (2)");    
        }else{
            alimentos+=q.query.nombre+";"
            console.log("alimentos:" + alimentos);
            response.writeHead(200, {'Content-Type': 'text/plain'}); 
            response.write("OK!");
        }
    }else if(q.pathname=="/fin"){
        var correo = {
            to: "graferna@gmail.com",
            from:"curso@node.cl",
            subject:"lista de ingredientes",
            text : alimentos
        }
    
        //enviar correo
        transporter.sendMail(correo,function(err,info){
            if(err){
                console.log(err.message);
            }else{
                console.log("correo enviado");
                console.log(info.response);
                alimentos="";
            }
        })
        response.write("correo enviado");        
    }else{
        response.writeHead(404, {'Content-Type': 'text/plain'});      
        response.write("Ruta no encontrada");
    }
    

  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(8081);

console.log('servidor iniciado en el puerto', 8081);