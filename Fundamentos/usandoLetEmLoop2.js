const func = [];

for(let i = 0; i < 10; i++){
  func.push(function() {
    console.log(i);
  })
}

func[2]();
func[8]();

/*
  Diferente de quando usamos o var, a palavra reservada let já tem o "poder de guardar os estados das
  execuções anteriores", dessa forma retornando 2 e 8
*/