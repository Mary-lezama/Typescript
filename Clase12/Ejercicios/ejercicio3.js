/*Ejercicio 3: Usar parámetros dinámicos con :id 
Consigna: En este ejercicio, vamos a permitir que el cliente busque información 
de un usuario por su ID. Crea un endpoint GET que reciba un parámetro 
dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar 
este valor y busca al usuario correspondiente en una lista. Si no se encuentra el 
usuario, responde con un error 404.*/

 const exprees = require('express');

 const app = exprees()

 const PORT = 3080

 const usuarios = [
    {id: 1, name: 'alejandra', email: 'alejandra@gmail.com'},
    {id: 2, name: 'alex', email: 'alex@gmail.com'},
    {id: 3, name: 'fede', email: 'fede@gmail.com'}
];

app.get('/', (req,res) => {
    res.send('Bienvenido')
})

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

// Ruta GET para obtener un usuario por ID (parámetro dinámico)
 app.get('/usuarios/:id' , (req, res) => {
     const id = parseInt(req.params.id);
     const usuario = usuarios.find(u => u.id === id);

     if (!usuario) {
        return res.status(404).json({ error: `No se encontro el usuario con id: ${id}`})
     }

     res.json(usuario)
 })

 app.listen(PORT, () => {
    console.log(`Servidor prendido : http:localhost:${PORT}`)
 })