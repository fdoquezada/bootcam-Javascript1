class nombre{
    constructor(nombre, apellido, rut){
        this.nombre = nombre;
        this.apellido = apellido;
        this.rut = rut;
    }
    mostrar(){
        console.log(this.nombre + " " + this.apellido + " " + this.rut);
    }

    static mostrarNombre(){ 
        console.log("Nombre: " + this.nombre);
    }
}   
var persona = new nombre("Juan", "Perez", "12345678-9");
var persona = new nombre("Pedro", "Perez", "12345678-9");
persona.mostrar();

