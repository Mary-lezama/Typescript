/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
Diseña un sistema de transporte público. Define: 
• Una interfaz VehiculoElectrico con el método cargarBateria(). 
• Una clase abstracta Transporte con el método abstracto mover(). 
Implementa ambas estructuras en una clase concreta AutobusElectrico. */

interface VehiculoElectrico {
    cargarBateria() : void ;
}

abstract class Transporte {
    protected capacidad : number;
    constructor(capacidad:number) {
        this.capacidad = capacidad;
    }
    abstract mover(): void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico {
    private cargaActual : number = 0;

    constructor(capacidad:number) {
        super(capacidad);
    }
  // Implementación del método de la interfaz
      cargarBateria(): void {
        this.cargaActual = 100;
          console.log("bateria completamente cargada")
      }
  // Implementación del método abstracto de la clase base
      mover(): void {
        if(this.cargaActual > 0) {
         console.log(`El autobus se esta moviendo con ${this.capacidad} pasajeros`);
        } else {
            console.log(`No se puede mover bateria descargada`)
         }
        
    }
}

const colectivo = new AutobusElectrico(50)

colectivo.cargarBateria()
colectivo.mover()
colectivo.cargarBateria();