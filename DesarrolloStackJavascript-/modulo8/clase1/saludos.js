// nuestro primer modulo
const pi=3.14
function hola(params) {
    console.log("hola");
}
function chao(params) {
    console.log("chaooo!!!");
    
}
const usuario={
    nombre:"fernando",
    apellido:"quezada"
}
class auto{
    constructor(patente){
        this.patente=patente;
    }
}
module.exports={hola,chao,usuario,auto,pi}