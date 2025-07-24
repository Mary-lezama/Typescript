//definimos enum numerico

enum colores {
    rojo, //0
    azul,//1
    verde //2
}

//acceder a los valores del enum

let coloresFavoritos: colores = colores.verde;
console.log('color favorito (por numero):', coloresFavoritos)
console.log('Nombre del color (por indice):',colores[coloresFavoritos]);

//Definimos un enum de cadena

enum direcciones {
    norte = 'N',
    sur = 'S',
    este = 'E',
    oeste = 'O'
}

//Asignar un valor del enum a una variable

let direccionViaje: direcciones = direcciones.norte
console.log('Direccion del viaje:', direccionViaje);