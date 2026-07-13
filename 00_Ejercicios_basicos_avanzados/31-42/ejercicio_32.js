// Ejercicio 32
// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

// Utiliza este array para probar tu función.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1960 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1953 },
  { name: 'Professor X', year: 1943 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMenList) {
  const oldestXmen = {
    name: undefined,
    year:undefined
  };
  oldestXmen.name = xMenList[0].name; 
  oldestXmen.year = xMenList[0].year; 
  
  for (let i = 0; i < xMenList.length; i++) {
    
    if(xMenList[i].year < oldestXmen.year){
      oldestXmen.name = xMenList[i].name;
      oldestXmen.year = xMenList[i].year;
    }
  }
  
  console.log(oldestXmen);
    
}




findOldestXMen(xMen);