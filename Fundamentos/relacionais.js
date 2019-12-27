//Operadores relacionais só retornam true ou false
console.log('1º Teste - ', '1' == 1); //true, pois o operador == testa somente se os valores são iguais
console.log('2º Teste - ', '1' === 1); //false pois os tipos diferem, já que '1' é string e 1 é number
console.log('3º Teste - ', '3' != 3); //falso pois os valores de ambos operandos são iguais, diferem somente no tipo
console.log('4º Teste - ', '3' !== 3); //true, pois são estritamente diferente, diferem no tipo
console.log('5º Teste - ', 3 < 2); //false, pois 3 > 2
console.log('6º Teste - ', 3 > 2); //true, pois 3 > 2
console.log('7º Teste - ', 3 <= 2); //false, pois 3 > 2
console.log('9º Teste - ', 3 >= 2); //true, pois 3 > 2

const d1 = new Date(0);
const d2 = new Date(0);
console.log('10º Teste - ', d1 === d2); //false, pois estamos referencia de memoria, ou seja, endereços de memoria
console.log('11º Teste - ', d1.getTime() === d2.getTime()); //true, pois estarios comaprando os valores em segundo e o seu tipo
console.log('12º Teste - ', undefined == null); //true
console.log('13º Teste - ', undefined === null); //false

/*
  Via de regra é recomendado utilizar o operado de igualdade restrita "==="
*/
