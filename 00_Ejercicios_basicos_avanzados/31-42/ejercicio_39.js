// Ejercicio 39
// Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.

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

function countingFavorites(list) {
  let sounds = {}; // objeto vacío para contar cuantas veces se repite cada sonido como favorito 

  for (const user of list) { // recorremos cada usuario 
    for (const soundName in user.favoritesSounds) { // accedemos a la propiedad de favoritesSounds y creamos la variable soundName

    // en cada vuelta coge el nombre del sonido y pregunta si esta propiedad existe dentro del objeto sounds
      if (sounds[soundName] === undefined) {// si no existe la crea dentro de sound y le da el valor de 1 para comenzar el conteo 
        sounds[soundName] = 1;
      } else { // si si existe la incrementa
        sounds[soundName]++;
      }

    }
  }

  console.log(sounds);
}

countingFavorites(users);
