/*Ejercicio 5: Interfaz 
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
método presentarse(). 
2. Crea una clase llamada Persona que implemente esta interfaz y 
proporciona la implementación del método presentarse(). */

interface IPersona {
    nombre: string,
    edad: number,
    presentarse: () => string
}

export class Persona implements IPersona {
   public nombre: string;
    public edad: number;
    constructor(nombre:string, edad: number){
        this.nombre = nombre;
        this.edad = edad
    }
   public presentarse(): string {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} anios.`
    }
  }
  
  const persona1 = new Persona("Camila", 28);
  
  console.log(persona1.presentarse())
  
  
