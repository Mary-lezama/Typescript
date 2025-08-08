/*Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
Crea una interfaz PagoOnline con un método procesarPago(). 
Crea una clase abstracta Pago con un método concreto validarMonto() y un 
método abstracto completarPago(). 
Implementa ambas estructuras en una clase concreta PagoConTarjeta. */

interface PagoOnline {
    procesarPago(): void;
}

abstract class Pago {
    protected monto : number;
    constructor(monto:number) {
        this.monto = monto;
    }
    validarMonto(): boolean {
        console.log(`Validando monto: $${this.monto}`);
        return this.monto > 0;
    }
    
    abstract completarPago(): void ;
}

// Clase concreta que hereda de Pago y también implementa PagoOnline

class PagoConTarjeta extends Pago implements PagoOnline {
    private tarjeta : string;
    constructor(monto:number,tarjeta:string) {
        super(monto);
        this.tarjeta = tarjeta;
    }
 // Implementación del método de la interfaz

    procesarPago(): void {
        console.log("Procesando pago con tarjeta...");
        if(this.validarMonto()){
            this.completarPago()
        } else {
            console.log("El monto es invalido. No se puede validar el pago.");
        }
    }

    // Implementación del método abstracto
    completarPago(): void {
        console.log(`Pago de $${this.monto} realizado con la tarjeta: ${this.tarjeta} `)
    }
}

const pago = new PagoConTarjeta(3500,"Visa **** 8885")
pago.procesarPago()
