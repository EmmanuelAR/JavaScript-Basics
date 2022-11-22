//Crear una funcion de manera fuerte, no le puedo caer encima
const saludar = function (nombre) {
  return `Hola ${nombre}`;
};
console.log(saludar(`Emmanuel`));

//Arrow function
const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};
console.log(saludar2(`Emmanuel`));

//Arrow function simplificada
const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar3(`Emmanuel`));

//Arrow function para devolver obj implicito
const getUser = () => ({
  id: 117790953,
  userName: `ear_rae`,
});
const user = getUser();
console.log(user);

//TAREA
const getActiveUser = (_nombre) => ({
  id: 12345678,
  userName: `xxx_xxx`,
  nombre: _nombre,
});
const userActive = getActiveUser(`Pepe`);
console.log(userActive);
