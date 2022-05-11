// Ejercicio de Clases y objetos
// 1.- Crear tres objeto (sin clase) que represente un gato: debe tener las propiedades nombre, raza,
// tipo pelaje, sexo.
// 2.- crear la clase gato, con las mismas propiedades que el ejercicio anterior. A partir de este, crer
// tres nuevos objetos
// 3.- Crear una clase para representar un televisor, con propiedades Tamaño, marca y modelo. Crear
// dos objetos a partir de esta clase
// 4.- Crear una clase que represente un archivo, con propiedades nombre, tamaño y ruta. Crear un
// objeto a partir de esta clase.
// 5.-Crear una clase para representar una canción: con nombre, autor y duración.
// 6.- Crear una clase para representar un disco de música, debe contener: nombre del disco, autor,
// año y un arreglo con las canciones del disco (que usará objetos del tipo canción). Crear dos objetos
// a partir de esta clase
// 7.- Crear una clase llamada playlist, la que contenga: nombre, género, un arreglo con una lista de
// canciones (del ejercicio 5). El arreglo al principio debe estar vacío.
// 8.- Agregar a la clase playlist una función “agregarCancion(canción)” que agregue canciones a la
// lista. Esta canción es un objeto del tipo canción definido en el ejercicio 6
// 9.- Agregar a la clase playlist una funcionalidad para eliminar una canción por nombre
// 10.- Agregar una funcionalidad para eliminar varias canciones que tengan el mismo autor (se debe
// pasar el nombre del autor en el parámetro de la función).
// 11.- crear a partir de esta clase, dos objetos. Agregar 10 canciones mediante la función.
// 12.- crear una clase “Pelicula”, que contenga: nombre, año, director,género, reparto (arreglo).
// Agregar las funciones mostrarReparto (que muestre los actores en una tabla) y la función
// agregarFavoritos, para poner la propiedad “favorito” en true (inicialmente debe ser false). A partir
// de esta clase crear 3 objeto película.
// 13.- Crear una clase llamada punto, que debe tener un valor para X y otro para Y.
// 14.- crear una clase lamada vector, que contendrá dos puntos y una función para calcular la
// distancia entre esos puntos (raíz de ((x2-x1)2+(y2-y1)2
// ). 



// 1.- Crear tres objeto (sin clase) que represente un gato: debe tener las propiedades nombre, raza,
// tipo pelaje, sexo.
var gato1 = {
    nombre:"manchas",
    raza:"ragdoll",
    pelaje:"largo esponjoso",
    sexo:"femenino"
}


// 2.- crear la clase gato, con las mismas propiedades que el ejercicio anterior. A partir de este, crer
// tres nuevos objetos
// class gato{
//     constrcuctor(nombre,raza,pelaje,sexo){
//     this.nombre = nombre;
//     this.raza = raza;
//     this.pelaje = pelaje;
//     this.sexo=sexo;
//     }
// }
// var gato= new gato("manchas","ragdoll","largo esponjoso","femenino");
// var gato1= new gato("leon","persa", "largo","masculino");
// var gato2= new gato("coti","siames", "corto","femenino");



// console.log("el nombre de tu gato es " + nombre + " y su raza es " + raza + " y su pelaje es " + pelaje + " y su sexo es " + sexo)
// 3.- Crear una clase para representar un televisor, con propiedades Tamaño, marca y modelo. Crear
// dos objetos a partir de esta clase

// class televisor{
//     constructor(tamaño,marca,modelo){
//         this.tamaño = tamaño;
//         this.marca = marca;
//         this.modelo = modelo;

// }mostrar(){
//     console.log("el tamaño de tu televisor es " +tamaño+ " y su marca es " +marca+ " y su modelo es " +modelo);
// }
// }

// var televisor = new televisor("32","samsung","tvhd2541");
// var televisor = new televisor("42","lg","hd251");

// televisor.mostrar();

// 4.- Crear una clase que represente un archivo, con propiedades nombre, tamaño y ruta. Crear un
// objeto a partir de esta clase.
// class archivo{
//     constructor(nombre,tamaño,ruta){
//         this.nombre = nombre;
//         this.tamaño = tamaño;
//         this.ruta = ruta;
//     }
//     mostrar(){
//         console.log("el nombre de tu archivo es " + this.nombre + " y su tamaño es " + this.tamaño + " y su ruta es " + this.ruta);
//     }
    
// }
// var archivo = new archivo("archivo1","10","c:\\archivo1");
// var archivo = new archivo("archivo2","20","c:\\archivo2");
// archivo.mostrar();


console.log("***********************" + "fin de la instruccion" + "***********************");

console.log("***********************" + "fin de la instruccion" + "***********************");
// 5.-Crear una clase para representar una canción: con nombre, autor y duración. Crear un objeto a
// partir de esta clase.
        class cancion{
            constructor(nombre,autor,duracion){
                this.nombre= nombre;
                this.autor = autor; 
                this.duracion = duracion;
            }


        }
        var cancion1 = new cancion("You Could Be Mine","Guns N' Roses","05:05");
        var cancion2 = new cancion("Paradise City","Guns N' Roses","06:48");
        var cancion3 = new cancion("Civil War","Guns N' Roses","07:42");
        console.log("el sounds track de terminator es " + cancion1.nombre + " del grupo: " + cancion1.autor + " el tema dura : " + cancion1.duracion);
        console.log(cancion2.nombre + " " + cancion2.autor + " " + cancion2.duracion);
        console.log(cancion3.nombre + " " + cancion3.autor + " " + cancion3.duracion);

        console.log("***********************" + "fin de la instruccion" + "***********************");
// 6.- Crear una clase para representar un disco de música, debe contener: nombre del disco, autor,
// año y un arreglo con las canciones del disco (que usará objetos del tipo canción). Crear dos objetos
// a partir de esta clase
class disco{
    constructor(nombre,autor,año,canciones){
        this.nombre = nombre;
        this.autor = autor;
        this.año = año;
        this.canciones = canciones;
    } 


}
     
console.log("***********************" + "fin de la instruccion" + "***********************");


//       7.- Crear una clase llamada playlist, la que contenga: nombre, género, un arreglo con una lista de
// // canciones (del ejercicio 5). El arreglo al principio debe estar vacío.
       

            class playlist{  //clase cancion
            constructor(nombre,genero){
                this.nombre= nombre;
                this.autor = autor;
                
            }
            mostrar(){
                console.log("el nombre de la cancion es:  " + this.nombre + "  su autor es:  " + this.autor + " la cancion dura: " + this.duracion);    

            }
        }
        var cancion1 = new cancion("You Could Be Mine","Guns N' Roses","05:05");
        var cancion2 = new cancion("cancion2","autor2","10:00");
        var cancion3 = new cancion("cancion3","autor3","10:00");
        var playlist1 = new playlist("","Guns N' Roses","05:05");
        var playlist2 = new playlist("playlist2","Guns N' Roses","05:05");
        var playlist3 = new playlist("playlist3","Guns N' Roses","05:05");
        playlist1.mostrar();

        // 8.- Agregar a la clase playlist una función “agregarCancion(canción)” que agregue canciones a la
        // // lista. Esta canción es un objeto del tipo canción definido en el ejercicio 6

class playlist {

}
        console.log("***********************" + "fin de la instruccion" + "***********************");
// 9.- Agregar a la clase playlist una funcionalidad para eliminar una canción por nombre






console.log("***********************" + "fin de la instruccion" + "***********************");
// 10.- Agregar una funcionalidad para eliminar varias canciones que tengan el mismo autor (se debe
// pasar el nombre del autor en el parámetro de la función).





console.log("***********************" + "fin de la instruccion" + "***********************");
// 11.- crear a partir de esta clase, dos objetos. Agregar 10 canciones mediante la función.






console.log("***********************" + "fin de la instruccion" + "***********************");
//12.- crear una clase “Pelicula”, que contenga: nombre, año, director,género, reparto (arreglo).

class pelicula{
    constructor(nombre,autor,duracion){
                this.nombre= nombre;
                this.autor = autor;
                this.duracion = duracion;
                this.reparto=
            }

        }
        var pelicula1 = new pelicula("matrix","Hermanas Wachowski","02:16:00");
        var pelicula2 = new pelicula("star wars","George Lucas","02:01:00");
        var pelicula3 = new pelicula("star trek","Gene Roddenberry","02:07:00");
        console.log("El nombre de la pelicula es:  " + pelicula1.nombre + "  su autor es:  " + pelicula1.autor + " la pelicula dura: " + pelicula1.duracion);
        console.log("El nombre de la pelicula es:  " + pelicula2.nombre + "  su autor es:  " + pelicula2.autor + " la pelicula dura: " + pelicula2.duracion);
        console.log("El nombre de la pelicula es:  " + pelicula3.nombre + "  su autor es:  " + pelicula3.autor + " la pelicula dura: " + pelicula3.duracion);