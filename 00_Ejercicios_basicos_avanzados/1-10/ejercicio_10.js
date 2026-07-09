// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

console.log(numbers.length);

function average(numberList) {
  let total = 0;
  for (let i = 0; i < numberList.length; i++) {
    total = total + numberList[i];  
  }
  console.log(`la suma total de los elementos del array es ${total}`);
  const average = total / numberList.length;
  console.log(`El promedio es ${average}`);

}

average(numbers);