// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",//4
  "Thor",//4
  "Iron Man",//8
  "Captain A.",//10
  "Spiderman",//9
  "Captain M.",//9
];

function findLongestWord(stringList) {
  let longestWord = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers));