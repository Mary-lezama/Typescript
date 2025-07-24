// declaracion de un array simple

let frutas: string[] = ["manzana", "banana", "frutilla"]

// agregamos una fruta

frutas.push("naranja")
console.log('Agregamos una fruta al final:', frutas); 

// Eliminamos una fruta

let ultimaFruta = frutas.pop()
console.log('Eliminamos la ultima fruta:', ultimaFruta);
console.log('Array con la fruta eliminada:', frutas);

//combinacion de todos los elementos

let cadenaFrutas = frutas.join(' _ ')
console.log('combinamos todos los elementos del array: ',cadenaFrutas);