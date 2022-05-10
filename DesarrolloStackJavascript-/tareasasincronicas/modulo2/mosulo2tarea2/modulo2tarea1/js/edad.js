// Ejercicio M02 C01
// JavaScript Básico - Ejercicio asincrónico 03
// Realizará una calculadora de edad.
// Siga estos pasos:
// 1. Pregunte al usuario su edad.
// PISTA: Si no recuerda cómo hacerlo, pruebe con lo siguiente:
// prompt() → prompt (“Indique cuál es su edad”)
// Recuerde: ¡Guarde este valor en una variable porque la usará más adelante!
// 2. Calculá cuántos días representa. Por ejemplo: Si tiene 28 años, serán 10.220
// días.
// ★ Para este ejercicio, considere que un año tiene 365 días. No considere el año
// bisiesto.
// 3. Muestre la respuesta al usuario.
// JavaScript Básico - Ejercicio asincrónico 04
// Ahora realizará una calculadora de abastecimiento de por vida.
// ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averígüelo!
// 1. Almacena tu edad en una Variable.
// 2. Guarda tu edad máxima en otra Variable.
// 3. Declara una Variable con el nombre de tu snack favorito
// 4. Estima cuántos snacks comerás por día y guardalo como un número en una
// Variable.
// 5. Calculá cuántos snacks te quedan por comer en el resto de tu vida.
// 6. Muestre el resultado en un alert: "Necesitarás NN snacks para que te
// alcancen hasta los XX años."
// 7. Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el
// resto de tu vida.



alert('hola usuario bienvenido a la calculadora de edad !!!');

var userName = prompt('Como te llamas ?')

alert(`Hola ${userName}, feliz de atender tus consultas`);

var useredad = prompt(`${userName}  ¿Cual es tu edad?`);

var tiempo = useredad * 365;

alert("llevas" + " " + tiempo + " " + "dias" );

alert("podemos seguir con las preguntas?")

var edad = prompt(`${userName}   ¿Cual es tu edad?`);

var cuantoviviras = prompt(`${userName}  ¿Cuantos años viviras?`);

var snacks =(prompt(`${userName} ¿Cual snacks prefieres?`));

var snacks1 = prompt(`${userName} ¿Cuantos snacks vas a comer por dia ?`);

var tuquedad = tiempo - useredad ;

 var chutaquecomes = (tuquedad *365)*snacks1;

 var precio;
 var gastototal;
 

 alert("para eso necesoitaras"  + chutaquecomes +  "... "+ snacks + "  para que te alacance hasta los "+tiempo+" dias");

var precio = prompt(`${userName} ¿Cual es el precio de los snacks?`);

var gastototal = chutaquecomes * precio;

alert("Compraras $"+gastototal+" en comida para resto de tu vida.");

alert(` ${userName} Gracias por usar nuestra calculadora de edad ten un buen dia`);









