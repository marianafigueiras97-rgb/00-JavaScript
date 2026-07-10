// Ejercicio 18
// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

// Imprime en un console log el array resultante.

// Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


function eliminateDestination (list,id){
    for (let index = 0; index < list.length; index++) {
        if(list[index].id === id){
            list.splice(index,1);
        }
        
    }
    console.log(list);

}

eliminateDestination(placesToTravel,11);
eliminateDestination(placesToTravel,40);