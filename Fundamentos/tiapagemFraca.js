let qualquer = 'Legal';
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1415;
console.log(qualquer);
console.log(typeof qualquer);

/* 
  Apesar de apresentar tipagem dinamica, ou seja, não precisa da declaração do tipo
  primitivo da variavel/constante declarada o javascript ainda sim possui os tipos primitivos
  definidos em seu escopo.

  Nesse exemplo a tipagem fraca é verificada pela falta do tipo primitivo na declaração da variavel,
  e a tiapagem dinamica que possibilita fazer a atribuição de qualquer tipo a variavel sem restrição durante o código.

  E por fim é possível verificar que existem os tipos primitivos definidos utilziando o metodo typeof que é nativo da lingaguem
  e retorna o tipo primitivo da variavel testada.

  Um exemplo de tipagem forte e não dinamica é o C, que na delcaração de variavel é necessario definir o tipo primitivo
  e não é possivel mudar esse tipo primitivo no decorrer do código. Por exemplo a variavel qualquer = 'Legal' deve ser declarada como string, ficando:

  string qualquer;

  qualquer = "Legal";

*/