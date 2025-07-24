/*Ejercicio 9: Funciones con retorno void y manipulación de objetos 
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y 
encendido (booleano). Define una función encenderCoche que acepte el objeto 
coche y cambie el valor de encendido a true. Muestra el estado del coche en la 
consola antes y después de llamar a la función. */

// Definimos el tipo Coche
type Coche = {
  marca: string;
  modelo: string;
  encendido: boolean;
};

// Creamos un objeto coche
const coche: Coche = {
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false
};

// Función que enciende el coche (modifica la propiedad)
function encenderCoche(c: Coche): void {
  c.encendido = true;
}

// Mostrar estado antes de encender
console.log("Antes de encender:", coche);

// Llamamos a la función para encender el coche
encenderCoche(coche);

// Mostrar estado después de encender
console.log("Después de encender:", coche);