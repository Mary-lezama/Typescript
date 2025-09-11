/*2. Lectura de Datos con Retraso Simulado y Manejo de Errores 
Escribe una función que simule la obtención de datos de una base de datos o 
API. La función debe simular un retraso de 2 segundos para obtener los datos. 
Sin embargo, en ocasiones esta operación puede fallar (simula este fallo 
lanzando un error manualmente). 
Detalles: 
• Utiliza async y await para hacer que la función sea asíncrona. 
• Usa try/catch para capturar posibles errores. 
• Si todo va bien, muestra el mensaje "Datos obtenidos con éxito". 
• En caso de error, muestra "Error al leer datos". 
Esta simulación es muy útil para ver cómo manejar errores en operaciones de 
obtención de datos, una tarea común en programación backend. */


// Función que simula obtener datos de una BD o API
async function obtencionDatos() {
     // Simula un retraso de 2 segundos
    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve,ms))
    };

    try {
        console.log("Consultando datos...");
        //Esperamos 2 segundos
        await esperar(2000);

        //simulamos una probabilidad de fallo (50%de chance)
        if (Math.random() < 0.5) {
            throw new Error("Fallo en la base de datos")
        }
        console.log("Datos obtenidos con exito");
    } catch (error) {
        console.log("Error al leer datos:",error.message)
    }  
}

//uso

(async () =>  {
    await obtencionDatos();
})();