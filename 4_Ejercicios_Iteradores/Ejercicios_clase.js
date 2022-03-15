//Dado un arreglo de calificaciones obtener la calificación máxima, mínima y el promedio
// Utilizando solamente el FOR

var calificaciones = [100, 45, 67, 89, 90, 60, 58, 75, 96, 88, 69, 72];

calificaciones.sort(function(a, b) {
    return a - b;
});
console.log(calificaciones);

var numMayor = calificaciones[calificaciones.length - 1];
console.log("numMayor", numMayor);

var numMenor = calificaciones[0];
console.log("numMenor", numMenor);

var sumatoria = 0;

for (var i = 0; i < calificaciones.length; i++) {
    sumatoria = sumatoria + calificaciones[i];
}

console.log("sumatoria", sumatoria);

var promedio = sumatoria / calificaciones.length;

console.log("Promedio", promedio);

// let calificaciones = [9,10,10,9,8,9,6,7,8,9]
// let promedio = 0
// let suma = 0
// let max= 0
// let min= calificaciones[0]
// for(i=0; i<calificaciones.length; i++){
//     suma += calificaciones[i];
//     if (calificaciones[i] > max){
//         max = calificaciones[i];
//     }
//     if (calificaciones[i] < min) {
//         min = calificaciones[i];
//     }
// }
// promedio = suma / calificaciones.length;
// alert(`El promedio de calificaciones es ${promedio}, el maximo es ${max} y el minimo es ${min}`)

// ANALIZAR ESTE ÚLTIMO EJEMPLO

// CLEAR UN ARREGLO CON LOS NÚMERO DE LA SERIE DE FIBONACCI

var limite = 10;
var serie = [0, 1];

for (var i = 2; i <= limite; i++) {
    serie[1] + serie[0];
    serie.push(serie[i - 1] + serie[i - 2]);
}

console.log(serie);