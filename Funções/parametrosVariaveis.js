function soma() {
  let soma = 0;
  for (i in arguments){
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, 'Teste'));
console.log(soma('a', 'b', 'c'));

/*
  A palavra reservada arguments é um array presente em toda a função, que permite
  pegar os parametros passados, mesmo que o escopo da função não tenha parametros
  e trabalhar esses parametros

  Entretanto essa forma está em desuso por conta dos operadores rest/spread
*/