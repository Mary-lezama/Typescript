// a través de setters, con validación para asegurar que los valores sean positivos.
// Incluye un metodo para calcular el área del triángulo utilizando la formula correspondiente.

class Triangulo {
    private _base: number; // Base del triángulo
    private _altura: number; // Altura del triángulo

    constructor() {
        this._base = 0; // Inicializando la base en 0
        this._altura = 0; // Inicializando la altura en 0
    }

    // Setter para la base, con validación
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log("La base debe ser un valor positivo.");
        }
    }
    //Setter para la altura con validacion
    public set height(nuevaAltura: number) {
        if (nuevaAltura > 0) {
            this._altura = nuevaAltura;
        } else {
            console.log("La altura debe ser un valor positivo.");
        }
    }

    //Metodo para calcular el area del triangulo
     public calcularArea(): number {
        return (this._base * this._altura) / 2; //Formula del area
    }
}

//Uso de la clase Triangulo
const triangulo = new Triangulo();
triangulo.base = 10;
triangulo.height = 5;

console.log(`Area: ${triangulo.calcularArea()}`); // Salida: 25

//Intento de establecer una base negativa
triangulo.base = -3;
// Salida: La base debe ser un valor positivo.
triangulo.height = 6; // Estableciendo una nueva altura válida
console.log(`Area: ${triangulo.calcularArea()}`); // Salida: 18