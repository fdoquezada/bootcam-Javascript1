//importar el modulo
//const saludo=require(".saludo");
//const =require("/saludo");
//saludos.hola();
//saludo.chao
//import parcial
//const {hola}=require("./saludos");
const { sumar } = require("./calculo");
const { hola,usuario,auto,pi } = require("./saludos");
hola();

console.log(usuario);
const miAuto=new  auto("BK9876");
console.log(miAuto);

console.log(2*pi*5);

const {sumar,resta,punto}=require("./calculo");

console.log(sumar(3,6));
var p1=new punto(4,6);
console.log(p1);
