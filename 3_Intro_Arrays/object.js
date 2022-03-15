// const braulio = {
//     nombre: "Braulio Solano Morán",
//     edad: 20,
//     fechaDeNacimiento: "16 de noviembre de 2001",
//     colorFavorito: "Verde",
//     amigos: {
//         amigo1: "Mitla",
//         amigo2: "Aldo"
//     }
// }


var listaAlumnos = [];
var alta = "no";

var alta = prompt("¿Quieres dar de alta un alumno nuevo?");

while (alta === "si") {
    listaAlumnos.push(prompt({
        nombre: prompt("Ingresa el nombre del alumno: "),
        apellido: prompt("Ingresa el apellido del alumno: ")
    }))

}