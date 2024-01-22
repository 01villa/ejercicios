'use strict'
//Desestructuración anidada

let options = { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true }; // Declara un objeto
// options con propiedades anidadas y un array.

let { size: { width, height }, items: [item1, item2], title = "Menu" } = options; //Desestructura el objeto 
//anidado options, extrayendo valores y asignándolos a las variables correspondientes,
// con un valor predeterminado para title.
