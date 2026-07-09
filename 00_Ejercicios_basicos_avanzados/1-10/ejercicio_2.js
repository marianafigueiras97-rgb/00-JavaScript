//2.1 luke cumple años 
 const jedi = {nombre: "Luke Skywalker", edad: 19};
 console.log(jedi);

jedi.edad = 25;

 console.log(jedi);

//2.2 Presentación al estilo Leia Organa:

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy la princesa de Alderaan`);

//2.3 Calculando el coste total de sables de luz

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

    // usando una variable
    const precioTotal1 = sable1.precio + sable2.precio;
    console.log(`Versión con variable: El precio total de los sables de luz es de ${precioTotal1}`);

    // usando una función
    function calcularPrecioSables (sable1,sable2){
    const precioTotal2 = sable1.precio + sable2.precio;
    console.log(`Version con función: El precio total de los sables de luz es de ${precioTotal2}`);
    }

    calcularPrecioSables(sable1,sable2);

    // usando una función flecha
    const precioTotal3 = (sable1,sable2) => sable1.precio + sable2.precio;
    const resultadoSuma = console.log(`Version con función flecha: El precio total de los sables de luz es de ${precioTotal3(sable1,sable2)}`); 

//2.4 actualizando el precio final de las naves 

let precioBaseGlobal = 10000;
console.log(`El precio base global original es de ${precioBaseGlobal}`);

precioBaseGlobal = 25000;

console.log(`El precio base global modificado es de ${precioBaseGlobal}`);


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

console.log(`El precio final original de la nave ${nave1.nombre} es de ${nave1.precioFinal}`);
//cambiando precio final de nave 1 
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;

console.log(`El precio final despues del cambio de la nave ${nave1.nombre} es de ${nave1.precioFinal}`);

//cambiando precio final de nave 2 
console.log(`El precio final original de la nave ${nave2.nombre} es de ${nave2.precioFinal}`);
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(`El precio final despues del cambio de la nave ${nave2.nombre} es de ${nave2.precioFinal}`);


