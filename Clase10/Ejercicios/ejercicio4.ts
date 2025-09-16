/*Ejercicio 4: Promise.race() - Carrera entre Tareas 
Consigna: 
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. 
Usa Promise.race() para que el programa imprima solo la primera tarea que se 
complete. Luego: 
1. Asegúrate de que se imprime qué tarea ganó la carrera. 
2. Controla posibles errores si alguna de las promesas falla. */

// Definimos el tipo que devolverá cada tarea
type ResultadoTarea = string;

// Función que simula tareas con tiempo aleatorio
function tarea(nombre: string): Promise<ResultadoTarea> {
  return new Promise((resolve, reject) => {
    const tiempo: number = Math.floor(Math.random() * 3000) + 1000; // 1 a 4 seg
    console.log(`${nombre} iniciada (tardará ${tiempo} ms)`);

    setTimeout(() => {
      // 20% de probabilidad de que la tarea falle
      if (Math.random() < 0.2) {
        reject(`${nombre} falló después de ${tiempo} ms`);
      } else {
        resolve(`${nombre} completada en ${tiempo} ms`);
      }
    }, tiempo);
  });
}

// Creamos las tareas
const t1: Promise<ResultadoTarea> = tarea("Tarea 1");
const t2: Promise<ResultadoTarea> = tarea("Tarea 2");
const t3: Promise<ResultadoTarea> = tarea("Tarea 3");

// Promise.race para determinar quién termina primero
Promise.race([t1, t2, t3])
  .then((resultado: ResultadoTarea) => {
    console.log("🏆 Ganó la carrera:", resultado);
  })
  .catch((error: string) => {
    console.error("⚠ Error en la primera tarea completada:", error);
  });