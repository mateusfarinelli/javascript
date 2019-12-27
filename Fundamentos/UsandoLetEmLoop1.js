for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);

/*
  Conforme ja visto o escopo let permite que a variavel seja acessada dentro de um bloco, entretanto
  como a mesma foi definida dentro desse bloco, não conseguiremos acessar a variavel fora do mesmo.
  Por tanto dentro do laço de repetição a variavel é acessada, mas quando tentamos acessa-la fora do bloco
  do laço, é gerado um erro do tipo Reference, dizendo que i não está definido
*/