const saudacao = "Olá!";

function exec() {
  const saudacao = "Faaala!"
  return saudacao;
}

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90.6,
  endereco: {
    logradouro: 'Rua Muito Lecal',
    numero: 123
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

/*
  Um par chave/valor é tudo aquilo que recebe uma atribuição dentro de um contexto lexico
  espaço físico onde foi atribuido.
*/