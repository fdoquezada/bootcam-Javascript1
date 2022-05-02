

var palabra = "fernando";
var palabra2 = "fernando la vidaes muy corta para que se pueda escribir";

console.log(palabra.length);
console.log("la palabra  primera letra es: " + palabra[0]);
console.log("la segunda palabra es : " + palabra[2]);
console.log("la ultimaletra palabra es : " + palabra[3]);

var largoPalabra = palabra2.length;

console.log("la ultima palbra es: " + palabra2[largoPalabra-1]);

//en un solo paintedfreshhouses
console.log("la ultima palabra   letra es: " + palabra2[palabra2.length-1]);

//paraguradar todoslosnombres de cada alumnodel cursor

let alumnol = ["paula","alexis","katy","sandra","fernando"];
console.log("la cantidad de alumnos es: " + alumnol.length); //cuenta loselementos de un array
console.log("El segundo  alumno es:" + alumnol[1]);
console.log("El segundo  alumno es:" + alumnol[0]);
console.log("El segundo  alumno es:" + alumnol[alumnol.length-1]);

//modificaion de un elemento del arreglo
console.log("el tercer  alumno antes del cambiop es: " + alumnol[2]);
alumnol[2] = "juan"; //reemplazo el tercer elemto del arreglo
console.log("el tercer  alumno despues del cambio es: " + alumnol[2]);

alumnol.push("jose"); //agrega un elemento al final del arreglo
console.log("la cantidad de alumnos es: " + alumnol.length);
console.table(alumnol);

//agregar dos elementos al final del arreglo
alumnol.push("juan","jose");
console.log("la cantidad de alumnos es: " + alumnol.length);
console.table(alumnol);

//sacarel ultimo elemento del arreglo
alumnol.pop();
console.log("la cantidad de alumnos es: " + alumnol.length);
console.table(alumnol);
// sacar el ultimpio elemento del arreglo
console.log("antes del pop -------------");
console.table(alumnol);
let ultimo = alumnol.pop();
console.log("despues  del pop -------------");
console.table(alumnol);
console.log("despues  del cambio el tercer alumno es: " + ultimo);



//sacar el primer elemento del arreglo

console.log("antes del shift -------------");
console.log("antes del pop -------------");
console.table(alumnol);
let primero = alumnol.shift();
console.log("despues  del pop -------------");
console.table(alumnol);
console.log("despues  del cambio el tercer alumno es: " + primero);


//indexOf
var texto="mi primer index";
var posicion=texto.indexOf("p");
console.log("la posicion de la letra  es: " + posicion);
console.log("la posicion de la letra  es: " + texto.indexOf("primer"));
console.log("la posicion de la letra  es: " + texto.indexOf("index"));
console.log("la posicion de la letra es: " + texto.indexOf("primer",3));
console.log("la posicion de la letra  es: " + texto.indexOf("i"));

alumnos=["paula","alexis","katy","sandra","fernando"];


console.log("la posicion de la letra paula  es: " + alumnos.indexOf("paula"));
console.log("la posicion de la letra alexis  es: " + alumnos.indexOf("alexis"));
console.log("la posicion de la letra katy  es: " + alumnos.indexOf("sandra"));

var busqueda = prompt("ingrese el nombre del alumno a buscar");

if (alumnos.indexOf("busqueda")>=0){
    alert("el alumno esta en el arreglo");
}else{
    alert("su busqueda no esta en la lista ");

}

var copiaAlumnos = alumnos.slice();
var copiaParcial = alumnos.slice(1.4);
console.log("copia ------------");
console.log(copiaAlumnos);
console.log("copia parcial ------------");
console.log(copiaParcial);

//eliminar elementos desde cualquier parte del arreglo 
console.log("antes del splice -------------");
console.log(copiaAlumnos);
var Eliminados= (copiaAlumnos.splice(1,2));
console.log("elementos eliminados -------------");
console.log(Eliminados);

//eliminar un solo elemento en una posicion de entremedio
copiaAlumnos=alumnos.slice();
console.log("antes del eliminar un elemento -------------");
console.table(copiaAlumnos);
var eliminado=copiaAlumnos.splice(2,1);
console.log("despues eliminarun elemento");
console.table(copiaAlumnos);
console.log(eliminado);
copiaAlumnos.splice;


//transformar un arreglo en un string
console.log(alumnos.join("-"));

var TextoAlumnos="Pedro,Fernando,Juan,Jose,Maria";
var arregloAlumnos=TextoAlumnos.split(",");
console.log(arregloAlumnos);







