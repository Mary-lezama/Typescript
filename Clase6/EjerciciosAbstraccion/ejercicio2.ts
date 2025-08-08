/*Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa 
los modificadores de acceso para controlar la visibilidad de las propiedades. */

abstract class Vehiculo {
    protected velocidad: number;
   
    constructor(velocidad: number) {
    this.velocidad = velocidad;
}

     abstract mover(): void;
}

class Auto extends Vehiculo {
    
     constructor(velocidad: number) {
    super(velocidad)
}
    mover(): void {
        console.log(`El auto tiene una velocidad de: ${this.velocidad} Km/h.`);
    }
}

 class Bicicleta extends Vehiculo {
    
     constructor(velocidad: number) {
    super(velocidad)
}
     mover(): void {
        console.log(`La Bicicleta tiene una velocidad de: ${this.velocidad} Km/h.`);
     }
}

const miAuto = new Auto(160)
const miBici = new Bicicleta(20)

miAuto.mover()
miBici.mover()

