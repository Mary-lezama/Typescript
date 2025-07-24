/*Ejercicio 1: Declarar y usar funciones con tipos 
Consigna: Crea una función llamada multiplicarNumeros que acepte dos 
parámetros, ambos de tipo number, y retorne el producto de ambos números. 
Luego, muestra el resultado en consola llamando a la función.*/

function multiplicarNumero (a: number, b: number): number  {
    return a * b ;

}
let resultadoMultiplicacion = multiplicarNumero (2,5);
console.log(resultadoMultiplicacion)

