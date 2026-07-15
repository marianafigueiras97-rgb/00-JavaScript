// Ejercicio 37
// Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.

// Ten en cuenta que las categorías no tienen que repetirse.

// Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]

// Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

function getCategories (list){
  let filteredCategories = [];
  
  for (const element of list) {
    for (let i = 0; i < element.categories.length; i++) {
      if(!filteredCategories.includes(element.categories[i])){
          filteredCategories.push(element.categories[i]);
      }
    }
  }
  console.log(filteredCategories);
}

getCategories(movies);