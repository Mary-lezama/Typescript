//Definimos una clase

class Gato {
    //propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    //constructor
    constructor(nombre: string, edad:number, raza: string){
        this.nombre = nombre;
        this.edad = edad ;
        this.raza = raza;
    }


    //metodos
    //1. para obetener la info del gato
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }
    
  //2. para cambiar la raza del gato
  public cambiarRaza(nuevaRaza: string): void {
    this.raza = nuevaRaza;
  }
}

//creamos una instancia de la clase
const gato1 = new Gato ("Pelusa", 2, "persa")

console.log(gato1.obtenerInformacion()) 

// cambiar raza
gato1.cambiarRaza("Siames")
console.log(gato1.obtenerInformacion());