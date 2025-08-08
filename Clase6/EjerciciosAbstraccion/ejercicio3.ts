/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios 
Crea una interfaz Usuario que tenga las propiedades: 
• nombre (obligatoria). 
• edad (opcional). 
• readonly id (solo lectura). 
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta 
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo 
lectura*/

interface Usuario {
    readonly id : number;
    nombre : string;
    edad? : number;
}

class UsuarioConcreto implements Usuario {
    readonly id : number;
    nombre : string;
    edad? : number;

    constructor(id:number,nombre:string,edad?:number) {
        this.id = id ;
        this.nombre = nombre ;
        if(edad !== undefined) {
            this.edad = edad;
        }
}
      mostrarDatos():void {
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad ?? "No especificada"} `)
      }
}

//crear instancia

const usuario1 = new UsuarioConcreto(1,"Lana");

usuario1.mostrarDatos()

// ❌ Intentar modificar el ID (esto da error en tiempo de compilación)
//usuario1.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property