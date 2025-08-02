/*Actividad 1: Usar For...In para recorrer propiedades de un objeto 
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
bucle for...in para recorrer y mostrar cada propiedad y su valor. */

let alumna = {
    nombre: "soledad",
    edad: 25,
    Ciudad: "buenos aires"
} 

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}