"use strict";
class Venta {
    constructor(monto) {
        this.monto = monto;
    }
    getTotal() {
        return this.monto;
    }
}
class VentaConIva extends Venta {
    constructor(iva, monto) {
        super(monto);
        this.iva = iva;
    }
    getTotal() {
        return this.iva + super.getTotal();
    }
}
let venta = new Venta(19);
const resultado = venta.getTotal();
console.log(resultado);
let ventaConIva = new VentaConIva(8, 7);
const resultado2 = ventaConIva.getTotal();
console.log(resultado2);
console.log(venta);
console.log(ventaConIva);
