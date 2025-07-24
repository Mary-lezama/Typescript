/*Ejercicio 7: Función que modifica propiedades de un objeto 
Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
empleado con las propiedades nombre (string) y salario (number), y un número 
que represente el porcentaje de aumento. La función debe aumentar el salario 
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */

// Definimos el tipo Empleado
type Empleado = {
  nombre: string;
  salario: number;
};

// Función que aumenta el salario según un porcentaje
function aumentarSalario(empleado: Empleado, porcentaje: number): number {
  const aumento = empleado.salario * (porcentaje / 100);
  empleado.salario += aumento;
  return empleado.salario;
}

// Creamos un empleado y aplicamos un aumento del 20%
const empleado1: Empleado = {
  nombre: "Juan",
  salario: 50000
};

const nuevoSalario = aumentarSalario(empleado1, 20);

// Mostramos el resultado en consola
console.log(`Nuevo salario de ${empleado1.nombre}: $${nuevoSalario}`);