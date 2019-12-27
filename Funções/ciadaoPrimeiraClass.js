//Função em JS é First Class Object (Citzen)
//Higher-order function
//É possivel tratar uma função como dado, podendo assim:
//Passar funções como parametros, armazenar funções em variaveis, retornar funções, etc.
//Quando a linguagem tem esse aspecto de Higher-order function, podemos utilizar o paradigma de
//programação funcional, tendo em vista que isso é pre requisito para este paradigma,
//Logo JS permite trabalhar com esse paradigma (além de outros, como procedural e OO)

//criar funções de forma literal:
function funcao1(parametros) {
  //bloco de código
  //return (caso seja necessário)
}

//armazenamento em vairaveis:
const funcao2 = function (parametros) { //função anonima
  //bloco de código
}

//armazenamento em array:
const array = [function (parametros) {/*Bloco de códio*/}, funcao1, funcao2];

//armazenamento em atributos de objeto:
const obj = {}
obj.falar = function (parametros ) {/*bloco de código*/}

//passar função como parametro:
function funcLikeParam (fun) {
  fun(); //executando a função passada como parametro
}

//função retornando/contendo função:
function funcReturnFunc(parametros) {
  return (function functionRetun(parametros) {
    //bloco de código
  });
}


