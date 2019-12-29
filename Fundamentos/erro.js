function tratarErroELancar(erro) {
  throw new Error('Deu ruim doido !!!')
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.nome.toUpperCase() + '!!!');
  }
  catch(e) {
    tratarErroELancar(e);
  }
  finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj);

/*
  Try é um metodo utilizado para blocos passiveis de erro, utilizado para tratar esses blocos.
  Catch é um metodo que da retorno do try em caso de erro
  Throw é um metodo que lança uma função juntamento com o erro
  e Finally é um metodo que retorna algo sempre ao fim do block try/catch, mesmo não tem geração de erro, tipo um alerta de fim de execução
*/