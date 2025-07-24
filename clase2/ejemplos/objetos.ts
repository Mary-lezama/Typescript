// 1. Definicion objeto basico 

let auto = {
    marca: "toyota",
    modelo: "corola",
    anio: 2022
}

console.log(`Marca: ${auto.marca}, Modelo:${auto.modelo}, Anio: ${auto.anio}`);

//Declaracion explicita de los tipos de objetos

let libro : { titulo: string; autor: string; anio:number} ={
    titulo: "100 años de soledad",
    autor: "Garcia Marquez",
    anio: 1984
}
console.log(`titulo: ${libro.titulo}, Autor: ${libro.autor}, Anio: ${libro.anio}`);

//Propiedades opcionales

let estudiante: {nombre: string; edad?: number} = {
     nombre: 'Mary',
}

console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`);

// Metodos del objeto

let perro = {
    nombre: 'Blaki',
    raza: 'Caniche',
    ladrar: function(){
        return `${this.nombre} esta ladrando!`
    }
}
console.log(perro.ladrar());