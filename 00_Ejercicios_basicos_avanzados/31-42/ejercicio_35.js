// Ejercicio 35
// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Mariana', power: 'teleportation' }
];

function findMutantByPower(mutantsList, power) {
  let foundMutants = [];

  for (let i = 0; i < mutantsList.length; i++) {
    if(mutantsList[i].power === power){
      foundMutants.push(mutantsList[i].name);
    }
  }
  
  if(foundMutants.length === 0){
    console.log("No mutants were found");
  }else{
    console.log(foundMutants);
  }
}

findMutantByPower(mutants,"regeneration");
findMutantByPower(mutants,"flying");
findMutantByPower(mutants,"teleportation");
findMutantByPower(mutants,"shape-shifting");