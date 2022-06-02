//caragar elemento HTML
//funcion:document.querySelector
//por nombre (etiqueta), pos su nid(#)  o por clase (.class)
//caraga del formulario
let formulario=document.querySelector("#formulario");
console.log(formulario);

//cargar del campo de texto (input de tipo text)
let texto =document.querySelector("#texto");

//carga del boton
let boton=document.querySelector("#boton");
// cargar varios elementos al mismo tiempo
//let parrafo=document.querySelectorAll("p");//carga 1 elemento , el primero
let parrafo=document.querySelectorAll("p");
console.log(parrafo);
console.log("*************************************************************");
//modificar elementos html
//texto
let p=document.querySelector("p");
p.innerText="hola mundo cambiado con Js";
p.textContent="hola mundo cambiado con Jsss";
 //cambiar el texto del boton
boton.innerText="ejecutar";

 //cambiar css
p.setAttribute("class","fondoAzul");
p.classname="fondoAzul";
p.classList.add("fondoAzul");
//atributos
//texto.removeAttribute("readonly"  , false);
//texto.setAttribute("disabled", true);


//3 darle eventos a los elementos HTMLAllCollection
// click , mouseover ,mouseleave, keydown, load. 
p.addEventListener("clicksobre",function(){
    p.className="fondoAzul";
});

//cargar el div y cambair  el fondo al hacer el click
let div=document.querySelector("div");
div.addEventListener("click",function(e){
    div.className="fondoAzul";
})

//enviar un mensaje a pantalla con aler cuando se haga click en el boton 
//click en el boton
boton.addEventListener("click",function(e){
    alert("click");
})

//cuando pasemos el mouse por encima del input,cambiar el fondo del input
//cuando saquemos el mouse , cambiar el fondo a balco
texto.addEventListener("mouseover",function(e){
    texto.className="fondoAzul";
})

//4 creacion de parrafo
//documen.createElement

// crear un parrafo
let nuevoParrafo = document.createElement("P");

// crear un nuevo input
let  nuevoTexto=document.createElement("input");

//crear un nuevo div
let nuevoDiv=document.createElement("div");

//ahora se aplica el paso 2, se modifica el elemento
//modifica parrafo nuevo(texto)

nuevoParrafo.innerText="nuevo texto";

// modifica el input (atributos )
nuevoTexto.setAttribute("type","text");

// modificar el del div
nuevoDiv.className="fondoAzul";

//5 agregar elemntos recion creados (mediante codigo)
//appendChild, prependChild
//contenedor.apeendChild(hijo);

// agregar el nuevo parrafo al div existente
div.appendChild(nuevoParrafo);

//agregar el input al formulario
formulario.appendChild(nuevoTexto);

//agregar el nuevo parrafo al nuvo div
nuevoDiv.appendChild(nuevoParrafo);

//agregar el nuevo div a la pagina
document.body.appendChild(nuevoDiv);

//6 eliminar elementos
//removeChild(elemento a eliminar)
 

// eliminar el primer parrafo del div
div.removeChild(p);

//eliminar el div nuevo
document.body.removeChild(nuevoDiv);



