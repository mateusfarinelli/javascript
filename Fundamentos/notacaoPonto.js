console.log(Math.ceil(5.1, 1));

const obj = {}
obj.nome = 'Bola';
console.log(obj.nome);

function Obj(nome) {
  this.nome = nome //Usa-se a palavra reservada this, para dar publicidade a um metodo/atributo de um objeto
  this.exec = function() {
    console.log('Exec...');
  }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2);
console.log(obj3.nome);
obj3.exec();

/*
  A notação "." serve para acessar metodos e atributos dos objetos e funções
*/
