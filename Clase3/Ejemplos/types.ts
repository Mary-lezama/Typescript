// Alias de tipos 

// 1. Alias para tipos primitivos

type ID = number; //alias para numeros 
type nombre = string; //alias para string
type activo = boolean; //alias para booleano 

// Usando los alias para declarar  variables

let usuarioid: ID = 123;
let nombreUsuario: nombre = 'Lucia';
let cuentaActiva: activo = true;

console.log(`Usuario: ${nombreUsuario}, ID: ${usuarioid}, Cuenta activa ${cuentaActiva}`)

//Alias para objeto

type Direccion = {
    calle: string; // a las propiedades les aplico el tipo
    ciudad: string;
    codigoPostal: number;
}

// Usamos el alias direccion para crear un objeto con las mismas propiedades

let miDireccion : Direccion = {
    calle: 'mendoza',
    ciudad: 'Tucuman',
    codigoPostal: 123

}

console.log(`Vivo en la calle ${miDireccion.calle} de la ciudad ${miDireccion.ciudad} codigo postal ${miDireccion.codigoPostal}`);

//Alias de union de tipos 
//donde una variable puede tener  uno o varias tipos posibles 
 
type Resultado = "exito" |"error"
type idUsuario = string | number

//usamos ambos alias 

let estadoOperacion: Resultado = "error"
let idUsuario: idUsuario = 45 
let idUsuario1: idUsuario = "soy letra"

console.log(`Estado de operacion ${estadoOperacion}, usuario id: ${idUsuario}`);

