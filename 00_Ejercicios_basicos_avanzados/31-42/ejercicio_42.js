// Ejercicio 42
// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap (list,p1,p2){
let posicionTemporal1 = list[p1];
let posicionTemporal2 = list[p2];
list[p1] = posicionTemporal2;
list[p2] = posicionTemporal1;
console.log(list);


}

swap(fantasticFour,0,1);
