let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo) //Operador de dupla negação para validar um boolean, já que assim conseguimos saber se seu valor nativo é verdadeiro

console.log('caso em que o resultado é verdadeiro ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //String não vazia pois contem um espaço em branco dentro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //Testa se o valor passado para a atribuição é verdadeiro e não se a atribuição deu certo 
console.log(!!(isAtivo = false)) // falso


console.log('caso em que o resultado é falso...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // falso