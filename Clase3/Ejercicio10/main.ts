/*Actividad 10: Consolidación de Módulos 
Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts, 
stringUtils.ts y user.ts. 
Asegúrate de que todas las funciones se puedan importar desde utils/index.ts. 
En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un 
solo flujo de trabajo, mostrando todos los resultados en la consola. */

import {
    capitalizarNombre,
    calculadorDeEdad,
    user,
    createUser
} from './UtilsIndex'


const UsuarioNuevo: user = createUser('valeria',1997)
const EdadUsuario = calculadorDeEdad(2025,1997)
const nombreUsuario = capitalizarNombre(UsuarioNuevo.name)

console.log(`El usuario ${UsuarioNuevo.name}, solicita el calculo de su edad ${EdadUsuario}, su nombre capitalizado ${nombreUsuario}`)