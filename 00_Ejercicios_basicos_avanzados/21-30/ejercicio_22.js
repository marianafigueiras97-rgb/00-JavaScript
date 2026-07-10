// Ejercicio 22
// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

// Recuerda no usar frutas duplicadas.

// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Fish", isVegan: false },
  { name: "Pork", isVegan: false },
];

function foodReplacement (list1, list2){
let list2Index = 0;
  for (let i = 0; i < list1.length; i++) {
    
      if(list1[i].isVegan === false){

        list1[i].name = list2[list2Index];
        list1[i].isVegan = true;
        list2Index ++;
        
      }
    
  }

  console.log(list1);
}

foodReplacement(foodSchedule,fruits);