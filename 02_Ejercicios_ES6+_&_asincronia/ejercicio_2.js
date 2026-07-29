//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
console.log(pointsList);

const newPointsList = [...pointsList];

console.log(newPointsList);

// //2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
console.log(toy);

const newToy = {...toy};
console.log(newToy);


// //2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const lista1 = [32, 54, 21, 64, 75, 43];
const lista2 = [54,87,99,65,32];

const ambasListas = [...lista1, ...lista2];
console.log(ambasListas);

// //2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const finalToy = {...toy2,...toyUpdate};
console.log(finalToy);

// //2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors.slice(0,2), ...colors.slice(3)];

console.log(newColors);
