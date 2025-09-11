//Clase que sólo tiene un getter
class Constante {
  private _valor: number; //Propiedad privada para el valor

  constructor(valor: number) {
    this._valor = valor; //Inicializar el valor

  }
//Solo getter para acceder al valor
  public get valor(): number {
    return this._valor;
  }
}

//Uso de la clase Constante
const constante = new Constante(42);
console.log(`Valor de la constante: ${constante.valor}`);
//Muestra 42

//Clase que sólo tiene un setter
class Contador {
  private _cuenta: number; //Propiedad privada para la cuenta

  constructor() {
    this._cuenta = 0; //Inicializar la cuenta en 0
  }

  //Setter para modificar la cuenta
  public set cuenta(valor: number) {
    if (valor >= 0) {//Verifica que el valor sea no negativo
      this._cuenta = valor;//Asignar el nuevo valor a la cuenta
    } else {
      console.error("La cuenta no puede ser negativa.");
    }
  }

  //Metodo para mostrar la cuenta
  public mostrarCuenta(): number {
    
    return this._cuenta;//Devuelve el valor de la cuenta
  }
}

//Uso de la clase Contador
const contador = new Contador();
contador.cuenta = 5; // Asigna un nuevo valor a la cuenta 5
console.log(`Valor de la cuenta: ${contador.mostrarCuenta()}`);//Muestra 5
//No hay manera de acceder directamente al valor de _cuenta
//console.log(contador._cuenta); // Error: _cuenta es privado


//La clase Constante ilustra cómo se puede encapsular un valor que debe permanecer inmutable 
// para que solo sea de lectura, permitiendo su acceso a través de un getter, sin
// ofrecer la posibilidad de modificarlo directamente.
// Mientras que la clase Contador muestra cómo se puede gestionar un valor que se puede
// actualizar, permitiendo modificar su valor de manera controlada, a traves de un setter
//con validación mientras que el acceso directo al valor se restringe, fomentando
//así un control mas seguro sobre la lógica de la aplicación.