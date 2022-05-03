// // repaso calse de ayers
// var FigurasGeomatricas = ["triangulo", "circulo", "rectangulo", "trapecio", "rombo","pentagono","hexagono"];

// var segundoelemento = (FigurasGeomatricas[1]);
// var ultimoelemnto=(FigurasGeomatricas[4]);

// var ultimoelemnto2 = (FigurasGeomatricas[FigurasGeomatricas.length-1]);

// console.log(FigurasGeomatricas[0]);
// console.log(FigurasGeomatricas[1]);
// console.log(FigurasGeomatricas[2]);
// console.log(FigurasGeomatricas[3]);
// console.log(FigurasGeomatricas[4]);
// console.log(FigurasGeomatricas[5]);
// console.log(FigurasGeomatricas[6]);

// console.log("************ recorrido normal************");
// // (inicializacion,condicion,incremento)

// for (i=0 ; i < FigurasGeomatricas.length ; i++ ) {
//     console.log(FigurasGeomatricas[i]);
// }

// console.log("****************recorrido al reves *****************");
// // recorriendo el for al reves
// for(i=FigurasGeomatricas.length-1;i>=0 ; i-- ) {
//     console.log(FigurasGeomatricas[i]);
// }

//declaracion de un arreglo de vacio
let miArreglo=[];
// declaracion de un objeto validacion
let miObjeto={};

// declaracion de una variable 
let miVariable="hola";

//declaracion de un arreglo con elementos
let miArreglo2=["hola","mundo","adios"];

//declaracion de un objeto con propiedades
let miObjeto2={
    nombre:"juan",
    edad:20,
    alumno: false
}
console.log("miObjeto2");
//desafio: crear un objeto que representa un triangulo
let objetoTraingulo={
    lado1:10,
    lado2:20,
    lado3:30
}
console.log("objetoTraingulo");

//desafio: crear un objeto que representa un punto en el plano
let objetoplano = {
    x:10,
    y:20
}
//crear un objeto que represente un auto
let objetoAuto={
    marca:"ford",
    modelo:"mustang",
    color:"rojo",
    anio:2018,  
    motor:4,
    pulso:2000,
    velocidad:300,
    kilometraje:0,
    neblineros:true
}

//llamar a un elemento del arreglo miArreglo2 (segundo elemento)
miArreglo2[1]="hasta luego";

// llamar a un elemento del objeto objetoAuto 
objetoAuto["color"]="azul";
console.log("objetoAuto");

 //otra forma de llamar acceder a un elemento es con la notacion de punto
objetoAuto.color="verde";
console.log("objetoAuto");
//mostrar en pantalla solo la marca y el modelo (mediante ambas anotaciones)
console.log("la marca del auto es " + objetoAuto.marca, " y el modelo es " + objetoAuto.modelo);

//objetos que describe una casa
let Casa={
    color:"blanco",
    cantidadHabitaciones:3,
    cantidadBaños:2
}
// acceder a los elemento
console.log("la casa tiene " + Casa.cantidadHabitaciones + " habitaciones");
console.log("el color de mi casa es " + Casa["color"]);

//modificar 
Casa.color="verde";
Casa["color"]="verde";

//agregar una propiedades:
Casa.metrosCuadrados=75;
Casa["Patio"]=true;

console.log(Casa);
console.table(Casa);


// trinagulo ={
//     a:2,
//     b:3,
//     c:4,
//     perimtetro: function () {
//         return this.a+this.b+this.c;
//     }
// }
// console.log("el perimetro del triangulo es " + trinagulo);
// console.log("el perimetro del triangulo es " + perimtetro());

//re-deficion de auto
let auto={
    marca:"ford",
    modelo:"mustang",
    color:"rojo",
    puerta:5,
    escribirMarca:function(){
        console.log("marca: " + this.marca);
        console.log("modelo: " + this.modelo);
        console.log("color: " + this.color);
        console.log("puertas: " + this.puerta)
    },
    escribirTodosLosDatos:function(){
        console.log(this.marca + " " + this.modelo + " " + this.color + " " + this.puerta);
    }
}

console.log(auto.marca);
console.log(auto.modelo);
auto.escribirMarca();
auto.escribirTodosLosDatos();
console.log("********* separador**************");

//objetos con propiedades y funciones que describa un cuadrilatero
let cuadrilatero={
    base:10, 
    altura:20,
    area:function(){
        return this.base*this.altura;
    },
    perimetro:function(){
        return 2*(this.base+this.altura);
    }
}
console.log("el area del cuadrilatero es " + cuadrilatero.area(), " y el perimetro es " + cuadrilatero.perimetro());
console.log("********* separador**************");
//ejemplo  de arreglo con datos de distintos tipos
var miArreglo3=["uno",2,true,"hola que tal"];
//segundo elemento es: 
console.log(miArreglo3[1]);

console.log("********* separador**************");

var miArreglo4 = ["uno",2,true,cuadrilatero];
console.log(miArreglo4[3]);
console.log(miArreglo4[3].base);

miArreglo4[0] //"uno"
miArreglo4[1] //2
miArreglo4[2] //true
miArreglo4[3] //cuadrilatero
miArreglo4[3].base //10
miArreglo4[3].altura //20
miArreglo4[3].area() //200
miArreglo4[3].perimetro() //60
console.log("********* separador**************");






miArreglo5Directo = [
    {lado1:10,lado2:20,},
    {lado:5,lado2:6,},
    {lada:8,lado2:4,},
]

miArreglo5Directo[0]
miArreglo5Directo[1].lado2
miArreglo5Directo[2].lado1

//definir un arreglo de objetos, donde cada objeto represente una persona (rut,nombre y apellido )
var miArreglo6 = [
    {rut:"133621456-8",nombre:"juan",apellido:"perez"},
    {rut:"1325411-5",nombre:"luis",apellido:"stone"},
    {rut:"254144582-5",nombre:"arturo",apellido:"mistral"}
]
console.log("mi rut es "+ miArreglo6[0].rut, "mi nombre es " + miArreglo6[0].nombre," mi apellido es " + miArreglo6[0].apellido);
console.log("mi rut es "+ miArreglo6[1].rut, "mi nombre es " + miArreglo6[1].nombre," mi apellido es " + miArreglo6[1].apellido);
console.log("mi rut es "+ miArreglo6[2].rut, "mi nombre es " + miArreglo6[2].nombre," mi apellido es " + miArreglo6[2].apellido);
console.table(miArreglo6);

console.log("********* separador**************");
auto= {
    marca:"mazda",
    modelo:"3",
    anio:2021,
    color:"azul",
}
console.log("********* separador**************");
//recorre
for(let elemento in auto){
    console.log(elemento);
}
console.log("********* separador**************");
//recorre y escribe identificadores de las propiedades 
for(let elemento in auto){
    console.log(auto[elemento]);
console.log("********* separador**************");
    

}
for (let elemento in auto){
    console.log( elemento + "=" + auto[elemento]);
    
}
console.log("********* separador**************");
//crear un objeto pokemon que propiedades que lo define
//numero
//nombre
//tipo
//2 ataques: funciones p

poquemon ={
    numero:1,
    nombre:"pikachu",
    tipo:"electrico",
    ataques:[{
        ataque:"inpack",
        potencia:10,
    },{
        ataque:"thunderbolt",
        potencia:20,
    }
    ]
}

console.log(poquemon)