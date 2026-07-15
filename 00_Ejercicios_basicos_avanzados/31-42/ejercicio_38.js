// Ejercicio 38
// Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

// Es decir, la media de volumen de todos los volumenes juntos.
// resultado esperado por objeto 
/*
alberto --> 63.33
antonio --> 48.33
santiago--> 63.33
laura--> 54.00
todos -> 57.2475
*/
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];



function getAverage (list){
let totalGeneral = 0;
let contadorGeneral = 0;

for (const element of list) {
  let totalUsuario = 0;
  let contadorUsuario = 0;
  for (const key in element.favoritesSounds) {
    totalUsuario = totalUsuario + element.favoritesSounds[key].volume;
    totalGeneral = totalGeneral + element.favoritesSounds[key].volume;
    contadorUsuario ++;
    contadorGeneral ++;
  }  

  let userAverage = totalUsuario / contadorUsuario;
  console.log(`la media del usuario ${element.name} es ${userAverage}`);
  
}

let generalAverage = totalGeneral / contadorGeneral;
console.log(`la media general es  ${generalAverage}`);

 
}

getAverage(users);

