// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19
var idadeIrmao = 26

switch (minhaIdade) {
  case idadeIrmao > minhaIdade:
    console.log('é menor');
    break;
  case idadeIrmao < minhaIdade:
    console.log('é maior');
    break;
  case idadeIrmao == minhaIdade:
    console.log('é igual');
    break;
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// é retornado true
console.log(!!expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
// true
console.log(!!nome);
var idade = 28;
//true
console.log(!!idade);
var possuiDoutorado = false;
// false
console.log(!!possuiDoutorado);
var empregoFuturo;
// false
console.log(!!empregoFuturo);
var dinheiroNaConta = 0;
// false
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(brasil > china); // false
console.log(china > brasil); // true
console.log(brasil == china); // false

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// irá aparecer 'falso' por conta do &&

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// irá aparecer 'Cão' por conta do ||