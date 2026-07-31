// // Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

// // Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

// Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

// Documentación: https://pokeapi.co/

// URL: https://pokeapi.co/api/v2/pokemon/1

// Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

const img = document.querySelector(".random-image");

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getPokemon = async (idPokemon) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );

    const data = await res.json();

    const pokemon = {
        imgUrl: data.sprites.front_shiny,
        name: data.name
    };

    renderPokemon(pokemon);
};

const renderPokemon = (pokemon) => {
    img.src = pokemon.imgUrl;
    img.alt = pokemon.name;
};

document.addEventListener("DOMContentLoaded", () => {
    const randomPokemonId = randomNumber(1, 151);
    getPokemon(randomPokemonId);
});