/*Ejercicio 6: Uso de unknown 
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
valores. */

let variable2: unknown;

 variable2 = 25;

 variable2 = "hola";

 variable2 = true;

 if ( typeof variable2 === "number" ) {
   console.log(`Es un número ${variable2}`);
   } else if (typeof variable2 === "boolean") {
    console.log("Es un booleano", variable2)
   } else {
    console.log("Es un string", variable2)
   };





