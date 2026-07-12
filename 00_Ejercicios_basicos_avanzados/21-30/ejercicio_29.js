// Ejercicio 29
// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const groupedByDecadesMovies = {
  1970: undefined,
  1980: undefined,
  1990: undefined,
  2000: undefined,
  2010: undefined
}

let setentas = [];
let ochentas = [];
let noventas = [];
let dosmiles = [];
let dosmildiez = [];

for (let i = 0; i < starWarsMovies.length; i++) {
  if(starWarsMovies[i].releaseYear < 1980){
    setentas.push(starWarsMovies[i].title);
    groupedByDecadesMovies[1970] = setentas;
  } else if ( starWarsMovies[i].releaseYear >= 1980 && starWarsMovies[i].releaseYear < 1990){
    ochentas.push(starWarsMovies[i].title);
    groupedByDecadesMovies[1980] = ochentas;
  }else if ( starWarsMovies[i].releaseYear >= 1990 && starWarsMovies[i].releaseYear < 2000){
    noventas.push(starWarsMovies[i].title);
    groupedByDecadesMovies[1990] = noventas;
  }else if ( starWarsMovies[i].releaseYear >= 2000 && starWarsMovies[i].releaseYear < 2010){
    dosmiles.push(starWarsMovies[i].title);
    groupedByDecadesMovies[2000] = dosmiles
  }else{
    dosmildiez.push(starWarsMovies[i].title);
    groupedByDecadesMovies[2010] = dosmildiez;
  }
  
}



console.log(groupedByDecadesMovies);