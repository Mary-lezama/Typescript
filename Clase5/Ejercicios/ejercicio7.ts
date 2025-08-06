/*Ejercicio 7: Modificadores de Acceso 
1. Define una clase Coche con propiedades marca, modelo (públicas) y 
precio (privada). 
2. Implementa un método para mostrar la información del coche que acceda 
a las propiedades públicas y no a la privada directamente. */

export class Coche {
    public marca: string;
    public modelo: string;
    private precio: number;
    constructor(marca:string, modelo:string, precio: number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    public InfoCoche(): string {
        return `El auto es Marca: ${this.marca}, Modelo: ${this.modelo}`
    }
}

const miCoche = new Coche("Nissam","Almera", 3500)

console.log(miCoche.InfoCoche())