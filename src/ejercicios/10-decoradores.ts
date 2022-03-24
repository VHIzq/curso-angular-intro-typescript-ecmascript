function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
  ) {
  return class extends constructor {
    reportingURL = "http://www...";
    hello = 'override'
  };
}


@ClassDecorator
class MiSuperClase {
  public miPropiedad: string = 'QWERTY';

  imprimir(){
    console.log('Hola Jupiter');
  }
}


console.log( MiSuperClase );

const miClase = new MiSuperClase();