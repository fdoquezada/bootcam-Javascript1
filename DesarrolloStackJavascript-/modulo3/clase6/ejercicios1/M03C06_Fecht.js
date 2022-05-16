// ejercicio apli countries 2

// s.getJSON("https://restrocountrires.com/v3.1/mane/peru",funcion(date))
//  console.log(data);
//  console.log("-------------------------------");
//  console.log("nombre: " +  data[0].name.official);
//  console.log("capital :" + data[0].capital[0]);


// function saludar(nombre){
//     console.log("hola : " + nombre);
// }

// function ejecutar(funcionCallback){
//     let persona="pedro";
//     funcionCallback("hola " + persona)
// }

// ejecutar(saludar);
// ejecutar(ejecutar);

// //construir una promesa
// function sumar(x,y) {
//     var promesa = new Promise(function(resolve,reject)){
//         if (x==undefined || y==undefined){
//             reject("error falta un numero");
//     }else{
//         resolver(x+y);
//     }

//     });
//     return promesa;
// }
/* 
let numero1=10;
let numero2;


sumar(numero1,numero2).then(function(data){
    console.log(data);
}).catch(function(e)){
    console.log(e);

}
 */

// fetch("test.txt").then(function(data){
//     console.log(data);
//     data.text().then(function(data2){
//         console.log(data2);
//     })
// })

//haremos lo mismo pero usando async await

// async function leerDatos(){
//     let datos= await fetch("test.txt")
//     console.log(datos);
//     let texto = await datos.text();
//     console.log(texto);

// // }
// async function leerPerros(){
//     let data = await fetch("https://dog.ceo/api/breeds/image/random");
//     console.log(data);
//     let datos =await data.json()
//     console.log(data);
// }
// leerPerros();

// fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
//     console.log(data);
//     data.json().then(function(datos){
//         console.log (datos);
//     })
// })

// async function obtenerPokemon(numero){
//     let respuesta =await fetch("https://pokeapi.co/api/v2/pokemon"+numero);
//     let datos=await respuesta.json();
//     console.log(datos);
// }
// obtenerPokemon(101);

async function cienPokemons(){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    let datos = await respuesta.json();
    console.log(datos);
    console.log ("------------------------");
    for(i=0;i<datos.results.length;i++){
        let texto =datos.results[i].name +":";
        let url=datos.results[i].url;
        //
        //
        let image = await fetch(url);
    }
}

cienPokemons();

