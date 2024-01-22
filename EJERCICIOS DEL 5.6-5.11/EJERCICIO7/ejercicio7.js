'use strict'
// Creación de un Map desde un Objeto

let obj = {
    name: "John",
    age: 30
  };
  
  // Crear un Map a partir de un objeto utilizando Object.entries
  let map = new Map(Object.entries(obj));
  
  // Acceder al valor asociado con la clave 'name'
  alert(map.get('name')); // John
  