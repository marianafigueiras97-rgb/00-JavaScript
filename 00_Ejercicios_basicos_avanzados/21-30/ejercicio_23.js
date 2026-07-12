// Ejercicio 23
// Usa un bucle para crear 3 arrays de películas filtrados por categorías.

// Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

// Imprime cada array por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];


function filterByCategorie(list){
  
  let shortFilms =[];
  let mediumFilms =[];
  let longFilms =[];

  for (let i = 0; i < list.length; i++) {
    
    if(list[i].durationInMinutes < 100){
      shortFilms.push(list[i]);
    } else if (list[i].durationInMinutes >= 100 && list[i].durationInMinutes <200){
      mediumFilms.push(list[i]);
    } else {
      longFilms.push(list[i]);
    }
    
  }
  
  console.log("Películas cortas: \n");
  console.log(shortFilms);
  console.log("Películas medianas: \n");
  console.log(mediumFilms);
  console.log("Películas largas: \n");
  console.log(longFilms);
}

filterByCategorie(movies);