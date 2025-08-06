//Ejemplo basico de un objeto

export let alumna = {
    nombre: "naza",
    edad: 27,
    curso:"Back end"
}

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}

/*[propiedad as keyof typeof alumna]: Con esto le decimos al compilador que la variable es una 
clave valida de las propiedades del objeto alumna es decir una de las propiedades de alumna (nombre,
edad, curso)*/

//Ejemplo basico con array 

let lenguajes = ["javascript", "python", "java"];

for (let indice in lenguajes) {
    console.log(`Indice: ${indice}, Valor: ${lenguajes[indice]}`);
}
