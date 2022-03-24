function sumar(a: number, b: number): number{
  return a + b
}

const sumarFlcha = (a: number, b: number): number => a + b;

function multiplicar( numA: number, numB?: number, base: number = 2): number {
 return numA * base;
}

/*  const resultado = multiplicar(34, 4, 10);

console.log(resultado); */

interface personajeLOR{
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curarPersonaje(personaje: personajeLOR, curarX: number): void {
 personaje.pv += curarX;
 console.log(personaje);
}

const nuevoPersonaje: personajeLOR = {
 nombre: 'Legolas',
 pv: 50,
 mostrarHp() {
   console.log(`PUntos de vida: ${this.pv}`);
 }
}

curarPersonaje(nuevoPersonaje, 45);

nuevoPersonaje.mostrarHp();