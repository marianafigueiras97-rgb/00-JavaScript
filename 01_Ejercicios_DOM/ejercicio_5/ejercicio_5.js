// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  {
    titulo: "1989",
    artista: "Taylor Swift",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png",
    anio: 2014,
    cancionMasFamosa: "Blank Space",
  },
  {
    titulo: "Future Nostalgia",
    artista: "Dua Lipa",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png",
    anio: 2020,
    cancionMasFamosa: "Don't Start Now",
  },
  {
    titulo: "Teenage Dream",
    artista: "Katy Perry",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG4bKFwcVKt5fL_26HXexvFsiAN74CrskA36epjD6AA&s=10",
    anio: 2010,
    cancionMasFamosa: "Firework",
  },
  {
    titulo: "SOUR",
    artista: "Olivia Rodrigo",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png",
    anio: 2021,
    cancionMasFamosa: "drivers license",
  },
  {
    titulo: "GUTS",
    artista: "Olivia Rodrigo",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtj0Ylxup3rOXClLvBjYDpp5nXpmh-3xApk8bmOSyqUw&s=10",
    anio: 2023,
    cancionMasFamosa: "vampire",
  },
  {
    titulo: "Lover",
    artista: "Taylor Swift",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
    anio: 2019,
    cancionMasFamosa: "Cruel Summer",
  },
  {
    titulo: "The Fame",
    artista: "Lady Gaga",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AG9zyqQ8_SNEYg-C9nRK5MxxeXPEjTbek2i-ST04hQ&s=10",
    anio: 2008,
    cancionMasFamosa: "Poker Face",
  },
  {
    titulo: "Born This Way",
    artista: "Lady Gaga",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzEtPeZQ1lwp649nyLfgYVk5Dc-fa215hTr_4Xv-nmA&s=10",
    anio: 2011,
    cancionMasFamosa: "Born This Way",
  },
  {
    titulo: "Sweetener",
    artista: "Ariana Grande",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oVzlIALzyUpVitiuzjennmqHWMG3VP3Fa1v4q0lFYw&s",
    anio: 2018,
    cancionMasFamosa: "No Tears Left to Cry",
  },
  {
    titulo: "Rare",
    artista: "Selena Gomez",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSz-v02bKVz4apwUp1frqYktHwnPDrJMmOByiPOfJcQ&s=10",
    anio: 2020,
    cancionMasFamosa: "Lose You to Love Me",
  },
  {
    titulo: "Emails I Can't Send",
    artista: "Sabrina Carpenter",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK69dQQCO__PKnNGGBGdJ4HtvzaVK0r3WGGq2TyBqGUQ&s=10",
    anio: 2022,
    cancionMasFamosa: "Nonsense",
  },
  {
    titulo: "Short n' Sweet",
    artista: "Sabrina Carpenter",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1v57E_U_zSxgfQpMf1m9SzM5f9a-Zib3krpuJb6EKw&s",
    anio: 2024,
    cancionMasFamosa: "Espresso",
  },
  {
    titulo: "Glory Days",
    artista: "Little Mix",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3yTjuOzZqxmHnnhalkk4UOjNPkymQlUtuWEGtGpm_g&s=10",
    anio: 2016,
    cancionMasFamosa: "Shout Out to My Ex",
  },
  {
    titulo: "Melodrama",
    artista: "Lorde",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png",
    anio: 2017,
    cancionMasFamosa: "Green Light",
  },
];

const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.innerText = "Best Pop Albums Ever";
header.appendChild(h1);
document.body.appendChild(header);
const main = document.createElement("main");
document.body.appendChild(main);

const createCards = (listOfAlbums) => {
  for (const album of listOfAlbums) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${album.titulo}</h3>
    <img src="${album.imagen}" alt="${album.titulo}">
    <p>Artist: ${album.artista}</p>
    <p>Release year: ${album.anio}</p>
    <p class="bestSong" > Best song: ${album.cancionMasFamosa}</p>
        `;
    main.appendChild(div);
  }
};
createCards(albums);

const listOfDivs = document.querySelectorAll("div");
for (const div of listOfDivs) {
    div.setAttribute("class","card");
}

const footer = document.createElement("footer");
const span = document.createElement("span");

span.innerHTML = "Best Pop Albums SL Derechos reservados";
footer.appendChild(span);
document.body.appendChild(footer);

