//funcion que simule un proceso asincroco y se demore  2 segundos

function procesoLargo() {
    return  new Promise((resolve)=> {
        setTimeout(() => resolve ("Proceso completado"), 5000)
    })
}

//funcion principal que usara async y await 

async function ejecutarProceso() {
    console.log("Iniciando proceso...");

    const resultado = await procesoLargo()
    console.log(resultado);

    console.log("Proceso terminado")
}

ejecutarProceso()