/*Ejercicio 5: Manejo de rutas y errores con Express 
Consigna: Crea un servidor que: 
1. Devuelva un mensaje de bienvenida (¡Bienvenida al servidor de Express!) al 
acceder a la ruta raíz /. 
2. Devuelva un error 404 (Ruta no encontrada) para cualquier ruta que no 
esté definida.*/

const express = require ('express');
const app = express()
const PORT= 4050

app.get('/', (req,res) => {
    res.send('¡Bienvenida al servidor de Express!)');
});

// 2. Manejo de rutas no definidas (Middleware para 404)

app.use((req,res) => {
    res.status(404).send('Error: 404 (Ruta no encontrada) ');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en  http:localhost:${PORT}`)
});
