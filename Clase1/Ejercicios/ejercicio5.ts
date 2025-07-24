/*Ejercicio 5: Datos nulos y diferenciados 
Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena, 
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando 
el significado de null en TypeScript. */


let variable1: string | null = "Esta es una variable null";

console.log(`valor de cadena: ${variable1}`);

// ahora imprimimos null que se trata de una varible tipo vacio que intencionalmente no tiene valor , porque es inexistente
variable1 = null;

console.log(variable1);
