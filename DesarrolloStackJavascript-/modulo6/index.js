var http = requiere ('http');

http.createServer(function(Request,Response){
    Response.write("hola")
    Response.end()
}).listen(8081);

console.log("servidor iniciado")
