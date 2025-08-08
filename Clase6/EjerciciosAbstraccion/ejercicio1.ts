/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
para que ambas bebidas oculten su lógica de preparación interna pero 
expongan un comportamiento común. */

interface Bebida {
    preparar(): void ;
}

class Cafe implements Bebida {
    preparar(): void {
        console.log("Preparando cafe:");
        this.hervirAgua();
        this.agregarCafe();
        this.servir();
    }
    private hervirAgua(): void {
        console.log("Hirviendo agua")
    }
    private agregarCafe(): void {
        console.log("Agrega dos cuchadaras de cafe molido")
    }
    private servir(): void {
        console.log("Servir el cafe filtrado en una taza")
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log("Preparando te:");
        this.hervirAgua();
        this.agregarTe();
        this.servir();
    }
    private hervirAgua(): void {
        console.log("Hirviendo agua")
    }
    private agregarTe(): void {
        console.log("Agrega una bolsita de te manzanilla")
    }
    private servir(): void {
        console.log("Servir en una taza")
    }

}

//uso de la abstraccion 

function servirBebida(bebida: Bebida): void {
    bebida.preparar();
}

const miCafe = new Cafe()
const miTe = new Te()

servirBebida(miCafe);
console.log("------------------")
servirBebida(miTe);

/*¿Qué se logra con esto?
Se usa abstracción porque desde afuera solo se llama preparar(), sin saber cómo se hace internamente.

Se logra polimorfismo, porque servirBebida() puede recibir tanto Cafe como Te sin importar la clase.*/