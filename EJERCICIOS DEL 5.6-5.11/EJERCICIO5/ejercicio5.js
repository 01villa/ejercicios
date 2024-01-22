'use strict'
// Uso de Objetos como Claves en Map


let john = { name: "John" };

// Crear un nuevo Map y utilizar el objeto 'john' como clave
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);

// Acceder al valor asociado con la clave 'john'
alert(visitsCountMap.get(john)); // 123
