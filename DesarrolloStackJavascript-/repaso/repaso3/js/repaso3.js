//objeto (2 tiposde objetos)
//1. objetos sencillos, se crean con llave {}
//siempre son un par "nombre de la propiedad ";"valor", separadaos po ";"




var obj1={
    nombre:"denis",
    edad:43,
    mostrarDatos:function(){
        console.log("hola soy "+ this.nombre);
    }
}

//2 objeto a partir de clases
class Persona{
    constructor(nombre,edad,rut){
        this.nombre=nombre;
        this.edad=edad;
        this.rut=rut;
    }
    mostrarDatos(){
        console.log("hola soy "+ this.nombre);
    }
}

//crear un objeto (a partir de clase perona)
var p1 = new Persona("denis",43, "12345678-9");
var p2 = new Persona("juan",23);
var p3 = new Persona("pedro",33);
var p4 = new Persona("maria",13);
var p5 = new Persona("juan",23);
var p6= new Persona("pedro",33);

console.log(p1.nombre);
console.log(p2.edad);
console.log(p3.mostrarDatos());

//-------------------------------------------------------------------------
 console.log("-------------------------------------------------------------------------");

 //funciones 
 //grupo de instracciones que tienen un objeto
 //son reutilizables
 //2 tipos de feunciones 
 //1 funciones , ejecutan instracciones y no devuelven nada
 function escribirHastaTres(){
     console.log(1);
     console.log(2);
     console.log(3);
 }

 escribirHastaTres();
 escribirHastaTres();
 escribirHastaTres();   
 escribirHastaTres();

 function sumarHastaTres(){
    let numero

 }

 function escribir(palabra){
     console.log(palabra);
 }

 escribir("chao");
 escribir("hola");
 escribir("adios");
 escribir(123);
 var letras="dgafdfsad";

 //exiten :
 //variables: guardan datos //js
 //parametros:guandan datos//funciones
 //propiedades: guardan datos //objetos

 //--------------------------------------
 funciones anonimas, no se pueden llamar ninguna parte excepto desde donde son definidas
 var miFuncion = function(){console.log("mi funcion")}//se guarda la funcion en una varaible , no se ejecutan 
 miFuncion();//se ejecuta la funcion que tiene guardandose en la variable

 var elementoHtml = document.createElement("div");

 elementoHtml.addEventListener("click",function(){
        console.log(" dentro del click");
     
 })
