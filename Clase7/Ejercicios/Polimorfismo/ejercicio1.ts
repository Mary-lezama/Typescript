/*Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación) 
Implementa una clase Calculadora que tenga un método sumar. El método debe 
estar sobrecargado para permitir la suma de: 
 Dos números enteros. 
 Tres números enteros. 
 Dos cadenas, concatenando las dos cadenas. */

class Calculadora {
  // Declaraciones de sobrecarga
  public sumar(a: number, b: number): number;
  public sumar(a: number, b: number, c: number): number;
  public sumar(a: string, b: string): string;

  // Implementación
  public sumar(a: any, b: any, c?: any): any {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
      return a + b + c; // Suma de 3 números
    }

    if (typeof a === "number" && typeof b === "number") {
      return a + b; // Suma de 2 números
    }

    if (typeof a === "string" && typeof b === "string") {
      return a + b; // Concatenación de 2 cadenas
    }

    throw new Error("Parámetros no válidos");
  }
}

// Ejemplo de uso
const calc = new Calculadora();

console.log("Suma de 2 números:", calc.sumar(5, 10));          // 15
console.log("Suma de 3 números:", calc.sumar(1, 2, 3));       // 6
console.log("Concatenación de cadenas:", calc.sumar("Hola ", "Mundo")); // "Hola Mundo"