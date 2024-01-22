'use strict'

// Iteración sobre un Map

// Crear un Map con datos iniciales
let recipeMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas', 50]
  ]);
  
  // Iterar sobre las claves (verduras) y mostrar en una alerta
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // pepino, tomates, cebollas
  }
  
  // Iterar sobre los valores (precios) y mostrar en una alerta
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // Iterar sobre las entradas [clave, valor] y mostrar en una alerta
  for (let entry of recipeMap) {
    alert(entry); // pepino,500 (etc)
  }
  