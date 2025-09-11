/*Ejercicio 3 – Polimorfismo en Tiempo de Ejecución
Consigna:
*Crea una clase base Animal 
*con un método hacerSonido().
 Crea subclases Perro y Gato 
 que sobrescriban ese método. 
 Haz una lista de animales 
 y recorre la lista mostrando los sonidos.*/



export class Animal {
    
    hacerSonido():  any {
        return `Sonido de animal aqui.`
    }
 }

 class Perro extends Animal {
    hacerSonido(): any {
        return `Worff`
    }
 }

 class Gato extends Animal {
    hacerSonido(): any {
        return `Meaow`
    }
 }

 const animales: Animal[] = [new Perro(), new Gato(), new Animal()]

 //recorremos la lista 
 animales.forEach((Animal) => {
    Animal.hacerSonido()
 })