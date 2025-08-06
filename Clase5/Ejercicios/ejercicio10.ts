/*Ejercicio 10: Registro de Estudiantes 
1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
o Estudiante: Clase que incluye propiedades como nombre, edad y 
curso, además de un método que muestre la información del 
estudiante. 
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
métodos para agregar un estudiante y mostrar todos los estudiantes 
registrados. */

class Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    constructor(nombre:string, edad:number, curso:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    mostrarInfo(): void {
        console.log(`Estudiante, Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso} `)
    }
}

class RegistroEstudiantes{
    private estudiantes : Estudiante[] = []

   agregarEstudiante(estudiante: Estudiante) {
        this.estudiantes.push(estudiante)
    }  
    mostrarTodos(): void {
        console.log("Estudiantes Registrados: ");
        this.estudiantes.forEach(est => est.mostrarInfo())
    }
}

const infoEstudiante = new Estudiante("Fernanda",25,"Sistemas");
const registro = new RegistroEstudiantes();
const estudiante1 = new Estudiante("Ana",28,"Matematicas");
const estudiante2 = new Estudiante("Patricia",22,"Matematicas");
const estudiante3 = new Estudiante("Elena",27,"Programacion");

infoEstudiante.mostrarInfo();
registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.agregarEstudiante(estudiante3);
registro.mostrarTodos()
