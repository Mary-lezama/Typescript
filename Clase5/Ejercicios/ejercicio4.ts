/*Ejercicio 4: Clases y Objetos 
1. Define una clase llamada Animal con propiedades nombre y tipo, y un 
método hacerSonido(). 
2. Crea una instancia de la clase Animal y llama al método. */

class Animal {
    public nombre: string;
    public tipo: string;

    constructor(nombre:string, tipo:string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public hacerSonido(): string {
        return `El sonido del ${this.nombre}, es de tipo ${this.tipo}`
    }
}

const animalInstancia = new Animal ("perro", "canino")

console.log(animalInstancia.hacerSonido())