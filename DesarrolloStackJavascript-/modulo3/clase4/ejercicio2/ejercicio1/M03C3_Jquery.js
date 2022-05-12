let foto=document.querySelector("img");
// let foto =$("img");
let btn=document.querySelector("#boton");
// let btn =$("#boton");

// console.log(foto);

// console.log(btn);
//agregar click
btn.addEventListener("click",function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
        let obj=data;
        let URLimagen=data.message;

        foto.setAttribute("src",URLimagen);

})
});
// bt.addEventListener("click",function(e){
// }
// );

//crear una funcion que elija un numero entero al azar entgre 1 y 8000
//usar esta función para cambiar buscar un pokemon al azar (po numero)
//cuando se cargue , poner la informacion en el html 

console.log("**********************************************************************************************************************");

let foto1=document.querySelector("img");

let btn1=document.querySelector("#botongatos");



btn.addEventListener("click",function(e){
    $.getJSON(" https://api.thecatapi.com/v1/images/random", function(data){
        let obj=data;
        let URLimagen=data.message;

        foto.setAttribute("src",URLimagen);

})
});


// bt.addEventListener("click",function(e){
// }
// );
