/*2. Florería: Envío Programado de Pedidos 
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe 
contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
Implementa las siguientes funciones: 
• Añadir un pedido. 
• Programar el envío de un pedido utilizando setTimeout() para simular un 
retraso de 5 segundos. 
• Mostrar todos los pedidos pendientes. */

interface Pedido {
    cliente : string;
    cantidad : number;
    tipoFlores : string;
    enviado: boolean; // Para saber si el pedido ya se envió o sigue pendiente
}

class Floreria {
    private pedidos : Pedido [] = []

    añadirPedido(cliente:string,cantidad:number,tipoFlores:string) : void {
        const nuePedido : Pedido = {cliente,cantidad,tipoFlores,enviado:false}
        this.pedidos.push(nuePedido);
        console.log(`Pedido nuevo ingresado Cliente: ${cliente} Cantidad de flores: ${cantidad}  Tipo de flores: ${tipoFlores}`)
    }

    programarEnvio(cliente:string): void {
     console.log(`Programando envio para ${cliente}...`)
     
     setTimeout(() => {
        const proPedido = this.pedidos.find(p => p.cliente === cliente && !p.enviado)
        if (proPedido) {
        proPedido.enviado = true;
        console.log(`🚚 Pedido enviado: ${proPedido.cantidad} ${proPedido.tipoFlores} para ${proPedido.cliente}`);
      } else {
        console.log(`⚠️ No se encontró un pedido pendiente para ${cliente}`);
      }
     }, 5000)
    }

      // Mostrar todos los pedidos pendientes
  mostrarPendientes(): void {
    console.log("📦 Pedidos pendientes:");
    const pendientes = this.pedidos.filter(p => !p.enviado);
    if (pendientes.length === 0) {
      console.log("🎉 No hay pedidos pendientes.");
    } else {
      pendientes.forEach(p => {
        console.log(`Cliente: ${p.cliente} | Flores: ${p.cantidad} ${p.tipoFlores}`);
      });
    }
  }
}

const floreria = new Floreria();

floreria.añadirPedido("Ana", 12, "rosas");
floreria.añadirPedido("Carlos", 8, "tulipanes");

floreria.mostrarPendientes();

// Programamos los envíos
floreria.programarEnvio("Ana");
floreria.programarEnvio("Carlos");

// Volvemos a mostrar pedidos pendientes después de 6 segundos
setTimeout(() => {
  floreria.mostrarPendientes();
}, 6000);