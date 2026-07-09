// Ejercicio 11
// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

// Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

// Puedes usar este array para probar tu función:

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    
    if (typeof list[i] === "number"){
        total = total + list[i];
    }else if (typeof list[i] === "string") {
        let valorString = list[i].length;
        total = total + valorString;
    }else{
        console.log("Tipo de dato no admitido");
    }    
}
console.log(`El valor total del string es ${total}`);
const average = total / list.length;
console.log(`El promedio es ${average}`);
  
}

averageWord(mixedElements);
