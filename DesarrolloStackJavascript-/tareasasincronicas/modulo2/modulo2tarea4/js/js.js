// Ejercicio M02 C04
// JavaScript Básico - Ejercicio asincrónico 03
// En este ejercicio deberás escribir una función llamada contarDeA_n que tenga los
// Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los
// números desde el 1 hasta contar_hasta en intervalos de contar_de_a.
// PISTA: Si ponemos 2 y 10 como Argumentos en el llamado, la Función deberá contar de a
// dos hasta llegar a diez.
// JavaScript Básico - Ejercicio asincrónico 04
// FizzBuzz II : La Venganza de FizzBuzz
// En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que
// tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una
// palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
// Para completar este ejercicio, deberás:
// 1. Lograr que fizzBuzz2 devuelva un String con los números separados por
// comas.
// 2. Mejorar la Función para que el usuario pueda decidir hasta qué número
// tiene que contar fizzBuzz2.
// 3. Mejorar la Función para que el usuario pueda ingresar fizz_num y
// buzz_num para que la sustitución de palabras ocurra en los números
// múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).
// Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.
// 1
// PISTA: ¿Cuáles Eran las Instrucciones de Fizzbuzz?
// En ese ejercicio escribiste un programa que imprimía en la consola los números del
// 1 al 100, teniendo en cuenta estos criterios:
// ● Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
// ● Si era múltiplo de 5, imprimía "Buzz".
// ● Si era, a la vez, múltiplo de 3 y de 5, imprimía "Fizzbuzz".

function contarDeA_n(contar_de_a,contar_hasta){

    let num = contar_de_a;
    let numero = num;
    let fin = contar_hasta;

    while( fin > numero){
        numero;
        console.log(numero);
        numero += num;
    }
    return numero;
}

console.log(contarDeA_n(4,100))


function contarDeA_n(contar_de_a,contar_hasta){
    let num = contar_de_a;
    let numero = num;
    let fin = contar_hasta;
    let resultado = "";
    while( fin > numero){
        numero;
        if(numero % 3 == 0 && numero % 5 == 0){
            resultado += "FizzBuzz, ";
        }else if(numero % 3 == 0){
            resultado += "Fizz, ";
        }else if(numero % 5 == 0){
            resultado += "Buzz, ";
        }
        numero += num;
    }
    return resultado;
}
console.log(contarDeA_n(4,100))
    