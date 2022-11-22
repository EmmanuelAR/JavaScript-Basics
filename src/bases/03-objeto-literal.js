const persona = {
  nombre: "Emma",
  apellido: "Aguero",
  edad: 22,
  direccion: {
    ciudad: "Narajo",
    zipCode: 666,
    latitud: 3.4,
  },
};
//console.table(persona);
console.log(persona);

//Copia por referencia
const persona2 = persona;
persona2.nombre = "Cambio";
console.log(persona2);
console.log(persona);

//Copia real
const persona3 = { ...persona };
persona3.nombre = "copia nueva";
console.log(persona3);
console.log(persona);
