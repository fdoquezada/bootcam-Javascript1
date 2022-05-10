// Ejercicio M03 C01
// JavaScript Avanzado - Ejercicio en clase 01
// Realizar un constructor de Animal, para instanciar 3 animales (gato, pájaro, pez). El
// constructor tendrá las siguientes propiedades: nombre, cantidad de patas,
// alimento.
// Además deberá agregarle un método para que al mostrar en la consola, se muestre
// la función mandarAComer()

class animal {
    constructor(nombre, cantidadPatas, alimento) {
        this.nombre = nombre;
        this.cantidadPatas = cantidadPatas;
        this.alimento = alimento;
    }
}
let animal1 = new animal("leon", 4, "carne");
console.log(animal1);




// Ejercicio M03 C02

