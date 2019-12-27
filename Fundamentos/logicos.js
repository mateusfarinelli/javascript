function compras (trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) //Transformand trabalho1 e trabalho2 em boolean e ^ usando o XOR bitwise (bit a bit)
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unario

  return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}
console.log(compras(true, true));
console.log('')
console.log(compras(true, false));
console.log('')
console.log(compras(false, true));
console.log('')
console.log(compras(false, false));

/*
  Tabela verdade
  Oeprador "e" -> &&
    v e v -> v
    v e f -> f
    f e ? -> f

  Operador "ou" -> ||
    v ou ? -> v
    f ou v -> v
    f ou f -> f
  
  Operador "ou exclusivo" != ou ^(bitwise)
  v ^ v -> f
  v ^ f -> v
  f ^ v -> v
  f ^ f -> f
*/
