// Ejercicio 17
// For...in: Usa un for...in para imprimir por consola los datos del alienígena.



// Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

// Puedes usar este objeto:

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

function alienDate(Object){
    for (const key in Object) {
        console.log(`La propiedad ${key} tiene como valor: ${Object[key]}`);
    }

}

alienDate(alien);
