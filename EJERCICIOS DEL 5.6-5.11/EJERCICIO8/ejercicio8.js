'use strict'
// Uso de Set

// Crear un nuevo Set
let set = new Set();

// Definir objetos
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// Agregar objetos al Set, evitando duplicados
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// Mostrar la cantidad de elementos en el Set
alert(set.size); // 3

// Iterar sobre el Set y mostrar los nombres de los usuarios
for (let user of set) {
  alert(user.name); // John (luego Pete y Mary)
}
