/*Ejercicio 4: Función que devuelve un objeto 
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
titulo (string), autor (string) y paginas (number). La función debe devolver un 
objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
muestra sus detalles en la consola. */

// Definimos el tipo para Libro
type Libro = {
  titulo: string;
  autor: string;
  paginas: number;
};

// Función que crea y devuelve un objeto tipo Libro
function crearLibro(titulo: string, autor: string, paginas: number): Libro {
  return {
    titulo,
    autor,
    paginas
  };
}

// Creamos dos libros usando la función
const libro1 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = crearLibro("El principito", "Antoine de Saint-Exupéry", 96);

// Mostramos los libros en la consola
console.log("Detalles del Libro 1:", libro1);
console.log("Detalles del Libro 2:", libro2);