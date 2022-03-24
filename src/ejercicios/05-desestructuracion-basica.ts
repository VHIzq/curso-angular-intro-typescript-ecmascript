
interface Reproductor  {
  volumen: number,
  segundo: number,
  cancion: string,
  detalles: Detalles
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 45,
  segundo: 23,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015
  }
}

const { volumen, segundo, cancion, detalles} = reproductor;
const {autor: autorDetalle} = detalles;

/* console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La canncion actual es: ${cancion}`);
console.log(`El autor actual es: ${autorDetalle}`); */


const dbz: string[] = ['Goku', 'Vegetta', 'Trunks'];
const [ , , p3] = dbz;

console.log(`Personaje3: ${p3}`);