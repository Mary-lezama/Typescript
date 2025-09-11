// Intervalo con condicion de parada

export let contador = 0

export let intervalo = setInterval(() => {
    contador ++
    console.log(`Contador con (Condicion de parada) ${contador}`)

    if(contador === 5) {
          clearInterval(intervalo)
          console.log("Intervalo con condicion detenido al llegar a 5")
    }
}, 3000);
 
console.log("Intervalo con condicion de parada iniciando...")
