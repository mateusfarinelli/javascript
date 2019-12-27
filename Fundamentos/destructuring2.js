const [a] = [10];
console.log(a);

//Veja que pra "n2" = 7 e "n4" = 9, portanto n5 devera retornar undefined e n6 = 0
const [n1, , n3, , n5, n6 = 0] = [10, 7, 8, 9];
console.log(n1, n3, n5, n6);

//Veja que o primeiro elemento do primeiro array será descartado pegando o segundo,
//e no segundo o primeiro indice também será desconsiderado pegando apeans o segundo
//Logo a saida deverá ser 6
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
