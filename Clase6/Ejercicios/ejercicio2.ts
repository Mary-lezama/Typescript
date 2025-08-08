/*Ejercicio 2: Herencia Simple con Acceso 
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y 
materia, y un método enseñar(). Luego, crea una clase derivada 
MaestroMatematicas que extienda de Maestro y sobrescriba el método 
enseñar() para imprimir un mensaje específico de matemáticas.*/

class Maestro {
    protected nombre: string;
    protected materia: string;
    constructor(nombre:string, materia:string) {
        this.nombre = nombre;
        this.materia = materia;
    }
    enseñar(): void {
        return 
    }
}

class MaestroMatematicas extends Maestro {
    constructor(nombre:string,materia:string) {
        super(nombre,materia)
    }
    enseñar(): void {
        super.enseñar()
        console.log("Este es un mnj especifico de matematicas")
    }
}

const mensaje = new MaestroMatematicas("Alberto","Matematicas");

mensaje.enseñar()