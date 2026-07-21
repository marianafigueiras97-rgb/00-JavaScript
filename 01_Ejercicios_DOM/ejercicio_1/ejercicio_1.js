const print = (object)=>{
    for (const element of object) {
        console.log(element);}
    }

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector(".showme");
console.log(btn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1);

// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p");
print(parrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
print(pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testers = document.querySelectorAll(`[data-function="testMe"]`);
print(testers);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const thirdElement = testers[2];
console.log(thirdElement);

