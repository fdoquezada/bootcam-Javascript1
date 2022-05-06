

// let arreglo = [10, 11, 3, 20, 5];

// let mayorQueDiez = arreglo.filter(element => element > 10);

// console.log(mayorQueDiez) 



(function()  {
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

    var intervalID = window.setInterval(miFuncion, 10, 'Parametro 1', 'Parametro 2');

function miFuncion(a,b) {

console.log(a);
console.log(b);
/*clearInterval(intervalID);*/
}


    // const reload = document.getElementById('reload');

    // reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    //     location.reload();
    // });


