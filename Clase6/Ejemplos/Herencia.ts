//Herencia

//Clase base

export class Animal {
    name: string;
    
    constructor(name:string) { // inicializa las propiedades
        this.name = name;
    }
    makeSound(): void {
        console.log(`${this.name} hace un sonido`)
    }
}

//clase derivada
class Dog extends Animal {
    raza: string;

    constructor(name:string, raza:string) {
        super(name);
        this.raza = raza;
    }

    makeSound(): void {
        console.log(`${this.name} ladra`);
    }

    juego(): void {
        console.log(`${this.name} esta buscando la pelota`)
    }
}

//instanciar

const genericAnimal = new Animal('Animal')
genericAnimal.makeSound()

const myDog = new Dog ('Blaki', 'Caniche');
myDog.makeSound()
myDog.juego()