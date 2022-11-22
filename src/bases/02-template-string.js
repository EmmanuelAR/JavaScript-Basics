const nombre = "Emmanuel";
const apellido = "Aguero";
//const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola amigo... ${nombre}`;
}

console.log(`Este es el saludo: ${getSaludo(nombreCompleto)}`);
