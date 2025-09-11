/*2. Ejercicio de Libro 
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
Implementa métodos para prestar y devolver el libro, asegurando que solo se 
pueda prestar si está disponible y que se pueda devolver solo si ha sido 
prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
válida. */

export class Libro {
    private _titulo : string;
    private _autor : string;
    private _anioPublicacion : number;
    private _disponible: boolean;

    constructor(_titulo: string,_autor : string, _anioPublicacion: number) {
        this._anioPublicacion = _anioPublicacion;
        this._titulo = _titulo;
        this._autor = _autor;
        this._disponible = true // Por defecto disponible
    }
    // Método para prestar el libro

    prestarLibro(): void {
        if(this._disponible) {
            this._disponible = false;
            console.log(`Has prestado el libro: ${this._titulo}`)
        } else {
            console.log(`El libro: ${this._titulo} ya esta prestado`)
        }
    }

    devolverLibro(): void {
    if (!this._disponible) {
      this._disponible = true;
      console.log(`Has devuelto el libro: ${this._titulo}`);
    } else {
      console.log(`El libro "${this._titulo}" ya estaba disponible, no se puede devolver.`);
    }
  }
}

// 🚀 Uso de la clase
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

libro1.prestarLibro();   // ✅ Prestado con éxito
libro1.prestarLibro();   // ❌ Ya estaba prestado
libro1.devolverLibro();  // ✅ Devuelto con éxito
libro1.devolverLibro();  // ❌ Ya estaba disponible
