/*Ejercicio 2: Creación de Objetos y Atributos 
1. Define un objeto que represente un libro con las siguientes propiedades: 
título, autor, y año de publicación. 
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola. */


//Interfaz 
interface libro  {
    titulo : string,
    autor: string,
    anioDePublicacion: number,

}
//creacion de la instancia 
const miLibro: libro = {
    titulo: "Narnia",
    autor: "Gabriel",
    anioDePublicacion: 2020
}


console.log(miLibro)
//console.log(`El nombre de mi libro favoriro es: ${miLibro.titulo}, se publico en el año: ${miLibro.anioDePublicacion}, y el autor se llama ${miLibro.autor}`)
