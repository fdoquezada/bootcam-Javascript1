function factorial(numero){
    let resultado=1;
    for ( i = 1; i<= numero; i++) {
        resultado*=i;
    }
    return resultado;
}



console.log(process.argv);
var argumentos=process.argv.slice(2);
//console.log(argumentos);
 if (argumentos.length ==0){
    console.log("debe ingresar un argumento (numero)");
 }else if (!Number(argumentos[0])){
        console.log("El argumento ingresado debe ser un numero mayor a o");
 }else{
    console.log("el valor factorial de "+argumentos[0].toString()+" es "+factorial(Number(argumentos[0])));
 }