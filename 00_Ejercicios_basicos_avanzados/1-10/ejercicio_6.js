//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
console.log("===\nPRIMER BUCLE\n===");
let i = 0;
for (let i = 0; i <= 9; i++){
    console.log(i); 
}
//1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.

console.log("===\nSEGUNDO BUCLE\n===");
for (let i = 0; i <= 9; i++) {
    
    if((i%2) === 0){
        console.log(`el valor de  i en esta ronda es ${i} y su resto es 0`);
    }
    
}
/*1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'.*/

console.log("===\nTERCER BUCLE\n===");
for (let i = 0; i <= 10; i++) {
    
    if(i != 10){
        console.log(`Intentado dormir 🐑 vuelta número ${i}`);
    }else{
        console.log("Te has dormido")
    }
    
}
