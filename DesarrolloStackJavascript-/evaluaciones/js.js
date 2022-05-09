








const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];


let palabra = document.querySelector("h1")
let palabraAleatoria = RandomWords();
let score = 0;
palabra.innerHTML = palabraAleatoria

function RandomWords() {
    let numero = Math.floor((Math.random() * 19));
    //console.log(numero)

    return words[numero];
}

let tiempo = 10
let textoInput = document.querySelector("input");
let puntos = document.querySelector("#score");
let tiempoRestante = document.querySelector("#timeSpan");

textoInput.addEventListener("keyup", (e) => {
    let Input = e.target.value;
    console.log(Input);

    if (words.includes(Input)) {


        console.log("palabra son iguales")
        tiempo = tiempo + 3;
        textoInput.value = "";
        palabraAleatoria = RandomWords();
        palabra.innerText = palabraAleatoria
        score++;
        puntos.innerText = "Puntaje es =" + score;



    }

})



function actualizarTiempo() {
    document.getElementById("timeSpan").innerText = tiempo;
    if (tiempo == 0)
        gameOver();

    else {
        tiempo--;
        setTimeout("actualizarTiempo()", 1000);
    }


}
actualizarTiempo()


function gameOver() {
    if (tiempo == 0)
    alert("Se te acabo el tiempo")
    botonclick()

}

let button=document.createElement("button");
button.innerHTML= "Reiniciar";
button.setAttribute("onclick","location.reload()");
console.log(button)

function gameOver(){

    let NuevoTitulo=document.querySelector ("#end-game-container");
    NuevoTitulo.innerHTML= "upss. tu tiempo termino";
    console.log(NuevoTitulo)

    let button=document.createElement("button");
    button.innerHTML= "Volver a empezar";
    button.setAttribute("onclick","location.reload()");
    console.log(button)

    let container=document.querySelector("#end-game-container");
    container.appendChild (button);
}
