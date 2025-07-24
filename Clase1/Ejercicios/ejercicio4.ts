/*Ejercicio 4: Parámetros opcionales simulados 
Declara dos variables, una para almacenar un nombre y otra para almacenar una 
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
proporcionada". Si se asigna la edad, imprímela junto al nombre. */

let nombre1: string = "Mary";
let edad1: number | undefined ; // edad opcional

// Verificar si la edad tiene un valor
if (edad1 !== undefined) {
  console.log(`Nombre: ${nombre1}, Edad: ${edad1}`);
} else {
  console.log(`Nombre: ${nombre1}, Edad no proporcionada`);
}