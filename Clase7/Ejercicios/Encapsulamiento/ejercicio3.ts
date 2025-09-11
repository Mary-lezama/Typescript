/*3. Ejercicio de Estudiante 
Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
edad, y calificaciones. Implementa métodos para agregar calificaciones y 
calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
calcular el promedio. */

export class Estudiante {
    private nombre: string;
    private edad: number;
    private calificaciones: number[] = [];

    constructor(nombre:string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }
 // Método para agregar calificación

    agregarCalificacion(calificacion: number): void {
        if (calificacion < 0 || calificacion > 100 ) {
            console.log("Calificacion invalida debe ser entre 0 y 100.");
            return;
        } 
        this.calificaciones.push(calificacion);
    }

      // Método para calcular el promedio
      calcularPromedio(): number | null {
        if ( this.calificaciones.length === 0) {
            console.log("No hay calificaciones para calcular el promedio");
            return null;
        }

        const suma = this.calificaciones.reduce((acc,nota) => acc + nota, 0);
        return suma / this.calificaciones.length;
      }
      // Método para mostrar información
  public mostrarInfo(): void {
    const promedio = this.calcularPromedio();
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    if (promedio !== null) {
      console.log("Promedio:", promedio.toFixed(2));
    }
  }
}

const estudiante1 = new Estudiante("Ana", 20);
estudiante1.agregarCalificacion(95);
estudiante1.agregarCalificacion(85);
estudiante1.agregarCalificacion(150); // Inválida
estudiante1.agregarCalificacion(70);


estudiante1.mostrarInfo();

