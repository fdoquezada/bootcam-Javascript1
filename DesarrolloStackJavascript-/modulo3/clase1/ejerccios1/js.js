// class rectangulo{

//     constructor(base, altura){
//         this.base = base;
//         this.altura = altura;

// }
// area(){
//     return this.base * this.altura;
// }
// }
// class usuario{
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
// }
// let usuario(carlos, galleguillos, 20);  
// console.log(usuario);
// var fernando(nombre, apellido, edad);
// console.log(fernando);

// var usuario1 = new usuario('juanito', "123");
// var usuario2 = usuario("pablito", "456");
// var rectangulo = new rectangulo(5.3);.

// //agregar una propiedad ela usuario para
// usuario1.activo=false;
// console.log(usuario1);
// console.log(usuario2);
// //llamar a una propiedad que no esta definida
// delete usuario1.activo;
// console.log(usuario1);
// delete usuario1.password;
// console.log(usuario1);
// console.log(usuario2);

// //redefinir la clase rectangulo para que me entregue el area y el procedimiento
// class Rectangulo{
//     constructor(largo, ancho){
//         this.base = largo;
//         this.altura = ancho;
//     }
// }


class Rectangulo{
    constructor(largo, ancho){
        this.largo = largo;
        this.ancho = ancho;
    }
}
    area= funcion(){
        return this.largo * this.ancho;
    }
    perimetro= funcion(){
        return (this.largo * 2) + (this.ancho * 2);
}

let rect1= new Rectangulo(5, 3);
console.log(rect1.area());
rect1.ancho=30;
console.log(rect1.area());

//crear un formulario de registro, y al lado (0 baajo) crear un u
//usuarios registro

class usuarios{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

}
}

const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);