/*Ejercicio 6: Tipos de parámetros y funciones que retornan objetos 
Consigna: Crea una función llamada crearPersona que acepte tres parámetros: 
nombre (string), edad (number), y pais (string). La función debe devolver un 
objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la 
consola. */

// Definimos el tipo Persona
type Persona = {
  nombre: string;
  edad: number;
  pais: string;
};

// Función que crea y retorna una Persona
function crearPersona(nombre: string, edad: number, pais: string): Persona {
  return {
    nombre,
    edad,
    pais
  };
}

// Creamos una persona e imprimimos el resultado
const persona1 = crearPersona("Lucía", 28, "Argentina");

console.log("Persona creada:", persona1);