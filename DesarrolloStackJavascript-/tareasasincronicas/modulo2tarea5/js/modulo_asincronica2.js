/*Ejercicio M02 C05
JavaScript Básico - Ejercicio asincrónico 03
En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de
números y devuelva la suma de todos ellos. Usá este código para testear tu
Función:
sumArray([1,2,3]) // 6
sumArray([10, 3, 10, 4]) // 27
sumArray([-5,100]) // 95*/


// se crea la funcion sumArray

function sumArray(arreglo){
    let result=0;
    for(i=0;i<arreglo.length;i++){
        result=result+arreglo[i];
    }
    return result;
}
//los arreglos a sumar


var testear=[1,2,3];
//se asigna la varible
var testear1=[10,3,10,4];
var testear2=[-5,100]
console.log("La suma del test:[ "+testear+"] es : "+sumArray(testear));
//sumamos el testear y lo imprimimos
console.log("La suma del arreglo:[ "+testear1+"] es : "+sumArray(testear1));
//sumamos el testear1 y lo imprimimos
console.log("La suma del arreglo:["+testear2+"] es : "+sumArray(testear2));
//sumamos el testear2 y lo imprimimos








