/*Ejercicio 4: Practicando desestructuración de objetos 
Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud: 
{ 
} 
"name": "Katherine Johnson", 
"email": "katherine@example.com", 
"age": 42 
Crea un endpoint POST que use desestructuración para extraer name y email. 
Luego, responde con un mensaje que incluya estos valores. Si el cliente envía 
datos incompletos, responde con un error 400. */

const express = require('express');
const app = express()
const PORT = 3075

// Middleware para procesar JSON en el body
app.use(express.json());

// Ruta POST que usa desestructuración

app.post('/usuarios', (req,res) => {
     // Desestructuración de req.body
    const {name, email} = req.body


//validacion

if ( !name || !email ) {
    return res.status(400).json({
        error:'Faltan datos'
    })
}
// Responder usando los valores desestructurados

res.json({
    mensaje: `Usuario recibido correctamente ${name} ${email}`
})

})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
