let plantas=["ruda","oregano","cilantro","perejil","tomate"];

console.table(plantas);

//eliminar una plnata al final del arreglo
//eliminar una plnata al inicio del arreglo
//agregar una plata al final del arreglo
//eliminar una planta que se llama cilandro

plantas.pop();//elimina el ultimo elemento del arreglo
console.table(plantas);
plantas.shift();//elimina el primer del arreglo
console.table(plantas);
plantas.push("menta");//agrega un elemto a la lista 
console.table(plantas);
plantas.splice(2,1);//elimina un elemento del arreglo
console.table(plantas);

//alternativa para elimar cilnadro sin saber su posicion
let plantas1=["ruda","oregano","cilantro","perejil","tomate"];

console.table(plantas1);

var platas1=[];
for(let i=0;i<plantas1.length;i++){
    if(plantas1[i]!="cilantro"){
        platas1.push(plantas1[i]);
    }
}
console.table(platas1);

//crear una funcion generica que funcione con cualquier arreglo para
function eliminar(arreglo,elemento){
        var resultado=[];
        for(let i=0;i<arreglo.length;i++){
            if(arreglo[i]!=elemento){
                resultado.push(arreglo[i]);
            }
        }

    }

//funcion filter
var numeros=[1,2,3,4,5,6,7,8,9,10];
// quiero los numeros que sean distintos a 3
var numero2=numeros.filter(function(numero){
    return numero!=3;
});
console.log(numero2);
//optener los numeros mayores a tres
var numero3=numeros.filter(function(numero){
    return numero>3;
}
);
console.log(numero3);
//optener los numeros pares
var numero4=numeros.filter(function(numero){
    return numero%2==0;
}   //optener los numeros pares
);
console.log(numero4);

var numero5=numeros.filter(function(numero){
});

//lo mismo pero mas cortos
numero4=numeros.filter(numero=>numero%2==0);

console.log(numero4);

console.log("----------------------------------");
plantas= ["ruda","oregano","cilantro","perejil","tomate"];
//eliminar la plata que se llama perejir
var p1 = plantas.filter(function(p){
    return p != "perejil"

})
console.log(p1);

//eliminar las plantas que empiecen con "p"

var p2 = plantas.filter(function(p){
    return p.charAt(0) != "p"
})
console.log(p2);
console.log("----------------------------------");

var p3 = plantas.filter(function(planta){
    return plantas[0] != "p"
})

console.table(p3);

console.log("----------------------------------");
//eliminar las plantas que terminen con "0"
var p3=plantas.filter(function(p){
    return p[p.length-1] != "0";
})

console.log(p3);

console.log("----------------------------------");
var fecha=new Date();//nos da la fecha actual
console.log(fecha);
console.log("----------------------------------");
var anio=fecha.getFullYear();//nos da el anio actual
alert("el año actual es: "  + anio);


var hoy= new Date(2022,10); //definimos una fecha ofligatoriamente años,mes
console.log(hoy);

// pedir el año de naciemnto y entrege la edad actualizar
var anioNacimiento=prompt("ingrese su año de nacimiento");
var edad=fecha.getFullYear()-anioNacimiento;
alert("su edad es : " + edad);
console.log("su edad actual es:" + edad);
console.log("----------------------------------");
console.log(fecha.getDate());
console.log("----------------------------------");
console.log(fecha.getMonth());
console.log("----------------------------------");
console.log(fecha.getDay());
console.log("----------------------------------");
console.log(fecha.toDateString());
console.log("----------------------------------");
console.log(fecha.toTimeString());
console.log("----------------------------------");

class Usuario{
    constructor(nombre,apellido,edad,correo,telefono){
        this.nombre=nombre; //propiedad
        this.apellido=apellido;
        this.edad=edad;
        this.correo=correo;
        this.telefono=telefono;
    }
    ingresar= function(){
        console.log("bienbenido: " + this.nombre);
    }
    salir=function(){
        console.log("gracias por visitarnos" + this.nombre);
    }
}
    //crear un objeto de la clase usuario
var usuario1=new Usuario("juan","perez",20,);
var usuario2=new Usuario("pedro","gonzalez",30,);
var usuario3=new Usuario("jose","lopez",40,);

var arregloUsuarios =[usuario1,usuario2,usuario3];
console.log("el nombre del usuario es: " + usuario1.nombre);

usuario1.ingresar();
console.log("el nombre del usuario es : " + arregloUsuarios[1].nombre);

    //crear una funcion que reciba un arreglo de usuarios y muestre el nombre de cada uno   


class Administrador extends Usuario{
    constructor(nombre,password,sistema){
        super(nombre,password,sistema);
        this.sistema=sistema;
    }
    eliminarUsuarios=function(nombre){
        arregloUsuarios = arregloUsuarios.filter(function(u){
            return u.nombre != nombre;
        } 
        );
    }
}
ingresar=function(){
    console.log("bienbenido: " + this.nombre);
}

var administrador1=new Administrador("juan","perez",20,);
console.log("el nombre del administrador es : " + administrador1.nombre);

console.log("----------------------------------"); 

//crear un clase figura geometrica, con todos los lados iguales del poligono
//propiedades: numero de lados que
//largo de lado
//funcion perimetro
class figuraGeomatrica{
    constructor(cantidadLados,medida){
        this.numeroLados=cantidadLados;
        this.mediada=medida;
    }
    perimetro=function(){
        return this.cantidadLados*this.mediada;
    }

        
}
//------------------------------------------
class Cuadradro extends Figura{
    constructor(medida){
        super(4,medida);
}
    area=function(){
        return this.medida*this.medida;
    }
}

class Triangulo extends Figura{
    constructor(medida){
        super(3,medida);
}
area=function(){
    let base=this.medida;   
    let altura=this.medida;
}
}





//derivar y heredar , generar triangulo y cuadradro
//donde se defina como fijo el numero de lados y se agregue la funcion area




