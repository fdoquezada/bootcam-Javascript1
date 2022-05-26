/* //codigo es6
var palabra= "Altura";


//ess6

if(palabra[0]=="a"|| palabra[0]=="A"){
    console.log("ok")
}else{
    console.log("no");
}


//e6
let palabraMay=palabra.toUpperCase();
console.log("original;",palabra);
console.log("mayuscula;",palabraMay);

let resultado = palalabraMay.starsWhith("A");
console.log("resultado;",resultado);
 */


function ejecutar(){
    console.log("afuera");
}

var objeto={
    ejecutar:function(){
        console.log("dentro");
    },
    comprobar:function(){
        ejecutar();
        this.ejecutar();
    }


}
objeto.comprobar();


console.log("***********");

//funciones flecha
//FUNCIN TRADICIONAL
function escribir(texto){
    console.log(texto);
}
escribir("hola");

console.log("***************");


//FUNCION FLECHA
var f =texto=>console.log(texto);
f("hola");

console.log("***************");
//ejemplo2 -funsion de devuelve el cuadrado de un numero 
//version tradicioal
function cuadrado(num){
    return num*num;
}
console.log(cuadrado(5));



//version flecha
var s =num=>num*num;
console.log(s(5));

console.log("***************");

//ejemplo 3 funcion sin parametros{

function saludar(){
    console.log("hola");

}
saludar();

//verion flecha
f=()=>console.log("hola");
f();
console.log("***************");
//ejemplo4 funcion con mas de un parametros

function mostrarPersona(nombre, apellido){
    console.log(nombre+" "+apellido);
}

mostrarPersona("juan","perez");

//vers¿ion flecha
let m = (n,a)=> console.log(n+" "+a);
m("luis","rios");


console.log("***************");


var notas = [6.5,5.4, 3.0, 7.0];


for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
console.log("***************");
//con map y funcion flecha
notas.map(n=>console.log(n));
var notasCopia=notas.slice();


//supungamos que quiero subir e decimas a ca da nota en el arreglo}
//con un for loop
for(i=0,i<notas.length;i++;){
    notas[i]=notas[i]+0.2;
}
console.log(notas);

//con map
notas.map(n=>n+1);
console.log(notas);

console.log("***************");

//con filter
notas.filter(n=>n>5);
console.log(notas);

console.log("***************");

//con reduce
let suma=0;
for (let i = 0; i < notas.length; i++) {
    suma=suma+notas[i];
}
console.log(suma);

//------------------------------
console.log("***************");
// spread : ...
function concatenar(a,b,c){
    console.log(a+":"+b+":"+c);
}

var palabra=["hola","mundo","como"];
concatenar(palabra[0],palabra[1],palabra[2]);

concatenar(...palabra);//convierte casa umo de los arregloa en un elemnto individual 

//concatenar (unir) los siguintes erreglos
var arregloA=["a","b","c"];
var arregloB=["d","e","f"];

/* 
function unir(...arreglo){
    console.log(arreglo);
}
unir(...arregloA,...arregloB); */


arregloA.push(...arregloB);
console.log(arregloA);

//destructuracion (crear un conjunto  de varaibles y asinarlos a una variable)
const frutas=["naranja","manzana","pera","uva"];

/* let fruta=fruta[0];
let fruta1=fruta[1];
let fruta2=fruta[2];
let fruta3=fruta[3]; */

//otra soluccion
let [fruta,fruta1,fruta2,fruta3]=frutas;

console.log(fruta1);




fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

