'use strict'
// Uso de Map

// Creación de un nuevo Map
let map = new Map();

//guardar  valores en el Map con diferentes tipos de claves
map.set('1', 'str1');   // Clave string, Valor: 'str1'
map.set(1, 'num1');     // Clave número, Valor: 'num1'
map.set(true, 'bool1'); // Clave booleano, Valor: 'bool1'

// ir a los valores usando claves de diferentes tipos
alert(map.get(1));   // 'num1'
alert(map.get('1')); // 'str1'

// Mostrar la cantidad de elementos en el Map
alert(map.size); // 3
