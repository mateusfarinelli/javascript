const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //Retorna undefined pois o index 4 dentro do array valores não foi definido

valores[4] = 10;//Definindo o incide de valor 4 no array
valores[10] = 11;//O interpretador irá avisar que entre a ultima posição do array (no caso 4) e essa nova posição existem outros indecies vazios
console.log(valores[4]);
console.log(valores);//Imprime o array na tela
console.log(valores.length); //Retorna quantidade de elemtnos no array, no caso 5

valores.push( {id:3}, false, null, 'teste');
console.log(valores); /*O metodo push permite a inserção de elemntos no fim do array
                       e devido ao sua fraca tipagem e sua dinamica o javascript permite
                       que um array seja construido com varios tipos primitivos como representado
                       acima */

console.log(valores.pop());//Metodo para remover sempre o ultimo elemento de um array
delete valores[0];//Deleta um item ordenado do array, ou seja, deleta o elemento indicado pelo index
console.log(valores);//No index 0 aparecerá <1 empty item>

console.log(typeof valores);//Um array em JS é do tipo object