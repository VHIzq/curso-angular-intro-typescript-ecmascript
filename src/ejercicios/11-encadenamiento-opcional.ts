interface Pasajero {
  nombre: string,
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Tsubasa',
}

const pasajero2: Pasajero = {
  nombre: 'Sakura',
  hijos: ['Mao', 'Kouru']
}

function imprimeHijos( pasajero: Pasajero) {
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);