//any: Permite almacenar cualquier tipo de datos sin restricciones
let variableAny: any = "hola soy un any"
console.log(variableAny);

let variableAny2: any = 27
console.log(variableAny2);

let variableAny3: any = {name:"maryta", edad:27}
console.log(variableAny3);

//unknown: Similiar a anny pero mas seguro y robusto (requiere verificacion)
let variableUnknown: unknown = "Hola soy Unknown"
console.log(variableUnknown)

//void: Se usa en funciones que generalmente no retornan nada
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Esto es una funcion void")

//never: Representa el tipo de funciones que nunca retornan 
function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}
 throwError("Esto es una funcion never")
