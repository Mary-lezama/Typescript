/*Ejercicio 8: Funciones con diferentes tipos de retorno 
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
función debe retornar el área de la figura. Usa tipos específicos para cada caso. */

// Función que calcula el área según el tipo de figura
function calcularArea(
  tipo: "circulo",
  radio: number
): number;
function calcularArea(
  tipo: "rectangulo",
  largo: number,
  ancho: number
): number;
function calcularArea(
  tipo: "circulo" | "rectangulo",
  valor1: number,
  valor2?: number
): number {
  if (tipo === "circulo") {
    return Math.PI * valor1 * valor1; // valor1 es el radio
  } else if (tipo === "rectangulo" && valor2 !== undefined) {
    return valor1 * valor2; // valor1 = largo, valor2 = ancho
  } else {
    throw new Error("Parámetros inválidos");
  }
}

// Ejemplos de uso
const areaCirculo = calcularArea("circulo", 5);
console.log("Área del círculo:", areaCirculo.toFixed(2)); // 78.54

const areaRectangulo = calcularArea("rectangulo", 10, 4);
console.log("Área del rectángulo:", areaRectangulo); // 40