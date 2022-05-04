// var encabezado = document.querySelector("#header");
// encabezado.classname = "estilo2";
// encabezado.innerHTML = document.querySelector("#header h1");


// var tituloPincipal.innerHTML = "<i>Titulo cambiado</i>";

// tituloPincipal.innerHTML="<i>Titulo cambiado 2</i>";
// var primerParrafo.innerHTML=("p");
// primerParrafo.innerHTML =" hola que tal";

var parrafos=document.querySelectorAll("p");
parrafos[1].classname= "estilo2";
console.log(parrafos.length);

//asignar el estilo1 a los elemtos pares y asignar estilo 2
//a los impares
for (i=0; i<parrafos.length; i++) {
    parrafos[i].innerText="------------------";
    }


// //asignar el estilo1 a los elemtos pares y asignar estilo 2
// var footer=document.querySelector("footer")
// footer[1].classname="estilo2";

// for (i=0; i<footer.length; i++) {
//     footer[i].innerText="------------------";
// }

var elementosli=document.querySelectorAll("li");

for(i=0;i<elementosli.length;i++){
    if (i%2==0){
        elementosli[i].classname="estilo1";
    }else{
        elementosli[i].classname="estilo2";
    }
}
var link=document.querySelector("a");
console.log("link :" + link.getAttribute("href"));

link.setAttribute("href","http://www.google.com");

var imagen=document.querySelector("img");

imagen.setAttribute("src","data:image/jpeg;base64,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");

//crear un elemento elemento llamado marca
var nuevoDiv=document.createElement("div");
nuevoDiv.innerHTML="nuevo div";
nuevoDiv.style.color="red";
//agregar a la pagina
document.body.appendChild(nuevoDiv);


//agregar direecion al footer(dentro de  un li)
var nuevoLi=document.createElement("li");
nuevoLi.innerText="Las camelias 123";
nuevoLi.className="estilo2";
//como lo agrego a la lista ? (ul)
// var listaU1=document.getElementById("ul");
// listaU1.appendChild(nuevoLi);

//desafio :agregar un nuevo elemento al contenido que conyenga
//un titulo y un parrafo y un linked
var nuevotitulo=document.createElement("h2");
nuevotitulo.innerHTML="titulo";
document.body.appendChild(nuevotitulo);

var parafo1=document.createElement("p");
parafo1.innerHTML="parrafo";
document.body.appendChild(parafo1);
parafo1.className="estilo2";
parafo1.style.color="red";


var link=document.createElement("link");
link.innerHTML="link";
document.body.appendChild("link");

