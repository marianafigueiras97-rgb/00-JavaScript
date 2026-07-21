
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body = document.querySelector("body");
const nuevoDiv = document.createElement("div");
nuevoDiv.id = "div1";
body.appendChild (nuevoDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div");
nuevoDiv2.id = "div2";
const parrafo = document.createElement("p");
nuevoDiv2.appendChild(parrafo);
body.appendChild(nuevoDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const nuevoDiv3 = document.createElement("div");
nuevoDiv3.id = "div3";
const textToAdd = ["hola","hola","hola","hola","hola","hola"];

const addParagraphs = (list) =>{
    for (const element of list) {
        const p = document.createElement("p");
        p.innerHTML = `${element}`;
        nuevoDiv3.appendChild(p);
    }
}

addParagraphs(textToAdd);
body.appendChild(nuevoDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.

const pWithText = document.createElement("p");
pWithText.innerHTML = ("Soy dinámico!");
body.appendChild(pWithText);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Withclass = document.querySelector("h2.fn-insert-here");
const weirdText = "Wubba Lubba dub dub"; 
h2Withclass.innerHTML = `${weirdText}`;

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");
    li.innerHTML = `${app}`;
    ul.appendChild(li);
}

body.appendChild(ul);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll(".fn-remove-me");
const removeElements = (listOfElements) =>{
    for (const element of listOfElements) {
        body.removeChild(element);
    }
}
removeElements(elementsToRemove);

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const parrafito = document.createElement("p");
parrafito.innerHTML = "Voy en medio!";
nuevoDiv2.before(parrafito);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here

const divs = document.querySelectorAll("div.fn-insert-here");
for (const div of divs) {
    const ps = document.createElement("p");
    ps.innerHTML = "Voy dentro!";
    div.appendChild(ps);
}