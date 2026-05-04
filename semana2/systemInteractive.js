const prompt = require("prompt-sync")(); // para poder escribir en terminal

//% taks 1. Creación del objeto de productos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 }
];

console.log("--- Objetos de Productos ---");
console.log(productos);

//% taks 2. Uso de Set en JavaScript
console.log("\n--- Operaciones con Set ---");

// Crear un Set con una lista de números que incluya valores repetidos.
const numerosArray = [1, 2, 3, 4, 4, 5, 1, 6];
const miSet = new Set(numerosArray);
console.log("Contenido del Set (duplicados eliminados):", miSet);

//* Agrega un nuevo número al Set utilizando el método .add().
miSet.add(7);
console.log("Set después de agregar el 7:", miSet);

//* Verifica si un número específico existe dentro del Set con .has().
const existeCinco = miSet.has(5);
console.log("¿Existe el número 5 en el Set?:", existeCinco);

//* Elimina un número del Set con .delete().
miSet.delete(2);
console.log("Set después de eliminar el 2:", miSet);

//* Recorre el Set utilizando un for…of para mostrar cada valor.
console.log("Recorriendo el Set con for...of:");
for (const numero of miSet) {
    console.log("Valor:", numero);
} //!no aparecere el 2 porque se elimino anteriormente







