//Ejemplo de una funcion generica

function identidad <T>(valor:T): T {
    return valor
}

//uso en numero
export let numero = identidad<number>(10) //T es un numero

//uso en string

let letra = identidad<string>("mary") //T es un string

console.log(numero,letra);



