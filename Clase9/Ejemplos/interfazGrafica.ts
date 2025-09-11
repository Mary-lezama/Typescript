// Ejemplo de actualizacion de interfaz grafica

function actualizarReloj() {
    //creamos una instancia de date para obtener la fecha actualizada
    const ahora = new Date()

    //obtenemos la hora actual de la instancia
    const horas = ahora.getHours()

    //obtenemos los minutos actuales de la instancia
    const minutes = ahora.getMinutes()

    //obtenemos segundos
    const segundos = ahora.getSeconds()

    console.log(`${horas}:${minutes}:${segundos}`)
}

//Creamos un intervalo que llame a la funcion 

let relojIntervalo = setInterval(actualizarReloj,1000)