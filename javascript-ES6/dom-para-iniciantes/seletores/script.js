// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesFilter = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagesFilter);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll("[href^='#']");

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const allP = document.getElementsByTagName('p');
console.log(allP[allP.length - 1].innerHTML);
