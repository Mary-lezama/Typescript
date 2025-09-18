/*Ejercicio 2 – Encapsulamiento y Validaciones
 Consigna: Crea una clase Persona con una propiedad privada _edad. Usa un 
getter y un setter para controlar la edad: Solo acepta valores entre 0 y 120. Si no 
cumple, muestra un error.*/

class Persona {
  // Propiedad privada
  #edad;

  constructor(edadInicial) {
    // Usamos el setter para validar la edad inicial
    this.edad = edadInicial;
  }

  // Getter para leer la edad
  get edad() {
    return this.#edad;
  }

  // Setter para validar y asignar la edad
  set edad(valor) {
    if (valor < 0 || valor > 120) {
      console.error('❌ Error: La edad debe estar entre 0 y 120 años.');
      return;
    }
    this.#edad = valor;
    console.log(`✅ Edad asignada correctamente: ${valor} años`);
  }
}

// --- Ejemplo de uso ---
const persona1 = new Persona(25);  // ✔ Edad válida
console.log(`Edad actual: ${persona1.edad}`);

persona1.edad = 40;  // ✔ Edad válida
console.log(`Edad actualizada: ${persona1.edad}`);

persona1.edad = 150; // ❌ Edad inválida