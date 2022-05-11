// Ejercicio M02 C03
// JavaScript Básico - Ejercicio asincrónico 04
// FizzBuzz. En este ejercicio deberás escribir un programa que imprima en la consola
// los números del 1 al 100, teniendo en cuenta estos criterios:
// ● Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// ● Si es múltiplo de 5, deberá imprimir "Buzz".
// ● Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".
// JavaScript Básico - Ejercicio asincrónico 05
// Piedra, papel o tijera. En este ejercicio deberás escribir un código que:
// 1. Le pida al usuario que ingrese uno de estos valores: "Piedra", "Papel" o
// "Tijera".
// 2. Elija un valor al azar usando Math.random ().
// 3. Le diga al usuario quién ganó.
// Pista: Si nunca jugaste al Piedra, Papel o Tijera, conocé sus reglas:
// ● La tijera corta al papel.
// ● El papel envuelve a la piedra.
// ● La piedra rompe la tijera.
// 4. Le pregunte al usuario si le gustaría volver a jugar.
// 1 
alert("comienza la tarea parte 1");
var num =1;
while( num < 100 && num++){
    if ( num % 3 === 0 && num % 5 === 0){
        console.log(num+" FizzBuzz")
    } else if(num % 3 === 0) {
        console.log(num+" Fizz")
    } else if ( num % 5 === 0){
        console.log(num+" Buzz")
    }
}
alert("comienza parte 2 ¿estas listo para jugar? ")
// 2
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var opciones = [piedra, papel, tijera];
var opcion = opciones[Math.floor(Math.random() * opciones.length)];
// 3
if (opcion === piedra){
    console.log("Ganó la piedra")
} else if (opcion === papel){
    console.log("Ganó el papel")
} else if (opcion === tijera){
    console.log("Ganó la tijera")
}
// 4
var respuesta = prompt("¿quieres jugar si/no?");
if (respuesta === "si"){
    console.log("Vuelve a jugar")
}
// 5
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var opciones = [piedra, papel, tijera];
var opcion = opciones[Math.floor(Math.random() * opciones.length)];
// 3
if (opcion === piedra){
    console.log("Ganó la piedra")
}
// 4
var respuesta = prompt("¿Desea volver a jugar?");
if (respuesta === "si"){
    console.log("Vuelve a jugar")
}
// 6
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var opciones = [piedra, papel, tijera];
var opcion = opciones[Math.floor(Math.random() * opciones.length)];
// 3
if (opcion === piedra){
    console.log("Ganó la piedra")
}
// 4
var respuesta = prompt("¿Desea volver a jugar?");
if (respuesta === "si"){
    console.log("Vuelve a jugar")
}
// 7
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var opciones = [piedra, papel, tijera];
var opcion = opciones[Math.floor(Math.random() * opciones.length)];
// 3
if (opcion === piedra){
    console.log("Ganó la piedra")
}
// 4
var respuesta = prompt("¿Desea volver a jugar?");
if (respuesta === "si"){
    console.log("Vuelve a jugar")
}

