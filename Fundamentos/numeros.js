const peso1 = 1.0;
const peso2 = Number('2.0') // Atribuindo uma função a uma variavel
const peso3 = 3.9

//Manipulando dados com metodos nativos
console.log(peso1, peso2); // Saída -> 1 2
console.log(Number.isInteger(peso1)); //true (.0 é considerado inteiro pelo JS)
console.log(Number.isInteger(peso2)); //true
console.log(Number.isInteger(peso3)); //false != .0 é considerado float

//Manipulação aritmetica
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total/(peso1 + peso2);

//Manipulação dos dados com metodos nativos
console.log(media.toFixed(2)) //Aplica apenas 2 casas decimais ao um numero
console.log(media.toString()) //Transforma a saída em string
console.log(typeof media.toString()) //Verificando o tipo da saida -> string
console.log(typeof media) //Verificando o tipo da constante media -> number
console.log(typeof Number) //Verificando o tipo primitivo do metodo Number -> function


//Alguns cuidados com tipo number
console.log(7 / 0); //Saida -> Infinity (tipo infinito), na maioria das linguagens retornaria erro
console.log("10" / 2); //Saida -> 5, pois JS pega o valor "interno" da string e realiza a operação
console.log("10,2" / 2); //Saída -> NaN (Not a Number) pois no caso 10,2 não é do tipo number diferentemente de 10 ou 10.2
console.log("10" + 2); //Saída-> 102, nesse caso a string tem preferencia e o perador "+" sera executado como concatenação e não como soma diferente de "/" e "-"
console.log("10" - 2); //Saída -> 8
console.log("Show" * 2); //Saída -> NaN, em algumas lingaguens há o retorno como "ShowShow", mas não é o caso do JS
console.log(0.1 + 0.7); //Saida -> 0.7999999, isso se dá por conta de uma especificação da linguagem para não torna-la lenta.
//console.log(10.toString()); //Gera erro, pois não é possível chamar o literal.metodo para isso usamos (literal).metodo.
console.log((10).toString());