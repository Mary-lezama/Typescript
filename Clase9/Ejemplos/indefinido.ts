//Intervalo indefinido (cancelacion manual o hasta que termine)

export let contador = 0

const intervalo = setInterval(() => {
    contador ++; 
    console.log(`Contador (Indefinido) ${contador}`);
    // clearInterval(intervalo)
}, (3000));

console.log("Intervalo indefinido iniciando..."); 