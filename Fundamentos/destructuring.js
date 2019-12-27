//Recurso destructuring foi adicionado ao JS na versão ES2015
//Possibilida a extração de mais de um parametro por vez de um objeto/array

const pessoa = {
  nome: 'Ana',
  idade: 15,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

//Aplicando o destructuring em short sintaxe, ou seja quando o nome do parametro é igual ao nome do atributo
const { nome, idade } = pessoa; 
console.log(nome, idade);

//Aplicando o destructuring em atribuindo novas varaiveis
const { nome: n, idade: i } = pessoa; 
console.log(n, i);

//Verificando quando o parametro não existe dentro do objeto e setando valor padrão
const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

//Acessando atributos de objetos aninhados
const { endereco: {logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

/*
  É importante tomar cuidado com os aninhamentos pois se o penultimo dado for considerado undefined ou
  null e o seguinte também for considerado undefined ou null o interpretador retornará um erro
*/