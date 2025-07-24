/*Ejercicio 5: Función con parámetros rest 
Consigna: Crea una función llamada sumarTodos que acepte una cantidad 
indefinida de números y devuelva su suma. Luego, llama a la función con varios 
números y muestra el resultado en la consola. */


// Función que suma una cantidad indefinida de números
function sumarTodos(...numeros: number[]): number {
  let suma = 0;

  for (let num of numeros) {
    suma += num;
  }

  return suma;
}

// Llamada a la función con varios números
export const resultado = sumarTodos(5, 10, 3, 7, 20);

// Mostramos el resultado en consola
console.log("La suma total es:", resultado);