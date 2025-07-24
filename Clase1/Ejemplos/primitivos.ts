// 1. string
 let nombre: string = "mary"
 let saludo: string = `hola, bienvenida ${nombre}`
 console.log(saludo);

// 2. numbers
let entero: number = 52
let decimal: number = 5.2
let cientifico: number = 1e5
console.log(entero);
console.log(decimal);
console.log(cientifico)

let Tuedad: number = 28
let confirmacion: String = `${saludo} confirmamos que tu edad es ${Tuedad}`
console.log(confirmacion);

// 3. boolean 
let elEsEstudiante: boolean = true
let noEsEstudiante: boolean = false
console.log(elEsEstudiante);
console.log(noEsEstudiante);

// 4. null
let valorNulo: null = null
console.log(valorNulo);

// 5. undefined
let valorIndefinido: undefined = undefined
console.log(valorIndefinido);

// 6. symbol
let id1: symbol = Symbol("id")
let id2: symbol = Symbol("MARY")
console.log("son simbolos unicos:", id1 === id2);