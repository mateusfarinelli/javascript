function getRandomIntegerBetween(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = getRandomIntegerBetween(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != -1) 

console.log('Fim!!!');

/*
  Assim como no while, a estrutura do/while será cessada assim que a condição de parada for falsa,
  entretanto nessa estrutura, pelo fato de a condição estar no fim da estrutura, o laço acontecerá
  pelo menos 1 vez, pois de qualquer forma a condição de parada não foi testada antes da primeira
  execução
*/