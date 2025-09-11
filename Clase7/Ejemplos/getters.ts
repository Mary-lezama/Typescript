
class Rectangulo {
  private _ancho: number; // Propiedad privada para el ancho
  private _alto: number; // Propiedad privada para el alto

  // Constructor 
  constructor(ancho: number, alto: number) {
    this._ancho = ancho; // Inicializando el ancho
    this._alto = alto;   // Inicializando el alto
  }

  // Getter para calcular el área del rectángulo
  public get area(): number {
    return this._ancho * this._alto; // Devolviendo el área calculada   
  }

  // Getter para acceder al alto
  public get alto(): number {
    return this._alto;
  }

  // Getter para acceder al ancho
  public get ancho(): number {
     return this._ancho;
  }
  

}

// Creando una instancia de Rectangulo
const rectangulo = new Rectangulo(5, 10);



// Accediendo al área a través del getter
console.log(`Área: ${rectangulo.area}`); // Salida: 50
console.log(`Alto: ${rectangulo.alto}`); // Salida: 10
console.log(`Ancho: ${rectangulo.ancho}`); // Salida: 5
//rectangulo.area = 60; // Error: No se puede asignar a 'area' porque es una propiedad de solo lectura.
//rectangulo.alto = 15; // Error: No se puede asignar a 'alto' porque es una propiedad de solo lectura.
//rectangulo.ancho = 7; // Error: No se puede asignar a 'ancho' porque es una propiedad de solo lectura.
//rectangulo.get area(); // Error: 'area' es una propiedad, no un método.
//rectangulo.get alto(); // Error: 'alto' es una propiedad, no un método.
//rectangulo.get ancho(); // Error: 'ancho' es una propiedad, no u