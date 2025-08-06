/*Ejercicio 8: Integramos contenidos - Animales 
1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
Animal, Mascota, y MascotaExotica. 
o La clase Animal debe tener propiedades como nombre y tipo. 
o La clase Mascota debe extender Animal e incluir una propiedad para 
dueño. 
o La clase MascotaExotica debe extender Animal e incluir una 
propiedad para habitat. 
2. Implementa métodos para mostrar información sobre cada tipo de animal 
y agrega ejemplos de instanciación.*/

export class Animal {
    nombre: string;
    raza: string;
    constructor(nombre:string, raza:string){
        this.nombre = nombre;
        this.raza = raza;
    }
}
  class Mascota extends Animal {
        dueño: string;
        constructor(nombre:string, raza:string, dueño: string){
            super(nombre,raza);
            this.dueño = dueño;
        }

        infoMascota(): string {
        return `Animal que es de casa por ejemplo ${this.nombre} raza: ${this.raza}, y su dueño: ${this.dueño} `
        }
    }

    const ejemploMascota = new Mascota("perro", "Pitbull", "Alejandro");
    console.log(ejemploMascota.infoMascota());

    class MascotaExotica extends Animal {
        habitat: string;
        constructor(nombre:string, raza: string, habitat: string) {
         super(nombre,raza);
         this.habitat = habitat;
        }

         infoMascotaExotica(): string {
                return `Animal de especie exotica que puede ser riesgoso tener en casa, por ejemplo ${this.nombre} raza: ${this.raza}, habitat: ${this.habitat} `
        }
    }

    const ejemploMascoExotica = new MascotaExotica("Anaconda","BOA","Amazonas");
    console.log(ejemploMascoExotica.infoMascotaExotica());
