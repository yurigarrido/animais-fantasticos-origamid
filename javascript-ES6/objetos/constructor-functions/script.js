// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andar');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa(joao, 20);
const maria = new Pessoa(maria, 25);
const bruno = new Pessoa(bruno, 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const listaElementos = documento.querySelector(seletor);
  this.elements = listaElementos;
  this.addClass = function(classe) {
    listaElementos.forEach((element) => {
      element.classList.add(classe)
    })
  }
  this.removeClass = function(classe) {
    listaElementos.forEach((element) => {
      element.classList.remove(classe)
    })
  }

}
