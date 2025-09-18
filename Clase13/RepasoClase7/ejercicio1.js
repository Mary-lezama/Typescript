/*Ejercicio 1 – Encapsulamiento con Getter y Setter
Consigna: Crea una clase CuentaBancaria con una propiedad privada _saldo. Implementa 
un getter para consultar el saldo y un setter para depositar dinero
 (no puede ser un valor negativo). */

class CuentaBancaria {
  // Propiedad privada
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  // Getter para consultar el saldo
  get saldo() {
    return this.#saldo;
  }

  // Setter para depositar dinero
  set saldo(monto) {
    if (monto < 0) {
      console.log('❌ No se puede depositar un valor negativo.');
      return;
    }
    this.#saldo += monto;
    console.log(`✅ Depósito exitoso. Saldo actual: $${this.#saldo}`);
  }
}

// --- Ejemplo de uso ---
const cuenta = new CuentaBancaria(1000);

console.log(`Saldo inicial: $${cuenta.saldo}`); // Getter

cuenta.saldo = 500;  // Setter → Deposita $500
console.log(`Saldo después del depósito: $${cuenta.saldo}`);

cuenta.saldo = -200; // Intento inválido → Muestra error