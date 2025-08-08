/*Ejercicio 4: Herencia de Métodos y Sobrescritura  
Consigna: Define una clase base Flor con el método describir(), que imprime un 
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
cada una sobrescribiendo el método describir() con un mensaje específico. */

class Flor {
    mensajeGeneral: string;
    constructor(mensajeGeneral:string){ 
        this.mensajeGeneral = mensajeGeneral;
    }
    describir(): string {
        return `${this.mensajeGeneral}`
    }
}

class Rosa extends Flor {
    constructor(mensajeGeneral:string) {
        super(mensajeGeneral)
        super.describir()
        console.log(`${this.mensajeGeneral}`)
    }
    
}

class Girasol extends Flor {
    constructor(mensajeGeneral:string) {
        super(mensajeGeneral)
        super.describir()
        console.log(`${this.mensajeGeneral}`)
    }
    
}

const prueba_flor = new Flor("Las flores son alegria");
const Prueba_rosa = new Rosa("Las rosas rojas son del amor");
const Prueba_girasol = new Girasol("Los girasoles son de la suerte");

console.log(prueba_flor.describir());
Prueba_rosa.describir();
Prueba_girasol.describir();



//Ejercicio hecho de otra manera

// Clase base
class Flor2 {
  describir2(): void {
    console.log("Soy una flor común, hermosa y colorida.");
  }
}

// Clase derivada Rosa
class Rosa2 extends Flor2 {
  describir2(): void {
    console.log("Soy una rosa, símbolo de amor y elegancia.");
  }
}

// Clase derivada Girasol
class Girasol2 extends Flor2 {
  describir2(): void {
    console.log("Soy un girasol, siempre mirando hacia el sol.");
  }
}

// Ejemplo de uso
const florGenerica = new Flor2();
const rosa = new Rosa2();
const girasol = new Girasol2();

florGenerica.describir2(); // "Soy una flor común, hermosa y colorida."
rosa.describir2();         // "Soy una rosa, símbolo de amor y elegancia."
girasol.describir2();      // "Soy un girasol, siempre mirando hacia el sol."