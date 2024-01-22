'use strict'
// Iterables y Symbol.iterator:
// se crea un objeto llamado range con propiedades from 
// y to. Luego, se le añade un método especial llamado 
// Symbol.iterator que devuelve un objeto iterador. 
// El iterador tiene un método next() que da valores
// para cada iteración del bucle for..of.


let range = {
    from: 1,
    to: 5
  };
  
  // Establece el método Symbol.iterator en el objeto 'range' para hacerlo iterable.
  range[Symbol.iterator] = function() {
    this.current = this.from; // Inicializa el valor actual en 'from'.
    return this; // Devuelve el objeto iterable.
  };
  
  range.next = function() {
    if (this.current <= this.to) {
      // Devuelve el siguiente valor en la iteración (objeto {done, value}).
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  };
  
  // Utiliza un bucle for..of para iterar sobre 'range' y mostrar cada número en una alerta.
  for (let num of range) {
    alert(num);
  }
  