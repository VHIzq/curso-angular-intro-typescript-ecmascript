
function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Jupiter');
let soyNumber = queTipoSoy(181);
let soyArreglo = queTipoSoy( [23, 34, 34])
let soyExplicito = queTipoSoy<number>( 100 )