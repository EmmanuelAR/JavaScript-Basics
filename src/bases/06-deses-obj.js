const persona = {
  nombre: `Emmanuel`,
  edad: 22,
  clave: 12345,
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Extraer nombre y clave
const { clave, nombre } = persona;
console.log(nombre);
console.log(clave);

//Desestructurar en funcion por parametros y parametros default
const retornaPersona = ({ nombre, rango = `CAPITAN` }) => {
  console.log(nombre, rango);
};
retornaPersona(persona);

//Extraer solo lo que quiero en parametros de funcion y en retorno de funcion
const useeContext = ({ edad, clave, nombre, rango = `CAPITAN` }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latLon: {
      lat: 123,
      lon: 456,
    },
  };
};
//Extraer atributos de otro obj a constantes
const {
  nombreClave,
  anios,
  latLon: { lat, lon },
} = useeContext(persona);
console.log({ nombreClave, anios, lat, lon });
