/*Ejercicio 7: Tipos literales 
Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
TypeScript. */

let dia: "lunes" | "martes" | "miercoles";

dia = "lunes";
console.log("Dia asignado:", dia);

dia = "martes";
console.log("Dia asignado:", dia);

dia = "miercoles";
console.log("Dia asignado:", dia);

//NO ACEPTA
/*dia = "jueves";

console.log("dia asignado:" dia);*/

type diaDeGym = "jueves" | "viernes";

let dia1: diaDeGym;

dia1 = "jueves";

console.log( `${dia1}: Tengo gym en la mañana`);

dia1 = "viernes";

console.log( `${dia1}: Tengo gym en la noche`);



