//declaracion de una tupla

let persona: [string, number]

// inicializacion de la tupla

persona = ['Mary', 28]

//accedemos a los elementos de la tupla

console.log('Nombre: ', persona[0]);
console.log('Edad: ', persona[1]);

//modificamos la tupla
persona[1] = 29
console.log("Edad actualizada: ", persona[1]);

//destructuracion de la tupla
export let [nombre, edad] = persona
console.log(`la persona se llama ${nombre} y tiene ${edad} anios` );

