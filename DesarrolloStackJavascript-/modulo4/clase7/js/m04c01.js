//toda la ejecucuion del programa se inicia dentro de la funcion main()
$(document).ready(function(){
    //la funncion es equivalente a : nombre
    //documente.querySelector()
    $("h1").text("Con Jquery");
    //document.querySelector("h1").innerHTML="sin Jquery";
    //caragar parrafo cocontador
    let parrafo=$("p");
    console.log(parrafo);
    console.log(parrafo.text());//para ler el inertext
    parrafo.text("texto cambiado");//para escribir el innertext
    $("p").text("texto cambiado 2");//cambio directo sin variable
    $("#segundo").text("segundo parrafo ");
    //selecionar el segundo titulo (equivalante a stylesheet    
    $("#titulo2").css("color","red");
    //cambiar el color del segundo parrafo
    $("#titulo2").click(function(){
        $("#titulo2").css("color","lightblue");
    })
    })

    $("#lista").css("color","violet");
    /* $("#lista").click(function(){
    $("#lista").css("color","lightblue");   
    }
    ) */
    $("#lista").children().css("background-color","black");

    //cambio de color de fondo a los hijos
    $("#lista").children().css("color","white");

    //cambiar el color de fondo de todo lo que esta al einterior del segundo
    $("#segundo").children().css("background-color","black");
//cambiar el color de fondo de lo que estas al interiror 
    $("li").even().css("background-color","blue");
//con pseudeselector
    $("li:odd").css("background-color","yellow");

//evivalente a un for (I=0;I<coleccion li.length;I++)   
    $("ul").children().each(function(i,e){
    $(e).text(i);
    })

    //ejemplo clonar el primer elemento de la lista y agregar al final 
    $("ul li:first").clone().appendTo("ul");
    //en js para crear un elemento se usa :
    //document.createElement(p);
    //su equivalente en jquery seria:$
    let nuevoElement=$("<p>nuevo elemnento</p>");
    //insertarlo en un div segundo
    $("#segundo").append(nuevoElemento);
    //es equivalente a 
    $("<p>nuevo elemento 2</p>").append("#segundo");


    //desafio 
    //crear un tercer div (con titulo y parrafo)
    //y agregarlo despues del segundo y antes de la lista 
    $("<div id='tercero'><h1>Titulo3</h1><p>texto3</p></div>").insertAfter("#segundo");

    -

