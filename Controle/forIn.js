/*
  O for in é uma forma para percorrer estruturas como array e objetos
  entretanto não é tão interessante utilizar essa forma, já que existem outras formas
  mais interessantes como map, reduce, for each e outras.

  Esse metodo percorre os indices dos elementos, sem a necessidade de trabalhar a 
  variavel de controle e etc.
*/

const notas = [10, 10, 9, 6, 4, 2, 9.4];

for (let i in notas){ //usando let para bloquear o acesso a variavel após o laço
  console.log(i, notas[i]);
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for (let atributo in pessoa) { //usando let para bloquear o acesso a variavel após o laço
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

