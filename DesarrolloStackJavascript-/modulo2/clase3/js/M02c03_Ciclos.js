// pedir un numero y elevarlo al cuadrado

// var numero=prompt ("ingrese un numero");
// var cuadrado = numero * numero;
// alert("el cuadrado de " + numero + " es " + cuadrado); 


// if (nnumber(numero)){
//     console.log((Numberer(numero));
//     console.log("conversion incorrecta");
// }


// numero = prompt("ingrese un numero");//calcular el cuadrado de numero
// var cuadradro = numero*numero;
// //mismo ejercicio pero corregido para que detecte cuando un valor ingresado es un numero
// if (numero=="0"){
//     alert("el cuadradro de 0 es 0");
// }else if (Number(numero)){
//     alert("el cuadradro de " + numero + " es " + cuadradro);
// }else{
//     alert("la cifra ingresada no es numero");
// }

// console.log("inicio, el bus esta vacio");
// var contador=0;//variable que lleva la cantidad de pasajeros 
// while(contador<20){
//     console.log("un nuevo pasajero se ha subido");
//     contador=contador+1;
//     console.log("hay " + contador + "pasajero(s) se ha bus");
//     console.log("-----------------");
// }
// console.log("el bus esta lleno");

//------------------------------------------------------------------------
// ciclo para pedir numero hasta que el usuario ingrese 0   

// console.log("ingrese un numero");
// var numero;//numero va ser la variable donde se lea el promt
// var suma = 0;//es la variable donde ir sumando los numero ingresados  por el usuario

// while(numero!=0){
//     numero = Number(prompt("ingrese un numero(0 para salir)"));
//     suma=suma+numero;//sumamos el total
// }
// alert("la suma es" +suma);
//------------------------------------------
// ciclo para pedir numero hasta que el usuario ingrese 0
// var palabra="";
// palabra = prompt("ingrese una palabra");
// if(palabra=="hola"){
//     alert("hola que tal");
// }else if(palabra="chao"){
//     alert("adios!!!");
// }else{
//     alert("no entiendo");
// }

// var palabra = "";
//     while(palabra!="chao"){
//         palabra = prompt("ingrese una palabra");
//         if(palabra=="hola"){
//             alert("hola que tal");
//         }else if(palabra=="chao"){
//             alert("adios!!!");
//         }else{
//             alert("no entiendo");
//         }
//     }
//     alert("fin del programa");


//------------------------------------------------------------------------
// var nota="";
// var contador=0;
// var sumaNotas=0;

//     while(nota!=0){
//         nota = Number(prompt("ingrese una nota (0 para salir)"));
//         if (nota==0){
//             sumaNotas+=nota;
//             contador++;
//         }
// }
// var promedio = sumaNotas/contador;
// alert("la nota final es " + promedio);


console.log(Math.pi);
console.log(Math.e);
console.log(Math.random());
console.log(Math.ceil(5.8));
console.log(Math.floor(5.8));
console.log(Math.round(5.8));

//console.log(Math.pow)(3.3);

//var myNumeroAleatorio = Math.floor(Math.random()*(X+1));

var contador=0;
while(contador<10){
    console.log(Math.floor(Math.random()*10));
    contador++;
}


