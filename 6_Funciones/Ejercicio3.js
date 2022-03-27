// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y 
//nos regrese un arreglo con sólo los elementos tipo number

// let arregloNumeros = [];

// function hacerArreglo(arreglo) {

//     for (let i = 0; i < arreglo.lenght; i++) {
//         arregloNumeros.push(parseInt(arreglo[i]));
//     }
//     return arregloNumeros;
// }

// hacerArreglo([54, 23, "pato", 42, "hola"]);
// console.log(nuevoArreglo);

// function filtrarArreglo(arreglo) {
//     let nuevoArreglo = [];
//     for (let i = 0; i < arreglo.lenght; i++) {
//         if (typeof arreglo[i] === "number") {
//             nuevoArreglo.push(arreglo[i]);
//         }
//     }

//     return nuevoArreglo;
//     console.log(nuevoArreglo);
// }

// console.log(filtrarArreglo([54, 23, "pato", 42, "hola"]));


// function filtrarArreglo(arreglo) {
//     let nuevoArreglo = [];
//     for (let i = 0; i < arreglo.length; i++) {
//         if (typeof arreglo[i] === 'number') {
//             nuevoArreglo.push(arreglo[i])
//         }
//     }

//     return nuevoArreglo;
// }

// console.log(filtrarArreglo([4, "dos", 8, "tres", 5, 9, 1, "cero", true, false, 1, 'hola', 1, 20, 20]))

// let arr = [1, 2, 't', 20, true, '2', 22];
// console.log(filtrarArreglo(arr));


// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

// function crearNumeroPar(limite) {
//     let pares = [];
//     for (let i = 0; i <= limite; i += 2) {
//         pares.push(i);
//     }
//     return pares;
// }

// console.log(crearNumeroPar(65));

// 3. Crear una función que me entregue un número entero random entre 1 y 100

// function crearNumRandom(limiteInf, limiteSup) {
//     let numRandom = Math.floor(Math.random() * limiteSup - limiteInf) + limiteInf;

//     return numRandom;
// }

// console.log(crearNumRandom(1, 100));


// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2