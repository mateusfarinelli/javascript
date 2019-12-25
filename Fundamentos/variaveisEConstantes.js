var a = 3;  //Atribuição do valor 3 ao identificador "a" que foi declarado como uma variavel dado a palavra reservada "var"

/*
  É importante nomear seus identificadores de modo correto e com sentido ao 
*/

let b = 4; 

/*
  let não permite redeclaração da variavel dentro de um mesmo escopo
  por exemplo se atribuirmos valor 5 para b usando let (let b = 5) logo a pós a sua declaração com let b= 4
  o programara não executará retornando um erro.
  Entretanto conseguimos contornar essa regra fazendo a atribuição como "b = 5" e isso irá retornar o valor 5 para b
*/

const c = 5;

/*
  Diferentemente de let e var, a palavra reservada const, não perimite nem a atribuição como "c = 6" por exemplo,
  assim como no let, já que ela é uma constante propriamente dita.
*/


