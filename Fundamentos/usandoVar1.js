{
  {
    {
      {
        var sera = 'Será???';
        console.log(sera);
      }
    }
  }
}
console.log(sera); //Para uma var, os blocos de código não são escopo, ou seja, podemos encarar uma var como sendo uma variavel global

function sera() {
  var seraLocal = 'Será???';
  console.log(seraLocal);
}

sera()
//console.log(seraLocal); //Para funções o escopo de bloco de código é diferente, ou seja, mesmo uma
                        //var não conseguira ser acessada fora de seu escopo.

/*
  Podemos testar se uma varaivel está ou não fora de uma função, utilizando o objeto window
  dentro do navegador, na aba console.

  Se declararmos pro exemplo uma variavel a = 123 fora de um escopo, e depois tentar acessar
  window.a, receberemos como resposta "123";

  Se posteriormente fizemos algo como var a = 'teste', e executarmos window.a, receberemos
  'teste' como retorno.

  Portanto o maior problema em se usar um escopo global é que se a variavel for sobreescrita
  como foi no exemplo, diversos problemas podem ocorrer, inclusve o crash do sistema.

  Por fim, uma var só tem dois escopos, o global que é aquele onde ela fica acessivel mesmo estando
  dentro de blocos de código, desde que não sejam funções. E o segundo é o escopo local, que é quando
  a var está dentro de um bloco de código de função, e assim ela não é acessada fora desse bloco.
*/