'use strict'

//Argumentos de función inteligentes

let options = { title: "My menu", items: ["Item1", "Item2"] };  //Declara un objeto options con propiedades.
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {   //Define una función
    // showMenu que toma un objeto como argumento
    // y desestructura sus propiedades con valores predeterminados.

  alert(`${title} ${width} ${height}`);  //Muestra una alerta con el formato ${title} ${width} ${height}.
  alert(items);  // Muestra una alerta con el contenido del array items.
}
showMenu(options);
