// 'use strict'

// Duplicar los precios de un objeto usando Object.entries 
// y Object.fromEntries Objeto con precios


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  // Usar Object.entries para obtener un array de pares clave/valor de 'prices'
  //usamos map para transformar cada par, duplicando el valor
  //por ultimo  utilizamos  Object.fromEntries para convertir el array resultante en un nuevo objeto
  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  // Mostrar el precio duplicado de la carne
  alert(doublePrices.meat); // 8
  