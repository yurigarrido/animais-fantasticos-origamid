// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = ['1959','1962','1970','1994','2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function(ano) {
  return console.log(`o Brasil ganhou a copa de ${ano}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let index = 0; index < frutas.length; index+= 1) {
  if(frutas[index] === 'Pera') {
    break;
  }
  console.log(frutas[index]);
}

// Coloque a última fruta da array acima em uma variável,
var ultimaFruta = frutas.pop();
console.log(ultimaFruta);
