// Con cancelacion 

let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara por que se cancelara a los 5 segundos")
}, 5000);

clearTimeout(temporizador)