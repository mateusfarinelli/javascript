const nome = 'Mateus';
const concatenacao = "Olá " + nome + '!';
const template = ` 
Olá
${nome}!` //Utilizar template string traz mais legibilidade ao código, além de permitir fazer quebras de linhas na string, coisa que os operadores '' e "" não permitem
          //além de permitir trazer variaveis e concatenações sempre precisar abrir varias strings e utilizar operadores para tal.

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`) //O operador ${} permite a interpolação e interpretação do V8 para os elementos dentro dele.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`) //Utilizando funções dentro do operador ${} e do string literals



