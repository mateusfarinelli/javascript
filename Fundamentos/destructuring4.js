function rand([ min = 0, max = 1000]){
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([40,30]));//Caso em que min > max

//Poderiamos fazer a declaração literal do array também
const array = [50, 60];
console.log(rand(array));

console.log(rand([992]))//Retornara algum valor entre 992 e 1000 ja que o valor maximo está setado na declaração da função junto com o destructuring
console.log(rand([, 10]))//Retornara algo entre 0 e 10 pois o valror minimo padrão esta setado na função
console.log(rand([]))//Retorno algo entre 0 e 1000 já que os valores padrões estão setados na função
//console.log(rand[])//Retornará erro pois não é possivel desestruturar algo undefined ou nulo