/*Um objeto é uma coleção de chave valor, ou seja,
você tem uma chave(atributo, identificador, que seja unico) e passa um valor para esse atribuito 
podendo ainda ter outros objetos dentro de um objeto*/

const prod1 = {};//Criando um objeto vazio
prod1.nome = 'Celular Show de Bola';//Inserindo o atributo nome ao objeto dinamicamente, ou seja, sem declaração prévia
prod1.preco = 4998.02;

console.log(prod1);

//Criação do objeto de forma statica
const prod2 = {
  nome: 'Camisa Polo',
  preco: 120.45,
  cor: 'Azul marinho'
}

console.log(prod2);

