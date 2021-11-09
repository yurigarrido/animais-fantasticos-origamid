// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const rectPrimeiraImagem = primeiraImagem.getBoundingClientRect();
console.log(rectPrimeiraImagem.top);

// Retorne a soma da largura de todas as imagens
const somaImagens = () => {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
imgs.forEach((imagem) => {
  soma = soma + imagem.offsetWidth
})
console.log(soma)
}

window.onload = function() {
  somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight>= 48 ) {
    console.log('possui boa acessibilidade');
  } else {
    console.log('não possui boa acessibilidade');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px').matches;

if(browser) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
