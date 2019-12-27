let numero = 1;
{
  let numero = 2;
  console.log('dentro = ', numero);
}
console.log('fora = ', numero);

/*
  O let tem escopo de bloco mesmo não sendo uma função. Ou seja, pra qualquer bloco de código
  o let só vai ser acessado dentro do proprio escopo.

  Por tanto let tem escopo global, função e de bloco.
*/