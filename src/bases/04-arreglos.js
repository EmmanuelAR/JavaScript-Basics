// const arreglo = new Array(100);
// arreglo.push(1);
// console.log(arreglo);

const arreglo = [1, 2, 3];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

//copiar de manera correcta los datos
let arreglo2 = [...arreglo, 5, 6];

//crear un nuevo array con un callback
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
