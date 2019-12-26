/*
  Bloco de código, que pode agrupar nenhuma, uma ou varias sentenças de código
  que pode ou não receber um nome, parametros e pode ser reutilizado diversas vezes no
  código.

  A palavra reservada para criar uma função é function, sua estrutura é geralmente:

  function nomeDaFunção(parametros){
    bloco de código
    ...
  }
*/

//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);//Como o escopo pede 2 parametros e o segundo não é passado, ele encara como undefined retornando um NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9); //Utiliza os primeiros parametros bem como a quantidade do escopo para realizar sua função
imprimirSoma();//Como nenhum valor foi passado para os parametros, a o interpretador irá encarar como undefined e retornada NaN

//função com retorno
function soma(a, b = 0) { //Iniciando a função com parametros e b tendo valor padrão = 0;
  return a + b;
}

console.log(soma(2,4));//É preciso chamar a função dentro de um console.log já que na função não há a impressão, somente o return
console.log(soma(4,));//Testando o valor padrão de b = 0, já que não foi passado um valor para esse paraemtro

