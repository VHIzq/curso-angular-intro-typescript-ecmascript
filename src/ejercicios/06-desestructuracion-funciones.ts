
 export interface Producto{
  nombre: string,
  precio: number
}

const telefono: Producto = {
  nombre: 'nokia A1',
  precio: 160
}

const tableta: Producto = {
  nombre: 'Ipad Air',
  precio: 200
}

export function calcularIVA( productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach( ({ precio }) => {
    total +=  precio
  })

  return [total, total * .15];
}
const articulos = [telefono, tableta];
const [ total, iva] = calcularIVA( articulos );
/* console.log('IVA de la commpra', iva);
console.log('Total de la commpra', total); */