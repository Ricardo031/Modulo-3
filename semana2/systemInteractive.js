const prompt = require("prompt-sync")(); // para poder escribir en terminal

//%todo: task 1. Creación del objeto de productos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 }
];

console.log("--- Objetos de Productos ---");
console.log(productos);

//%todo: task 2. Uso de Set en JavaScript
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

//% task 3 Creación de un Map:
console.log("--- Operaciones con Map ---");
//Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor).
// Map from array of objects
const nuevoMap = productos.map(producto => [producto.id, producto.nombre]);
//otra forma usando el New Map
const nuevoMap2 = new Map(productos.map(producto => [producto.id, producto.nombre]));
console.log("Contenido del Map:", nuevoMap);
console.log("Contenido del Map2:", nuevoMap2);

console.log("\n--- Iteracion sobre las estructuras de datos ---");

//%todo: task 4 Iteración sobre las estructuras de datos:
//*Usa for…in para listar propiedades y valores del objeto.
for (const producto in productos) { //producto: es el indice del producto
    console.log(producto);
    console.log(productos[producto]); //productos[producto]: es el objeto del producto
}
//*Usa for…of para recorrer el Set.
for (const numero of miSet) {
    console.log("Valor:", numero);
}
//*Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva.
productos.forEach((producto, id) => {
    console.log(`ID: ${id}, Nombre: ${producto.nombre}`);
})
console.log("-----------------");
nuevoMap.forEach((nombre, id) => {
    console.log(`ID: ${id}, Nombre: ${nombre}`);
})
console.log("-----------------");
nuevoMap2.forEach((nombre, id) => {
    console.log(`ID: ${id}, Nombre: ${nombre}`);
})
console.log("----------Task5-------------");

//%todo: task 5 Validación y pruebas:
//Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
for (const producto of productos) {
    if (!producto.id || !producto.nombre || producto.precio <= 0) {
        console.error(`Producto inválido: ${JSON.stringify(producto)}`);
    }
}

//Lista completa de productos (objeto)
console.log("-----------------------------");
console.log(productos);
//Lista de productos únicos (Set)
console.log("-----------------------------");
console.log(miSet);
//Categorías y nombres de productos (Map)
console.log(nuevoMap);
console.log("-----------------------------");
//Categorías y nombres de productos (Map2)
console.log(nuevoMap2);
