import createMultiplier from "./higherOrderFunctions";

// Creamos un multiplicador por 2
const multiplicarPorDos = createMultiplier(2);

// Usamos la función devuelta para multiplicar un número
const resultado = multiplicarPorDos(5);

console.log(`Resultado de multiplicar 5 por 2: ${resultado}`);