/*1. Ejercicio de Coche 
Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
métodos para encender el coche y realizar un viaje, que incrementen el 
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
establecer un año o kilometraje no válido, imprime un mensaje indicando el 
error. */

export class Coche {
     private _marca : string;
    private _modelo : string;
    private _anio : number;
    private _kilometraje : number;

    constructor(_marca:string,_modelo:string,_anio:number,_kilometraje:number) {
        this._marca = _marca;
        this._modelo = _modelo;

        if (_anio < 1886) {
            console.log("Error: el año debe ser mayor a 1886");
            this._anio = 1886
        } else {
            this._anio = _anio
        }

        if (_kilometraje < 0) {
            console.log("Error: no se acepta un numero negativo");
            this._kilometraje = 0
        } else {
            this._kilometraje = _kilometraje
        }
    }
      // Getter para mostrar información básica
  public get info(): string {
    return `${this._marca} ${this._modelo} (${this._anio}) - ${this._kilometraje} km`;
  }

    encender(): void {
            console.log(`El coche ${this._marca} ${this._modelo} está encendido`);
    }

    realizarViaje(distancia:number): void {
        if (distancia <= 0) {
            console.log("Error: la distancia debe ser positiva")
            return 
        }
        this._kilometraje += distancia;
        console.log(`Has viajado ${distancia}km. kilometraje total: ${this._kilometraje}km`)
    }
}

const miCoche = new Coche("Toyota", "Corolla", 2020, 15000);

console.log(miCoche.info); // Toyota Corolla (2020) - 15000 km
miCoche.encender();        // 🔑 El coche Toyota Corolla está encendido
miCoche.realizarViaje(120); // 🚙 Has viajado 120 km. Kilometraje total: 15120 km

// Intentar crear uno con datos inválidos
const cocheAntiguo = new Coche("Ford", "Modelo T", 1800, -500);
// ❌ Error: El año no puede ser menor a 1886
// ❌ Error: El kilometraje no puede ser negativo
console.log(cocheAntiguo.info); // Ford Modelo T (1886) - 0 km