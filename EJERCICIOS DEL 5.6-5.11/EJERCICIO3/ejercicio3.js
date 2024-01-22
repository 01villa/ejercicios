'use strict'

// Array.from para convertir simil-array en un Array 
// real:
// se utiliza Array.from para convertir un objeto 
// similar a un array en un array real y luego muestra el array
//  resultante en alertas.

let arrayLike = {
    0: "Hola",
    1: "Mundo",
    length: 2
  };
  
  // Utiliza Array.from para convertir 'arrayLike' en un array real.
  let arr = Array.from(arrayLike);
  
  // Muestra el array resultante en una alerta.
  alert(arr);
  