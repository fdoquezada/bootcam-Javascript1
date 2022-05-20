let foto=document.querySelector("img");
//let foto2 = $("img");
let btn=document.querySelector("#boton");
//let btn=$("#boton");

console.log(foto);
//console.log(foto2);

console.log(btn);


//agregar click
btn.addEventListener("click",function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
        let obj=data;
        let URLimagen=data.message;
       
        foto.setAttribute("src",URLimagen);
    })
});


async function leerDatos(){
    let datos= await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(datos);
    let texto = await datos.text();
    console.log(texto);

}
leerDatos();

async function leerPerros(){
    let data = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(data);
    let datos =await data.json()
    console.log(data);
}
leerPerros();


var a=0;
var b=[1,2,3];
var c={
    nombre:"dato",
    cantidad:2,
    mostrar:function(){
    console.log(nonbre);
}
}

console.log(a.__proto__);
console.log(a.__proto__);
console.table(a.__proto__);

class D{
    constructor
}
