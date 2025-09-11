/*Ejercicio 3: Encapsulamiento con Métodos Privados 
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
modificado a través de un método depositar y otro retirar, los cuales deben 
validar que la cantidad no sea negativa. Implementa métodos públicos para 
consultar el saldo. */

class Banco {
  // Propiedad privada
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  // Método privado para validar montos
  private validarMonto(monto: number): boolean {
    if (monto <= 0) {
      console.log("⚠️ El monto debe ser mayor que 0.");
      return false;
    }
    return true;
  }

  // Método para depositar
  public depositar(monto: number): void {
    if (this.validarMonto(monto)) {
      this.saldo += monto;
      console.log(`✅ Depósito realizado. Nuevo saldo: $${this.saldo}`);
    }
  }

  // Método para retirar
  public retirar(monto: number): void {
    if (!this.validarMonto(monto)) return;

    if (monto > this.saldo) {
      console.log("⚠️ Fondos insuficientes para retirar.");
      return;
    }

    this.saldo -= monto;
    console.log(`✅ Retiro realizado. Nuevo saldo: $${this.saldo}`);
  }

  // Método para consultar el saldo
  public consultarSaldo(): number {
    return this.saldo;
  }
}

// Ejemplo de uso
const cuenta = new Banco(1000);

console.log("Saldo inicial:", cuenta.consultarSaldo());
cuenta.depositar(500);
cuenta.retirar(200);
cuenta.retirar(2000); // Fondos insuficientes
cuenta.depositar(-50); // Monto inválido
console.log("Saldo final:", cuenta.consultarSaldo());