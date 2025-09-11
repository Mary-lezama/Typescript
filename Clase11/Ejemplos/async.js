//Funcion asincrona
async function saludo() {
    return `Hola gente`
}

//llamamos de funcion y manejamos 
saludo().then((mensaje) => console.log(mensaje))