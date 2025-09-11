/*1. Mueblería: Actualización de Precios 
En una mueblería, se requiere un sistema que permita actualizar los precios de 
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y 
un identificador único. Implementa las siguientes funciones: 
• Añadir un nuevo mueble. 
• Actualizar el precio de un mueble después de 3 segundos utilizando 
setTimeout(). 
• Mostrar el inventario de muebles. */

interface Mueble {  

    id: number;
    nombre : string;
    precio : number;
}

class Muebleria {
    private inventario : Mueble[] = [];

    añadirMueble(id:number,nombre:string,precio:number): void {
        const mueble : Mueble = {id,nombre,precio};
        this.inventario.push(mueble);
        console.log(`Mueble agregado al inventario ${nombre} ($${precio})`)
    }

    actualizarPrecio(id:number,nuevoPrecio:number): void {
        console.log(`Actualizando el precio del mueble con ID: ${id} en 5 segundos....`);
        setTimeout(() => {
            const mueble = this.inventario.find( m => m.id === id);
            
            if (mueble) {
                mueble.precio = nuevoPrecio;
                console.log(` Precio actualizado: ${mueble.nombre} ahora cuesta ($${mueble.precio})`);
            }else {
                console.log(`No se encontro el mueble con ID: ${id}`)
            }
        }, 5000);

    }

    mostrarInventario(): void {
        console.log("Inventario de muebles");
        this.inventario.forEach(mueble => {
            console.log(`ID: ${mueble.id} | NOMBRE: ${mueble.nombre} | PRECIO: $${mueble.precio}`);
        });
    }
}

const tienda = new Muebleria()

tienda.añadirMueble(1,"Sofa", 15000)
tienda.añadirMueble(2,"Cama", 12000)
tienda.añadirMueble(3,"Mesa", 23000)

tienda.mostrarInventario()

tienda.actualizarPrecio(2,50000)

setTimeout(() => {
  tienda.mostrarInventario();
}, 5000);
