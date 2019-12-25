const escola = 'Mateus';

console.log(escola.charAt(4)); //Metodo para retornar o caractere do indice informado como parametro -> "u"
console.log(escola.charAt(10));//Retorna vazio
console.log(escola.charCodeAt(3))//Retorna o valor da tabela ASCII do caratere da string correspondente ao index informado -> Index 3 = e -> 101
console.log(escola.indexOf('s'))//Retorna o index do paramtro indicado caso exista
console.log(escola.indexOf('z'))//Retorna -1, pois o parametro não existe dentro da string.

console.log(escola.substring(1))//Imprime os caracteres da string a partir do index informado, incluindo-o.
console.log(escola.substring(0,3))//Imprime os caracteres da string a partir do primeiro parametro informado até o segundo, não incluindo-o

console.log(escola.concat(' Farinelli').concat(' Zardo'))//Concatenando variaveis e literais
console.log(escola + ' Farinelli' + ' Zardo')//Concateção utilizando o operador "+"
console.log(escola.replace('a','A'))//Metodo para substuição de parametros dentro de uma string, é possivel utilziar expressões regulares como parametro

console.log('Mateus,Farinelli,Zardo'.split(','))//Gera um array utilizando como ponto de separação a virgula, ou seja, em cada "," havera a separação dos elementos
                                                //do array. Caso não haja o parametro do split, a string não é separada fazendo um unico elementro dentro do array





