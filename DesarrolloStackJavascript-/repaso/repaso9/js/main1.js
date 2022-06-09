// dibujar  la tabla de 1 (1.12)

/*
1 * 1 = 1;
1 * 2 = 2;
1 * 3 = 3;

...
*/

var tabla =1;
var limiteInferior = 1;
var limiteSuperior = 10;
for (let iteradorI=limiteInferior; iteradorI<=limiteSuperior; iteradorI+=2) {
    console.log("*** tabla del " + iteradorI +"***");

    for(let iteradorJ=limiteInferior; iteradorJ<=10; iteradorJ++) {
        
        console.log(iteradorI + " * " + iteradorJ+ " = " +iteradorI*iteradorJ);
    }




}







