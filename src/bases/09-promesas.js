import { getHeroeById } from "./08-imports";
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroeFind = getHeroeById(2);
//     //resolve para por parametros al then()
//     resolve(heroeFind);
//     // reject por si falla manda al catch
//     //reject("Nose pudo encontrar el heroe");
//   }, 2000);
// });

// //cuando la promesa es afirmativa entra la then sino al cathc
// promesa
//   .then((heroe) => {
//     console.log(`Heroe:`, heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroeFind = getHeroeById(id);
      if (heroeFind) {
        resolve(heroeFind);
      } else {
        reject("Nose pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(4).then(console.log).catch(console.warn);
getHeroeByIdAsync(422).then(console.log).catch(console.warn);
