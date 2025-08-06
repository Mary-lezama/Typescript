/*Ejercicio 3: Métodos en Objetos 
1. Modifica el objeto del ejercicio anterior para que incluya un método 
llamado descripcion() que devuelva una descripción del libro. 
2. Llama al método y muestra el resultado en la consola. */


//Interfaz 
export interface libro  {
    titulo : string,
    autor: string,
    anioDePublicacion: number,
    descripcion: () => string

}
//creacion de la instancia 
const miLibro: libro = {
    titulo: "Narnia",
    autor: "Gabriel",
    anioDePublicacion: 2020,

    descripcion: function () {
        return `El libro es del anio ${miLibro.anioDePublicacion}, su Titulo es ${miLibro.titulo}, y el autor se llama ${miLibro.autor}`
    }
}

console.log(miLibro.descripcion())