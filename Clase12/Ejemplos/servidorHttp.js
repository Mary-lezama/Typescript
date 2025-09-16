const http = require('http');

const server = http.createServer((req,res) => {
    //establece el codigo de estado de la res json
    res.statusCode = 200
     //configuran el encabezado para el cliente sepa que el contenido es texto plano 
    res.setHeader('Content-type', 'Text/plain')

    res.end('Hola chicas')
})

server.listen(3000, () => {
    console.log('Servidor ejecutando en http://localhost:3000');
})
