// En este ejemplo, la funcion procesar es capaz de aceptar cualquier 
// tipo de pago, y cada uno se comporta de manera distinta dependiendo 
// de su implementación específica del método pagar.

// Clase base
export abstract class Pago {
    abstract procesarPago(monto: number): void;
}

// Clase derivada para comportamiento específico
class PagoConTarjeta extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado con tarjeta de crédito.`);
    }
}

// Pago con efectivo
class PagoEnEfectivo extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado en efectivo.`);
    }
}

// Pago con Transferencia
class PagoConTransferencia extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado mediante transferencia bancaria.`);
    }
}

// Función que utiliza polimorfismo
function procesar(pago: Pago, monto: number): void {
    pago.procesarPago(monto);
}
// Ejemplo de uso
const pagoTarjeta = new PagoConTarjeta();
const pagoEfectivo = new PagoEnEfectivo();
const pagoTransferencia = new PagoConTransferencia();

procesar(pagoTarjeta, 100); // Pago de 100 procesado con tarjeta de crédito.
procesar(pagoEfectivo, 50); // Pago de 50 procesado en efectivo.
procesar(pagoTransferencia, 200); // Pago de 200 procesado mediante transferencia bancaria.