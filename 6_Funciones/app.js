// // FUNCIONES

// console.log("Mensaje");

// function nombreFuncion() {
//     console.log("Mensaje en función");
//     // alert("Llamando una función");
// }

// nombreFuncion()

// {
//     nombreFuncion()
// }

// function saludar() {
//     let nombre = "Braulio"; //Variable local declarada
//     console.log(`Hola ${nombre}`);
// }

// saludar(); //Llamando a ejecutar una función

// function sumarDosNumeros() {
//     let n1 = 56;
//     let n2 = 187;
//     console.log(n1 + n2);
// }

// sumarDosNumeros();


// // let A = prompt("Ingresa un número");
// // let B = prompt("Ingresa un número");

// // function sumarConParametros(numeroA, numeroB) {
// //     let suma = numeroA + numeroB;
// //     console.log(suma);
// // }

// // sumarConParametros(parseInt(A), parseInt(B));



// function registrarUsuario(nombreUsuario) {
//     console.log("Bienvenido, " + nombreUsuario);
// }

// registrarUsuario("Julián");



// function mostrarNumeros(limite) {
//     for (let i = 1; i <= limite; i++) {
//         console.log(i);
//     }
// }

// mostrarNumeros(prompt("Ingresa un número"));


//FUNCIONES CON RETURN


// function calcularCuadrado(lado) {
//     let area = lado * lado;
//     return area;
// }

// console.log(calcularCuadrado(6));

// let resultado = calcularCuadrado(10);

// console.log(resultado);

function crearCodigo(nombre, edad) {
    let codigo = nombre[0] + edad;
    return codigo;
}

console.log("El código obtenido es " + crearCodigo("Braulio", 20));
console.log(crearCodigo("Andrea", 19));



function validarCodigo(codigo) {
    if (codigo.length === 3) {
        return "sí es válido";
    } else {
        return "no sirve";
    }
}

console.log(validarCodigo("dgh"));
console.log(validarCodigo("dghth"));