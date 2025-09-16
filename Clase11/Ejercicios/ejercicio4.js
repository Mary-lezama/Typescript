/*4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores 
Diseña una función que simule un proceso de pago que tarda 3 segundos en 
completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y 
lanzar un error. Utiliza try/catch para manejar el error de manera adecuada. 
Esta simulación es relevante para entender cómo gestionar errores en procesos 
financieros o de pago, en los cuales las validaciones son cruciales.*/

// Simulación de un proceso de pago
function procesarPago(monto) {
  return new Promise((resolve, reject) => {
    console.log(`💸 Procesando pago de $${monto}...`);

    setTimeout(() => {
      if (monto > 1000) {
        reject(new Error(`Pago rechazado: el monto $${monto} excede el límite permitido.`));
      } else {
        resolve(`✅ Pago de $${monto} completado con éxito.`);
      }
    }, 3000); // Simula un retardo de 3 segundos
  });
}

// Función principal con manejo de errores
async function ejecutarPago() {
  try {
    const resultado = await procesarPago(800); // Cambia el monto para probar
    console.log(resultado);
  } catch (error) {
    console.error("⚠ Error en el proceso de pago:", error.message);
  } finally {
    console.log("🧾 Proceso de pago finalizado (éxito o error).");
  }
}

// Ejecutar el ejemplo
ejecutarPago();
