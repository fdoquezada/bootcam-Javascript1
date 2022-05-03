let numero;
let numeroGuardado;
while(numero!=0){
    numero=parseInt(prompt("Introduce un numero"));
    if(numero>numeroGuardado){
        numeroGuardado=numero;
    }
        
    }
alert("El numero mayor es: " + numeroGuardado);
alert("***********  fin *********");
//resivir palabra hasta que le usuario ingrese la palabra final
//esta palabras deben guardarse en un arreglo y al final responde al usuario cuntas palabras empiezen con a 

let palabra;
let palabra=[];
let contador=0;

while (palabra!="final"){
    palabra=prompt("Ingrese una palabra").toLowerCase();
    palabra.push(palabra);
    if (palabra[0]=="a"){
        contador++;
    }
}