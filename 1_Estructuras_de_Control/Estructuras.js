let edad = 56
let esMayorDeEdad 

edad >= 18 ? esMayorDeEdad = true : esMayorDeEdad = false
alert(`Es mayor de edad: ${esMayorDeEdad}`);

// if(edad >= 18){
//     alert("Eres mayor de edad");
// }else{
//     alert("No eres mayor de edad");
// }

// condición ? que pasa si se cumple : que pasa si no se cumple
// Es un operador ternario, una simplificación 
// del if/else

// edad >= 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad")


// <condicion> ? <que pasa si se cumple> : <que pasa si no se cumple>

// if(<condicion>) {
//     <que pasa si se cumple>
// } else {
//     <que pasa si no se cumple>
// }


// let calificacion = 18;
// if(calificacion <= 5) {
//     alert('Estas reprobado')
// } else if(calificacion === 6) {
//     alert('De panzaso')
// } else if(calificacion === 7) {
//     alert('Vas mejorando')
// } else if(calificacion === 8) {
//     alert('Sigue asi')
// } else if(calificacion === 9) {
//     alert('Super')
// } else if(calificacion === 10) {
//     alert('Excelente')
// } else {
//     alert('Calificacion no validad')
// }

// let comidaFavorita = prompt("Comida favorita:")

// switch(comidaFavorita) {
//     case "carne":
//     case "pollo":
//     case "pescado":
//         alert('Eres carnivoro')
//         break;
//     case "lechuga":
//     case "acelgas":
//         alert("Eres vegetariano")
//         break;
//     case "tofu":
//         alert("Eres vegano")
//         break;
//     default:
//         alert("Eres alien?")
//         break;
// }