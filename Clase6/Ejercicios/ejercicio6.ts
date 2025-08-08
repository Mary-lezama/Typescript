/*Ejercicio 6: Herencia con Métodos Sobrescritos y super 
Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que 
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari 
que sobrescriba el método abrirPuertas() pero llamando al método de la clase 
base con super. */

class Zoologico {
    abrirPuertas(): void {
        console.log ("Zoologico abierto")
    }
}

class ZoologicoSafari extends Zoologico {
    // Sobrescribimos el método
     abrirPuertas(): void {
        super.abrirPuertas();  // Llama al método de la clase base
        console.log ("Bienvenidos al Zoologico Safari.")
     }
}


const zooSa = new ZoologicoSafari()
zooSa.abrirPuertas()