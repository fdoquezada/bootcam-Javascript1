// Ejercicio M03 C01
// JavaScript Avanzado - Ejercicio asincrónico 01
// En este ejercicio, deberá poner en práctica lo aprendido en esta clase, creando
// Objetos, Clases y Métodos.
// Crear El Molde:
// 1. Defina una Clase llamada Libro que posea las siguientes Propiedades:
// nombre del libro, autor, editorial y género.
// 2. Luego, creá un Método en la definición de la Clase llamado mostrarLibro,
// que devuelva un mensaje con todas las Propiedades que posee un libro.
// Instanciar Los Objetos:
// Instancia 3 Objetos de tipo Libro con diferentes valores e invoca al Método
// mostrarLibro desde cada Objeto

class libros{
    constructor(nombre_del_libro, autor, editorial, genero){
        this.nombre_del_libro = nombre_del_ibro; 
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
       }
    }
const libro1 = new libros("El señor de los anillos", "J.R.R. Tolkien", "Minotauro", "Fantasia");
const libro2 = new libros("El señor de los anillos", "J.R.R. Tolkien", "Minotauro", "Fantasia");
const libro3 = new libros("El señor de los anillos", "J.R.R. Tolkien", "Minotauro", "Fantasia");

console.log(libro1);
console.log(libro2);
console.log(libro3);


let libros = [nombre_del_ibro, editorial, genero];
console.log(libros[1]);