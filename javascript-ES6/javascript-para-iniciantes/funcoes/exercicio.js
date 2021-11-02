// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
    return !!valor;
};
console.log(verificaValor(2));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(l1, l2, l3, l4) {
  var perimetro = l1 + l2 + l3 + l4;
  return perimetro;
}
console.log(perimetroQuadrado(2,2,4,4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return ` seu nome completo é ${nome} ${sobrenome}`
}
console.log(nomeCompleto('yuri', 'garrido'));

// Crie uma função que verifica se um número é par
function verificaNumerosPares(numero) {
  if( numero % 2 == 0 ) {
    return ' é um número par'
  } else {
    return ' é um número ímpar'
  }
}
console.log(verificaNumerosPares(8));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataType(data) {
  return `é um valor do tipo ${typeof data}`
}
console.log(dataType(false));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  return console.log('yuri garrido')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  //var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
