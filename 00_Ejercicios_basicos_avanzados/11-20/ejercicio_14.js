// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

// Puedes usar este array para probar tu función:

const words = [
  'code',//4
  'repeat',//1
  'eat',//1
  'sleep',//3
  'code',
  'enjoy',//2
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  // recorrer el array, buscar coincidencias y si encuentra incrementar el contador 
/*
  let filtroCode = list.filter((element)=> element === "code");
  console.log(`la palabra code sale en ${filtroCode.length} oportunidades`);

  let filtroRepeat = list.filter((element)=> element === "repeat");
  console.log(`la palabra repeat sale en ${filtroRepeat.length} oportunidades`);

  let filtroEat = list.filter((element)=> element === "eat");
  console.log(`la palabra eat sale en ${filtroEat.length} oportunidades`);
  
  let filtroSleep = list.filter((element)=> element === "sleep");
  console.log(`la palabra sleep sale en ${filtroSleep.length} oportunidades`);
  
  let filtroEnjoy = list.filter((element)=> element === "enjoy");
  console.log(`la palabra enjoy sale en ${filtroEnjoy.length} oportunidades`);
  */

  let contador = {};
  for (let i = 0; i < list.length; i++) {
    let palabraActual = list[i];
    if (contador[palabraActual] === undefined){
        contador[palabraActual]= 1;
    } else {
        contador[palabraActual]++;
    }
  }
  return contador;
}

console.log(repeatCounter(words));