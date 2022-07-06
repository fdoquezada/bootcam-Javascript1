//1.iimportar librerias o modulo
//var pg=require('pg')
var{Client}=require('pg');//solo se importa la funcion de 
//2 configurar la conexion
//2.1 con string de coneccion
//postgreql://user:password@servidor:puerto/basededatos
//var clientes new Client ({coneccionString:"postgresql://postgresql"})

//2.2 coneccion por configuracion
const configuracion={
    user:'postgresql',
    password:'12345',
    host:'localhost',
    database:'Biblioteca',
    port:'5432'

}
//3 crear el cliente 
//var cliente=new pg.Client()//se usa como var pg=require('pg')
var cliente=new Client(configuracion);
//4conectarse
async function conectar(){
    await cliente.connect();
}
conectar();

cliente.query('SELECT * FROM "Libros"', function(error,resultado){
    console.log(resultado);
    cliente.end();
})
