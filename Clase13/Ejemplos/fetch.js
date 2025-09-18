/*Descripcion: Modificar la funcion para recibir un id  como parametro y asi hacer la funcion reutilizable para 
distintos personajes . Solicitar datos de diferentes personajes de la API  de rick y morty pasndo un id como 
argumento. Crear una función fetchCharacter(id). Validar el id y lanzar un error si no es válido.*/

async function fetchCharacter(id) {
    try {
        //validamos el id 
        if (!id) throw  new  Error('No se ingreso ID')

            //HACEMOS UNA SOLICITUD A LA API CON EL ID QUE LE PASAMOS 
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

            //Verificamos si la respuesta no fue exitosa 
            if (!response.ok) throw new Error (`El personaje no fue encontrado: ${response.status}`)

                //convertimos la respuesta a formato json 
                const character = await response.json()

                //imprimimos los datos del personaje 
                console.log('Datos del personaje: ', character);
              } catch (error) {
                console.error('Error: ', error.message);
              }
}

fetchCharacter(3)
