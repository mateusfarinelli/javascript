function getRandomIntegerBetween(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getRandomIntegerBetween(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
}

console.log('Fim!!!');

/*
  While é uma estrutura de repetição utilizada quando não sabemos determinar quantas iterações
  haveram no laço, e para que o mesmo termine, geralmente utilizamos uma "flag" que quando satisfeita
  faz com que o while não seja repetido
*/