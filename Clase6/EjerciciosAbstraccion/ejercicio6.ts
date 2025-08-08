/*Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
Crea un sistema de inventario que gestione diferentes tipos de productos. 
Define una clase abstracta Producto con: 
• Propiedades protegidas: nombre, precio. 
• Un método abstracto calcularDescuento(). 
Implementa dos subclases: Ropa y Electronica. 
• La subclase Ropa aplicará un 10% de descuento. 
• La subclase Electronica tendrá un 5% de descuento. 
Añade un método concreto en la clase abstracta para mostrar la información del 
producto.*/

abstract class Producto {
    protected nombre : string;
    protected precio : number;

    constructor(nombre:string,precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract calcularDescuento(): void;

    mostrarInfo(): void {
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio original: $${this.precio}`);
    console.log(`Precio con descuento: $${this.calcularDescuento()}`);
  }
}

class Ropa extends Producto {

    calcularDescuento(): number{
        return this.precio * 0.9
    }

}


class Electronica extends Producto {
 
   calcularDescuento(): number {
        return this.precio * 0.95
    }
}

const camisa = new Ropa("Camisa",25000)
const celular = new Electronica("Celular",110.000)


camisa.mostrarInfo()
console.log("___________________")
celular.mostrarInfo()
