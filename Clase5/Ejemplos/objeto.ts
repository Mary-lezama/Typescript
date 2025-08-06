//Definicion de una interfaz

interface estudiante {
    nombre: string,  //propiedad :  tipo
    edad: number,
    materiaFavorita: string,
    promedio: number

    saludar: () => void  //metodo saludar(que no devuelve valor)
    obtenerDetalles: () => string //metodo que devuelve string 
}

// Creacion de un objeto que cumple con la interfaz de estudiante

const miEstudiante : estudiante = {
    nombre: "Mary",
    edad: 25,
    materiaFavorita: "Matematicas",
    promedio: 9.25,

    saludar: function() {
        console.log(`Hola soy ${miEstudiante.nombre}`)
    },

    obtenerDetalles: function() {
        return `Tengo ${miEstudiante.edad}, mi materia favorita es ${miEstudiante.materiaFavorita}, por lo tanto mi promedio de esa materia es ${miEstudiante.promedio}`
    }
    
}

//uso de los metodos:

miEstudiante.saludar()
console.log(miEstudiante.obtenerDetalles())