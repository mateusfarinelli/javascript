const func = [];

for(var i = 0; i < 10; i++){
  func.push(function() {
    console.log(i);
  })
}

func[2]();
func[8]();

/*
  O retorno é 10 e 10 pois var não tem escopo de bloco, e portanto não "guarda" os estados das funções
  que foram executadas anteriormente, sómente para o valor que saiu do laço
*/