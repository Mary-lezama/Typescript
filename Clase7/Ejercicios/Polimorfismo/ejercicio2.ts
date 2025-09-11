/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución) 
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
proporcionar una implementación específica de cómo arrancar.*/
// Clase base

export class Vehiculo {
  public arrancar(): void {
    console.log("El vehículo está arrancando...");
  }
}

// Clase derivada: Coche
class Coche extends Vehiculo {
  public arrancar(): void {
    console.log("🔑 Girando la llave y arrancando el coche.");
  }
}

// Clase derivada: Moto
class Moto extends Vehiculo {
  public arrancar(): void {
    console.log("🏍️ Presionando el botón de encendido y arrancando la moto.");
  }
}

// Ejemplo de uso
const vehiculos: Vehiculo[] = [
  new Coche(),
  new Moto()
];

// Polimorfismo en acción
vehiculos.forEach(v => v.arrancar());