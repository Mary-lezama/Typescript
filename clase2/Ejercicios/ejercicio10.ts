/*Ejercicio 10: Funciones y arrays de objetos 
Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
función debe recorrer el array y mostrar los detalles de cada libro en la consola.*/

// Definimos el tipo Libro
type Libro = {
  titulo: string;
  autor: string;
};

// Función que recorre y muestra los libros
function listarLibros(libros: Libro[]): void {
  console.log("Lista de libros:");
  for (const libro of libros) {
    console.log(`📘 "${libro.titulo}" - ${libro.autor}`);
  }
}

// Creamos un array de libros
export const misLibros: Libro[] = [
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "Rayuela", autor: "Julio Cortázar" },
  { titulo: "Orgullo y prejuicio", autor: "Jane Austen" }
];

// Llamamos a la función para mostrar los libros
listarLibros(misLibros);