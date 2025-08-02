/*Actividad 5: Usar aserciones dobles 
Crea una variable de tipo any y haz una conversión con aserciones dobles para 
convertirla en un number. Muestra el resultado. */

let dato : any = "564"

let numero: number = (dato as unknown as number);

console.log("valor convertido:", numero)