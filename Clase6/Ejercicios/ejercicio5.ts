/*Ejercicio 5: Herencia con Modificadores de Acceso 
Consigna: Crea una clase base Compania con un atributo privado 
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase 
derivada EmpresaTecnologia que use el atributo protegido y agregue un 
método que calcule el doble de los ingresos anuales. */

class Compania {
    private nombreCompania : string;
    protected ingresosAnuales: number ;
    constructor(nombreCompania:string,ingresosAnuales:number) {
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;
    }
}

class EmpresaTecnologia extends Compania {
    constructor(nombreCompania: string, ingresosAnuales:number) {
        super(nombreCompania, ingresosAnuales)
    }
    calculo(): number {
        return this.ingresosAnuales * 2
    }
    
}

const ingreso2025 = new EmpresaTecnologia("Wafers",70000) 

console.log("Doble del ingreso anual:", ingreso2025.calculo())