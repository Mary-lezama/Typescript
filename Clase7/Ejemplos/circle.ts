//Este ejemplo de la clase Circle muestra cómo gestionar el radio de un círculo a 
//través de un setter que valida que el valor sea positivo y proporciona getters
// para calcular el área y la circunferencia. Se demuestra cómo se puede acceder 
// y modificar el radio, incluyendo el manejo de intentos de asignación de valores
// negativos, que son rechazados con un mensaje de error.
// Esto enfatiza la importancia de la validación en la manipulación de propiedades.
class Circle {
  private _radius!: number; // Propiedad privada para el radio

  // Constructor que inicializa el radio
  constructor(radius: number) {
    this.radius = radius; // Asigna el valor inicial del radio
  }

  // Getter para el radio
  public get radius(): number {
    return this._radius; // Devuelve el valor del radio
  }

  // Setter para el radio, con validación
  public set radius(value: number) {
    if (value > 0) { // Verifica que el nuevo valor del radio sea positivo
      this._radius = value;
    } else {
      console.error("El radio debe ser un valor positivo.");
      console.log("El radio debe ser mayor que cero."); // Mensaje de error si la validación falla
    }
  }

  // Getter para el área
  public get area(): number {
    return Math.PI * this._radius * this._radius; // Devuelve el área del círculo
  }

  // Getter para la circunferencia
  public get circumference(): number {
    return 2 * Math.PI * this._radius; // Devuelve la circunferencia del círculo
  }
}
//Uso de la clase Circle
const circle = new Circle(5);// Crea una nueva instancia de Circle con radio 5

//Usamos el getter para obtener el radio y el área
console.log(`Radio: ${circle.radius}`);//Muestra el radio actual 5
console.log(`Área: ${circle.area}`);//Muestra el área actual 78.53981633974483
console.log(`Circunferencia: ${circle.circumference}`);//Muestra la circunferencia actual 31.41592653589793

//Usamos setter para modificar el radio
circle.radius = 10; // Asigna un nuevo valor al radio 10
console.log(`Nuevo radio: ${circle.radius}`);//Muestra el nuevo radio 10

circle.radius = -3; // Intenta asignar un valor negativo al radio, lo cual es inválido
//El radio no cambia ya que el valor es negativo invalido
console.log(`Radio: ${circle.radius}`);//Muestra el radio actual 10

//Modificamos correctamente el radio
circle.radius = 8; // Asigna un nuevo valor al radio 8
console.log(`Nuevo radio: ${circle.radius}`);//Muestra el nuevo radio 8
console.log(`Nueva área: ${circle.area}`);//Muestra la nueva área 201.06192982974676
console.log(`Nueva circunferencia: ${circle.circumference}`);//Muestra la nueva circunferencia 50