// Ejercicio M02 C02
// JavaScript Básico - Ejercicio asincrónico 03
// Par o impar. Pedile al usuario que ingrese un número para que tu programa evalúe
// si es par o impar. Usá la estructura condicional if...else.
// JavaScript Básico - Ejercicio asincrónico 04
// Parte 1:
// En este ejercicio, crearás un programa que le indique a las mujeres si están en
// edad, o no, de jubilarse.
// Importante: En Chile, las mujeres pueden jubilarse a los 60 años.
// Parte 2:
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como
// a los hombres, si están en edad de jubilarse.
// Importante: En Chile, los hombres pueden jubilarse a los 65 años.
// Extra Bonus:
// Optimice su código de modo que, todo el ejercicio, se resuelva con un solo if. Use
// operadores lógicos y de relación.
// 1 
alert("comienza la tarea parte1");
var edad= prompt("¿Cual es tu edad?"); //pido la edad


if (edad>=60){  //si la edad es mayor o igual a 60
    alert("¡Felicidades, eres una mujer jubilada!"); 
    if (edad>=65){
        alert("¡Felicidades, eres un hombre jubilado!");
    }
    
}else{
    alert("¡No eres una mujer jubilada!");//muestro un mensaje

}

alert("comienza la tarea parte2");//muestro un mensaje

var  genero= prompt("¿Cual es tu genero? ejemplo m mujer o v para varon");// solicitud de la genero
if(genero == "m"){//si el genero es mujer
    let edad= prompt("¡Felicidades, eres una mujer! ¿Cual es tu edad?");
    if (edad>=60){//si la edad es mayor o igual a 60
        alert("¡Felicidades, eres una mujer jubilada!");
    }else if (edad<60){//si la edad es menor a 60
        alert("¡No eres una mujer jubilada!");
    }
}else if(genero == "v"){//si el genero es varon
    let edad= prompt("¡Felicidades, eres un hombre! ¿Cual es tu edad?");
    if (edad>=65){
        alert("¡Felicidades, eres un hombre jubilado!");
    }
    else if (edad<65){//si la edad es menor a 65
        alert("¡No eres un hombre jubilado!");
    }
}else{//si no es ninguno de los anteriores
    alert("¡No eres una mujer jubilada ni un hombre jubilado!");
}




