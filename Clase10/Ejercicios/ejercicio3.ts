/*Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all() 
Consigna: 
Simula la consulta a tres APIs diferentes que devuelven información sobre 
usuarios, productos y ventas. Cada consulta debe realizarse usando una función 
que retorne una promesa. Usa Promise.all() para esperar a que todas las 
consultas se completen y luego: 
1. Imprime un mensaje con los resultados si todas las consultas fueron 
exitosas. 
2. Si alguna falla, imprime un mensaje de error. 
3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 
segundos). 
Opcional: Modifica el comportamiento para que si alguna consulta falla, se 
devuelva el mensaje: "No se pudo completar la operación: [API que falló]".*/

function consultarAPI(nombre:string,tiempo:number): Promise <string> {
    return new Promise((resolve,reject) => {
        console.log(`Consultando API de: ${nombre}....`);

          setTimeout(() => {
        const exito = Math.random() > 0.3

        if(exito) {
            resolve(`Respuesta de la API de: ${nombre}`)
        } else {
            reject(`Error: No se pudo obtener informacion de la API: ${nombre}`)
        }
    }, tiempo);

 });

} 

Promise.all([
    consultarAPI("Usuarios", 6000),
    consultarAPI("Productos", 2000),
    consultarAPI("Ventas", 9000),
])

.then((resultados) => {
    console.log("Todas la consultas fueron exitosas:") ;
    resultados.forEach((resultado) => console.log(resultado));
})

.catch((error) => {
    console.log( error)
});
