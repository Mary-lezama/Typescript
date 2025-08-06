/*Ejercicio 1: Operaciones básicas con Arrays 
1. Declara un array de números con los valores [5, 10, 15, 20, 25]. 
2. Imprime el tercer elemento del array. 
3. Añade el número 30 al final del array. 
4. Elimina el primer número del array. 
5. Muestra por consola la longitud actual del array. */


// 1. Declara un array de números con los valores [5, 10, 15, 20, 25]. 
const numerosArray = [5,10,15,20,25]
console.log("Array de numeros: ", numerosArray)

//2. Imprime el tercer elemento del array
console.log("Tercer elemento del array: ", numerosArray[2]) //Imprime el tercer elemento del array que se encuentra en el indice 2 , Resultado:15

// 3. Añade el número 30 al final del array.
const agregarNumero = numerosArray.push(30)
console.log("Agregando el numero 30 al final del array: ", numerosArray) //[ 5, 10, 15, 20, 25, 30 ]

//4. Elimina el primer número del array. 

const eliminarNumero = numerosArray.shift()
console.log("Eliminando el primer elemento del array: ",numerosArray)  //[ 10, 15, 20, 25, 30 ]

//5. Muestra por consola la longitud actual del array

const longitudArray = numerosArray.length
console.log("Longitud: ",longitudArray) // 5


