const personajes = [`Personaje1`, `Personaje2`, `Personaje3`];

//Desestructutar arreglo
const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);

//Desestructurar arreglo en retorno de funcion
const retornaArreglo = () => {
  return ["ABC", 123];
};
const arr = retornaArreglo();
console.log(arr);
//Get de elementos como constantes independientes
const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

//Desestructurar valor y funcion cuando se retorna un arreglo.
const useeState = (valor) => {
  return [
    valor,
    () => {
      console.log(`Hola dentro del arreglo`);
    },
  ];
};
const [nombre, setNombre] = useeState(`Goku`);
console.log(nombre);
setNombre();
