//Armazenando uma função dentro de uma variavel
const soma = function (a, b) {
  console.log(a+b);
}

soma(2,3);

//Armazenando uma função arrow em uma variavel
const subtracao = (a, b) => { //Menos verbosa
  return a - b;
}

console.log(subtracao(5, 4));

//Retorno implicito
const divisao = (a, b) => a / b; //não é necessario utilizar o return, desde que a função tenha apenas uma sentença de código

console.log(divisao(1, 2));