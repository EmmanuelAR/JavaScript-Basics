const activo = true;

// -> Manera casual y larga
// let mensaje = "";
// if (activo) {
//   mensaje = "activo";
// } else {
//   mensaje = "Inactivo";
// }

// -> Cuando ocupo los dos casos
//const mensaje = activo ? "Activo" : "Inactivo";

// -> Cuando solo ocupo un caso
const mensaje = activo && "Activo";

console.log(mensaje);
