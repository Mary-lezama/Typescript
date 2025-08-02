/*Actividad 6: Uso de Namespaces 
Crea un namespace llamado Geometry en un archivo geometry.ts que contenga 
las siguientes funciones: 
• areaOfCircle(radius: number): number: devuelve el área de un círculo. 
• areaOfSquare(side: number): number: devuelve el área de un cuadrado. 
Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar 
a las funciones y muestra los resultados en la consola. */


//Calculo del area de un circulo
export namespace Geometry {
export const areaOfCircle = (radius:number): number => {
    return Math.PI * radius * radius;

}

//calculo del area de un cuadrado
export const areaOfSquare = (side: number): number =>  {
    return side * side ;
}
}