console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);
console.log(typeof new Cliente())

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto);

/*
  Um objeto em JS é uma função, bem como uma classe que nada mais é uma instancia de uma função
*/