function rand({ min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand({ max:50, min: 40}));

//Poderiamos fazer a declaração literal do objeto também
const obj = {
  max: 50,
  min: 40
}
console.log(rand(obj));
console.log(rand({ min: 990}))//Retornara algum valor entre 990 e 1000 ja que o valor maximo está setado na declaração da função junto com o destructuring
console.log(rand({}))//Retornara algo entre 0 e 1000 pois os valroes padrões estão setados na função
//console.log(rand())//Retornará erro pois não é possivel desestruturar algo undefined ou nulo