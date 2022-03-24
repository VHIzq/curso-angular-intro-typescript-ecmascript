import { Producto, calcularIVA } from "./06-desestructuracion-funciones";

const carritoCompras: Producto[] = [
  {
    nombre: 'Samsung Note',
    precio: 199
  },
  {
    nombre: 'Moto Edge',
    precio: 225
  },
];

const [total, iva] = calcularIVA( carritoCompras );

console.log('Total', total);
console.log('IVA', iva);