//importamos

import createUser from './user'

const usuario = createUser("ana", 26)

console.log(usuario);

console.log("nombre", usuario.name , "edad", usuario.age)