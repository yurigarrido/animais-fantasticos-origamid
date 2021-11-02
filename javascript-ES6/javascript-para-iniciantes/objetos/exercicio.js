// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: 'yuri',
  sobrenome: 'garrido',
  corFavorita: 'green',
  dataDeNascimento: '06 de setembro de 2002',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
  return this.nome + ' '+ eu.sobrenome;
}
console.log(eu.nomeCompleto())
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10 anos',
  late: 'sim',
  gostaDeHomens: 'não'
};