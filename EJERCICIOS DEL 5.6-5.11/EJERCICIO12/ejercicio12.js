'use strict'

//Desestructuración con valores predeterminados

let [name = "Guest", surname = "Anonymous"] = ["Julius"]; //Desestructura con valores predeterminados, asignando "Julius" a name 
//y el valor predeterminado "Anonymous" a surname.

alert(name);    // Julius (desde array)
alert(surname); // Anonymous (predeterminado utilizado)
