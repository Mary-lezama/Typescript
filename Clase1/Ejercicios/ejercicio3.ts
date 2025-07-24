/*Ejercicio 3: Combina variables primarias 
Declara variables para almacenar tu nombre y edad. Combina esas variables en 
un solo mensaje usando plantillas de cadena (template literals) e imprímelo en 
la consola. */

//Nombre y apellido del usuario

let nombreDeUsuario: string = "Mary"
let edadDeUsuario: number = 28

let datosDeUsuario: string = `El Nombre del usuario es: ${nombreDeUsuario}, y su edad correspondiente es: ${edadDeUsuario}`
console.log(datosDeUsuario);