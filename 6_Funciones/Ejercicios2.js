// FUNCIONES CON PARÁMETROS

//1. Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo

// function evaluarNumero(numero) {
//     if (numero > 0) {
//         console.log("El número es positivo");
//     } else if (numero < 0) {
//         console.log("El número es negativo");
//     } else {
//         console.log("Eso no es un número");
//     }
// }

// evaluarNumero(prompt("Ingresa un número"));

// function evaluarNumero(numero) {
//     if (numero > 0) {
//         return "El número es positivo";
//     } else if (numero < 0) {
//         return "El número es negativo";
//     } else {
//         return "Eso no es un número";
//     }
// }

// let res = evaluarNumero(prompt("Ingresa un número"));
// console.log(res);

// 2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

// function muestraClienteyAhorro(nombreCliente, ahorroCliente) {
//     console.log(`Nombre del cliente: ${nombreCliente} Ahorro del cliente: $${ahorroCliente} `);
// }

// muestraClienteyAhorro("Juan", 2300);

// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

// function promediarCalificaciones(arregloCalificaciones) {
//     let sumatoria = 0;

//     for (let i = 0; i < arregloCalificaciones.length; i++) {
//         sumatoria = sumatoria + arregloCalificaciones[i];
//     }

//     let promedio = sumatoria / arregloCalificaciones.length;
//     console.log(`el promedio es ${promedio}`);
// }

// promediarCalificaciones([8, 7, 5, 8, 9, 10]);

// function promediarCalificaciones(arregloCalificaciones) {
//     let sumatoria = 0;

//     for (let i = 0; i < arregloCalificaciones.length; i++) {
//         sumatoria = sumatoria + arregloCalificaciones[i];
//     }

//     let promedio = sumatoria / arregloCalificaciones.length;
//     return `el promedio es ${promedio}`;
// }

// console.log(promediarCalificaciones([8, 7, 5, 8, 9, 10]));

// 4. Crear una función que reciba un número y nos diga si es par o impar

// function evaluarNumeroParImpar(numero) {
//     if (numero % 2 === 0) {
//         console.log("Número par");
//     } else if (numero % 2 !== 0) {
//         console.log("Número impar");
//     } else {
//         console.log("Eso no es un número");
//     }
// }

// evaluarNumeroParImpar(45);

// function evaluarNumeroParImpar(numero) {
//     if (numero % 2 === 0) {
//         return "Número par";
//     } else if (numero % 2 !== 0) {
//         return "Número impar";
//     } else {
//         return "Eso no es un número";
//     }
// }

// console.log(evaluarNumeroParImpar(34));

// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)

// function entregarDescuento(codigo) {
//     if (codigo === "PERRO") {
//         console.log("Tu descuento es del 10%");
//     } else if (codigo === "GATO") {
//         console.log("Tu descuento es del 50%")
//     } else if (codigo === "LOMBRIZ") {
//         console.log("Tu descuento es del 5%");
//     } else {
//         console.log("No tienes un código de descuento válido");
//     }
// }

// entregarDescuento("PATO");

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su perímetro

// function calcularTriangulo(base, altura) {
//     console.log(base + base + base);  //Suponiendo que es un triángulo equilátero
// }

// calcularTriangulo(5, 10);

// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área

// function calcularTriangulo(base, altura) {
//     console.log("El área del triángulo es de " + (base * altura) / 2);
// }

// calcularTriangulo(4, 3.2);

// 8. Crear una función que reciba 2 números y me entregue el número más alto

// function mayorNumero(numero1, numero2) {
//     if (numero1 > numero2) {
//         console.log("El numero mayor es " + numero1);
//     } else if (numero2 > numero1) {
//         console.log("El numero mayor es " + numero2);
//     } else {
//         console.log("Ingresa un número");
//     }
// }

// mayorNumero(parseInt("6"), parseInt("8"));

// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

// function menorNumero(numero1, numero2) {
//     if (numero1 < numero2) {
//         console.log("El numero menor es " + numero1);
//     } else if (numero2 < numero1) {
//         console.log("El numero menor es " + numero2);
//     } else {
//         console.log("Ingresa un número");
//     }
// }

// menorNumero(parseInt(45), parseInt(45));

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

function masCaracteresEnString(palabra, palabra1, palabra2) {

    if (palabra.lenght > palabra1.lenght && palabra.lenght > palabra2.lenght) {
        return palabra;
    } else if (
        palabra1.lenght > palabra.lenght &&
        palabra1.lenght > palabra2.lenght
    ) {
        return palabra1;
    } else if (
        palabra2.lenght > palabra.lenght &&
        palabra2.lenght > palabra1.lenght
    ) {
        return palabra2;
    }
}

console.log(
    "La palabra con más caracteres es " +
    masCaracteresEnString("Francisco ", "Raul", "Gonzalo")
);

// let palabraPrueba = "Juanito";
// console.log(palabraPrueba.length);

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

// function elevarAlCubo(numero) {
//     return "El numero al cubo es " + numero * numero * numero;
// }

// console.log(elevarAlCubo(9));

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

// 13. Crear una función que reciba una palabra y la transforme a minúsculas

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del 
// arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']