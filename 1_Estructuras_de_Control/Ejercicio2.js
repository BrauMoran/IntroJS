let animalFavorito = prompt("Animal Favorito:")

switch(animalFavorito) {
    case "perro":
    case "lobo":
    case "león":
        alert('Gruñen')
        break;
    case "pato":
    case "ganso":
        alert("Graznan")
        break;
    case "avispa":
        alert("ZZZumbale")
        break;
    default:
        alert("Tu animal no está en la lista")
        break;
}