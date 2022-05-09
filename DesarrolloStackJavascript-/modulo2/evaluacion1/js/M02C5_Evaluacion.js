

// let arreglo = [10, 11, 3, 20, 5];

// let mayorQueDiez = arreglo.filter(element => element > 10);

// console.log(mayorQueDiez) 



(function actualizarTiempo()  {
        'use strict';
        var time = document.querySelector('#timeSpan');
        var i = 0;
        time.style.opacity = 1;

        var timerInterval = setInterval(function () {
            time.style.opacity = time.style.opacity == 1 ? 0 : 1;

            console.log(i);

            if (i === 10) { // 10 segundos
                clearInterval(timerInterval);
            }
            i++;
        }, 1000);
    })();

//     var intervalID = window.setInterval(miFuncion, 10, 'Parametro 1', 'Parametro 2');

// function miFuncion(a,b) {

// console.log(a);
// console.log(b);
// /*clearInterval(intervalID);*/
// }


    // const reload = document.getElementById('reload');

    // reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    //     location.reload();
    // });


    max = 17
    min = 0
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
    
    function RandomWords() {
        var palabras = Math.floor(Math.random() * (max - min));
        console.log(palabras)
        return words[palabras];
    }
    ///RandomWords()
    
    var palabraAleatoria = RandomWords();
    
    var time = 10;
    
    var score = 0;
    
    function addToDOM() {
    
        var palabraAleatoriaHtml = document.querySelector("h1")
        palabraAleatoria.textContent="";
        palabraAleatoria=RandomWords();
        palabraAleatoriaHtml.textContent=palabraAleatoria;
    }
    addToDOM();
    //funcion que aumenta el score
    function aumentarScore(){
        var scoreHtml=document.querySelector("#score");
        scoreHtml.textContent=score;
    }
    //funcion que aumenta el tiempo
    function mostrarTiempoAumnetado(){
        var tiempoHtml=document.querySelector("#timeSpan");
        tiempoHtml.textContent=time;
    }
    //creacion del evento par ainput
    var cajaTexto = document.querySelector("#text");
    cajaTexto.addEventListener("keyup",(e)=>{
        if(e.key=="Enter"){                
            //comparamos palabras ingresada con la del arreglo
            if(palabraAleatoria==cajaTexto.value){
                score++;
                //aumentamos el tiempo
                time=time+3
                aumentarScore();
                mostrarTiempoAumnetado();
            }
            palabraAleatoria = RandomWords();
            addToDOM();
            cajaTexto.value ="";
        }
    });
    //funcion gameover()
    function gameOver(){
        //se debe completar la funcion
        alert("El tiempo se termino");
    }
    //funcion para actualizar el tiempo
    function actualizarTiempo(){
        time--;
        mostrarTiempoAumnetado();
        if (time < 0) {
            clearInterval(timeInterval);        
            //Aqui colocar la funcion game over
            mostrarTiempoAumnetado();
            gameOver();
        }
        //fin de l afuncion
    }
    let timeInterval = setInterval(actualizarTiempo, 1000);