//1. Crear una función que nos muestre en consola los días de la semana

function diasSemana() { //Utilizar nombres más descriptivos usando verbos, por ejemplo "mostrarDias"
    console.log("Domingo");
    console.log("Lunes");
    console.log("Martes");
    console.log("Miércoles");
    console.log("Jueves");
    console.log("Viernes");
    console.log("Sábado");
}

diasSemana();

//2. Crear una función que nos muestre un número a, b y la suma a + b

function mostrarNum() {
    let numA = 7;
    let numB = 25;
    console.log(`Número a = ${numA}`);
    console.log(`Número b = ${numB}`);
    console.log(`La suma a+b = ${numA+numB}`);

    //Los console.log anteriores su pueden unir en uno solo
}

mostrarNum();

//3. Crear una función que nos muestre la longitud de un arreglo



function mostrarLongitud() {
    let array = [4, 6, 7, 8, 1, 2, 3, 5, 4, 23, 45];
    console.log(`Longitud del arreglo = ${array.length}`);
}

mostrarLongitud();