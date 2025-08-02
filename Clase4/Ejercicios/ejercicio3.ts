/*Actividad 3: Crear una función genérica 
Crea una función genérica que tome un parámetro de cualquier tipo y lo 
devuelva. Prueba la función con diferentes tipos de datos. */

function identidad <T> (valor: T) : T {
    return valor
}

console.log(identidad<string> ("hola"));
console.log(identidad<number> (25));
console.log(identidad<boolean> (true));
console.log(identidad<any> ("esto es un any"));


