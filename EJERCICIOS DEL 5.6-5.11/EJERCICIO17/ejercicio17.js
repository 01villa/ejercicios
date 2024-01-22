'use strict'

//Medición de tiempo sin creación de objetos Date

let start = Date.now();
// ... código que realiza alguna tarea ...
let end = Date.now();
alert(`El tiempo transcurrido es de ${end - start} ms`);
