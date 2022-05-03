// // repaso calse de ayers
// var FigurasGeomatricas = ["triangulo", "circulo", "rectangulo", "trapecio", "rombo","pentagono","hexagono"];

// var segundoelemento = (FigurasGeomatricas[1]);
// var ultimoelemnto=(FigurasGeomatricas[4]);

// var ultimoelemnto2 = (FigurasGeomatricas[FigurasGeomatricas.length-1]);

// console.log(FigurasGeomatricas[0]);
// console.log(FigurasGeomatricas[1]);
// console.log(FigurasGeomatricas[2]);
// console.log(FigurasGeomatricas[3]);
// console.log(FigurasGeomatricas[4]);
// console.log(FigurasGeomatricas[5]);
// console.log(FigurasGeomatricas[6]);

// console.log("************ recorrido normal************");
// // (inicializacion,condicion,incremento)

// for (i=0 ; i < FigurasGeomatricas.length ; i++ ) {
//     console.log(FigurasGeomatricas[i]);
// }

// console.log("****************recorrido al reves *****************");
// // recorriendo el for al reves
// for(i=FigurasGeomatricas.length-1;i>=0 ; i-- ) {
//     console.log(FigurasGeomatricas[i]);
// }

//declaracion de un arreglo de vacio
let miArreglo=[];
// declaracion de un objeto validacion
let miObjeto={};

// declaracion de una variable 
let miVariable="hola";

//declaracion de un arreglo con elementos
let miArreglo2=["hola","mundo","adios"];

//declaracion de un objeto con propiedades
let miObjeto2={
    nombre:"juan",
    edad:20,
    alumno: false
}
console.log("miObjeto2");
//desafio: crear un objeto que representa un triangulo
let objetoTraingulo={
    lado1:10,
    lado2:20,
    lado3:30
}
console.log("objetoTraingulo");

//desafio: crear un objeto que representa un punto en el plano
let objetoplano = {
    x:10,
    y:20
}
//crear un objeto que represente un auto
let objetoAuto={
    marca:"ford",
    modelo:"mustang",
    color:"rojo",
    anio:2018,  
    motor:4,
    pulso:2000,
    velocidad:300,
    kilometraje:0,
    neblineros:true
}

//llamar a un elemento del arreglo miArreglo2 (segundo elemento)
miArreglo2[1]="hasta luego";

// llamar a un elemento del objeto objetoAuto 
objetoAuto["color"]="azul";
console.log("objetoAuto");

 //otra forma de llamar acceder a un elemento es con la notacion de punto
objetoAuto.color="verde";
console.log("objetoAuto");
//mostrar en pantalla solo la marca y el modelo (mediante ambas anotaciones)
objetoAuto.marca="ford";
objetoAuto.modelo="mustang";
console.log("objetoAuto");
