// Ejercicio M03 C02
// JavaScript Avanzado - Ejercicio asincrónico 02
// En este ejercicio, deberá crear un programa que use el Objeto Date() para
// devolver un alert que exprese qué día de la semana es.
// Importante: Debe existir una respuesta por cada valor numérico que pueda llegar.
// Requisito: El alert debe devolver un String.

class diasemana {
    constructor(dia) {
        this.dia = dia;

}
}
var fecha = new Date();
var dia = fecha.getDay();
var diaSemana = new diasemana(dia);
alert(diaSemana.dia);
switch (alert) {
    case 0:
        alert("Domingo");
        break;
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    default:
        alert("No es un dia de la semana");
        break;
}
    
//propuesta dos elementos de la clase diasemana
var fecha=new Date();


function devolverDiaSemana(fecha){
    var dias=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    alert("el dia de la semana es: " + dias[fecha.getDay()]);
}

devolverDiaSemana(fecha);


