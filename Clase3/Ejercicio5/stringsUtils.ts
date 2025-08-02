
// Convierte a mayúsculas la primera letra de cada palabra
function capitalizar(str:string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Invierte la cadena de texto
 const revertir = (str: string): string => {
  return str.split('').reverse().join('');
}

export {capitalizar, revertir}
