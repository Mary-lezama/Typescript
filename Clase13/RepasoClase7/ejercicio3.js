/*Ejercicio 3 – Polimorfismo en Tiempo de Ejecución
Consigna:
*Crea una clase base Animal 
*con un método hacerSonido().
 Crea subclases Perro y Gato 
 que sobrescriban ese método. 
 Haz una lista de animales 
 y recorre la lista mostrando los sonidos.*/


// Clase base
class Animal {
  hacerSonido() {
    console.log('El animal hace un sonido...');
  }
}

// Subclase Perro
class Perro extends Animal {
  hacerSonido() {
    console.log('🐶 El perro dice: ¡Guau guau!');
  }
}

// Subclase Gato
class Gato extends Animal {
  hacerSonido() {
    console.log('🐱 El gato dice: ¡Miau!');
  }
}

// Crear una lista de animales
const animales = [
  new Perro(),
  new Gato(),
  new Perro(),
  new Gato()
];

// Recorrer la lista y llamar al método polimórfico
animales.forEach(animal => animal.hacerSonido());