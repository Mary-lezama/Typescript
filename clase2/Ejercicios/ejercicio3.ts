/*Ejercicio 3: Creación y manipulación de objetos 
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
(string), deporte (string), y energia (number). Luego, define una función entrenar 
que acepte el objeto deportista y un número de horas de entrenamiento, 
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
final, muestra el estado del deportista en la consola.*/

// Definimos el tipo del objeto Deportista
type Deportista = {
  nombre: string;
  deporte: string;
  energia: number;
};

// Creamos una instancia del deportista
let deportista: Deportista = {
  nombre: "María",
  deporte: "Natación",
  energia: 100
};

// Función para entrenar
function entrenar(deportista: Deportista, horas: number): void {
  deportista.energia -= horas * 5;

  // Evitar que la energía sea negativa
  if (deportista.energia < 0) {
    deportista.energia = 0;
  }

  console.log("Estado actual del deportista:");
  console.log(deportista);
}

// Llamada a la función con 4 horas de entrenamiento
entrenar(deportista, 4);