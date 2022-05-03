for (i=0;i<10;i++){
    console.log("el valor de i es :" + i);
}

console.log("------------------------");
for (i=5;i<10;i++){
    console.log("el valor de i es :" + i);
}

console.log("------------------------");
for (i=0;i<10;i+=2){
    console.log("el valor de i es :" + i);
}

console.log("------------------------");
for (i=0;i<10;i+=2){
    console.log("el valor de i es :" + i);
}

//ciclo que no empieza en cero
console.log("------------------------");
for (i=10;i>0;i--){
    console.log("el valor de i es :" + i);
}

console.log("------------------------");
var letras = "abcdefghijklmnopqrstuvwxyz";
for (i=0;i<letras.length;i++){
    console.log("el valor de i es :" + letras[i]);
}

//contar vocales
console.log("------------------------");
var palabra ="paralelogramo";
var contador=0;
for(i=0; i<palabra.length;i++){
    if (palabra[i]==="a" || palabra[i]==="e" || palabra[i]==="i" || palabra[i]==="o" || palabra[i]==="u"){
    contador++;
    }
}
console.log("la cantidad de vocales es: " + contador);


console.log("------------------------");


// mostar en opantalla los numeros pares 
palabra="Curso de FullStack con javascript";
for(i=0;i<palabra.length;i+=2){
    console.log("el valor de i es :" + palabra[i]);
}

//generar el arreglo al reves
palabra="Curso de FullStack con javascript";
for(i=palabra.length-1;i>-1);{
    console.log("el valor de i es :" + palabra[i]);
}

//lo mismo para detro de una funcion
function darVuelta()(arreglo){
    let resultado=[]
    for(i=arreglo.length-1;i>-1;i--){

}

