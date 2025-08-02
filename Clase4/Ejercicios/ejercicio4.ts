/*Actividad 4: Usar aserciones de tipo 
Declara una variable de tipo any y usa una aserción para tratarla como string, 
accediendo a la propiedad .length. */

let valor : any = "Hola mundo";

let longitud: number = ( valor as string).length;

console.log("La longitud del string es:", longitud);