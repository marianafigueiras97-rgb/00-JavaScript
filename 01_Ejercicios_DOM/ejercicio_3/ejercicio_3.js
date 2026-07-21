// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const body = document.querySelector("body");
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela, el mejor país obviamente'];

const ul = document.createElement("ul");
for (const country of countries) {
    const li = document.createElement("li");
    li.innerHTML = `${country}`;
    ul.appendChild(li);
}
body.appendChild(ul);
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector(".fn-remove-me");
elementToRemove.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector(`div[data-function="printHere"]`);
const ul2 = document.createElement("ul");
for (const car of cars) {
    const li2 = document.createElement("li");
    li2.innerHTML = `${car}`;
    ul2.appendChild(li2);
}

div.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let containerId = 0;

for (const country of countries2) {
    const container = document.createElement("div");
    container.innerHTML = `
    <h4>${country.title}</h4>
    <img src="${country.imgUrl}" alt="${country.title}">
    `;
    container.id = containerId++
    body.appendChild(container);
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
const myBtn = document.createElement("button");
myBtn.innerHTML = "Elimina ultimo elemento";
body.appendChild(myBtn);
let lastDiv = document.querySelector("body > div:last-of-type");
myBtn.addEventListener("click", ()=>{
    lastDiv.remove();
    lastDiv = document.querySelector("body > div:last-of-type");
});
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const listOfDivs = document.querySelectorAll("body>div");

for (const div of listOfDivs) {
    if (div.id != ""){
        const newBtn = document.createElement("button");
        newBtn.innerHTML = "Elimina esta tarjeta";
        div.appendChild(newBtn);
    }
    }

    const actionButtons = (list) =>{
            for (const element of list) {
                if(element.id != ""){
                    element.addEventListener("click",()=>{
                        element.remove();
                    })
                }
            }
    }
    actionButtons(listOfDivs);
