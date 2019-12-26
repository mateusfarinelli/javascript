let valor

console.log(valor);//Por padrão uma variavel não inicialziada tem valor "undefined"
//console.log(valor2);//Vai gerar um erro dizendo que a varaivel não foi definida. diferente do tipo undefined

valor = null;
console.log(valor)//Retorna null, pois agora a variavel foi inicilizada mas não está apontando pra nenhuma EDM
//console.log(valor.toString())//Gerará um erro pois como a variavel valor esta definida como nulo, o metodo toString não existe para esse tipo primitivo

const produto = {}
console.log(produto.preco)//Retorna undefined, pois o objeto produto foi criado mas não definido
//console.log(produto.preco.a)//Retornará um erro, já que preço não está criado e nem definido

/*
  Preferencialmente é recomendado não atribuir a uma variavel explicitamente o valor undefined
  deixando a linguagem tomar conta disso.

  Quando for necessario atrbuir um valor que tenha propriedade "false" utilizar o null, mas é
  preciso ter cuidado, já que muitos metodos podem não existir pra esse tipo primitivo, e assim
  não sendo possivel acessar esses metodos com o operador "." como no exemplo do toString().
*/