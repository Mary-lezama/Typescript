// Creamos una promesa
const miPromesa = new Promise ((resolve,reject) =>  {
    console.log("Estado pendiente: La operacion comenzo");

// Simulamos una operacion asincronica
    setTimeout(() => {

        //generamos un valoor booleano aleatorio (true= exito/ false= error)
        const exito = Math.random() > 0.5

        if (exito) {
            resolve("La operacion fue completada con exito")
        } else {
            reject("Error: la operacion fallo")
        }
    }, 2000)
});

//manejo de la promesa

miPromesa
.then((resultado) => {
    console.log("Exito", resultado);
})

.catch((error) => {
    console.log("Error", error);
})

.finally(() => {
    console.log("Promesa finalizada");
})

console.log("Promesa creada, esperando resultado...");