import heroes, { owners } from "../data/heroes";

//console.log(heroes);
//console.log(owners);

// Find() ocupa un callback y solo devuelve un obj
export const getHeroeById = (id) => heroes.find((val) => val.id == id);
const heroeFind = getHeroeById(2);
//console.log(heroeFind);

// Filter() devulve array con fitro
export const getHeroeByOwner = (ownwer) =>
  heroes.filter((val) => val.owner == ownwer);
const heroeFind2 = getHeroeByOwner("DC");
//console.log(heroeFind2);
