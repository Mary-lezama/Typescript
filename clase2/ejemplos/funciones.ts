// funcion basica

function sumar (a: number, b: number): number {
    return a + b
}
let resultado = sumar (3,4);
console.log(resultado);

//funcion que muestra un mensaje sin retorno

function mostrarMensaje(mensaje: string): void{
    console.log(mensaje);
}
console.log(mostrarMensaje('Hola'));

// funcion con parametro opcional

function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return`${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}
console.log(saludar("mary"));
