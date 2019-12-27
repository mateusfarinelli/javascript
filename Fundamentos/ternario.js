/*
  Operador ternario trabalha com 3 operandos, sendo:
  Operador 1 -> Uma expressão relacional
  Opeador 2 e Operador 3 -> retornos da expressão separados por ":" onde o operando
  a esquerda do operador é o retorno da condição caso seja verdadeiro e outro é o retorno
  caso a expressão seja falsa

  O operador ternario é presentado por "?" e os retornos sao dados pelo oprador ":"
*/

const resultado = (nota) => nota >= 7 ? 'Aprovado': 'Reprovado'

console.log(resultado(7.1)) //Aprovado
console.log(resultado(7.0)) //Aprovado
console.log(resultado(6.9999999)) //Reprovado
