// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

// var numero = prompt("Ingresa un número para saber si es cool o no ;)");

// if (numero % 5 === 0) {
//     console.log("Genial, ese es un número cool :D");
// } else {
//     console.log("Lo siento, ese número no es nada cool :(")
// }

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

// var code = prompt("Ingresa el código: ");

// if (code === "happy") {
//     console.log("cool bro, the life is short");
// } else if (code === "sad") {
//     console.log("go for tacos bro, tacos = smile");
// } else {
//     console.log("Código inválido");
// }


// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

// var level = 51;

// if (level >= 0 && level <= 10) {
//     console.log("Paladín");
// } else if (level >= 11 && level <= 30) {
//     console.log("Caballero Dorado");
// } else if (level >= 31 && level <= 50) {
//     console.log("Dios Destructor")
// } else {
//     console.log("No eres ni digno de mención");
// }

// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

// var jugador1 = prompt("Piedra, papel o tijera...");
// var jugador2 = prompt("Piedra, papel o tijera...");

// if (jugador1 === jugador2) {
//     console.log("Empate");
// } else if (jugador1 == "piedra" && jugador2 == "tijera") {
//     console.log("Jugador 1 gana");
// } else if (jugador1 == "papel" && jugador2 == "piedra") {
//     console.log("Jugador 1 gana");
// } else if (jugador1 == "tijera" && jugador2 == "papel") {
//     console.log("Jugador 1 gana")
// } else if (jugador2 == "piedra" && jugador1 == "tijera") {
//     console.log("Jugador 2 gana");
// } else if (jugador2 == "papel" && jugador1 == "piedra") {
//     console.log("Jugador 2 gana");
// } else if (jugador2 == "tijera" && jugador1 == "papel") {
//     console.log("Jugador 2 gana")
// } else {
//     console.log("Inténtalo de nuevo")
// }



// Crea una aplicación web con JavaScript que reciba tres números digitados por el 
// usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

var n1 = parseInt(prompt("Ingresa el primer número: "));
var n2 = parseInt(prompt("Ingresa el segundo número: "));
var n3 = parseInt(prompt("Ingresa el tercer número: "));

if (n1 > n2 && n1 > n3) {
    alert(`El mayor de los tres números es ${n1}`);
} else if (n2 > n1 && n2 > n3) {
    alert(`El mayor de los tres números es ${n2}`);
} else if (n3 > n1 && n3 > n2) {
    alert(`El mayor de los tres números es ${n3}`);
} else {
    alert("Algo salió mal...");
}