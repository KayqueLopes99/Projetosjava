/* var = variaveis 
= é atribuição 
textos ou palavras ultilizando aspas simples ou duplas
camelCase
ponto e não vírgula
adição = +
subtração = -
multiplicação = *
*/ 
/*O método toFixed()formata um número utilizando notação de ponto fixo.duas casas decimais pós vírgula.
Sintaxe: numObj.toFixed([dígitos])
*/
/*COLOQUE O VALOR AQUI PARA CALCULAR O VALOR:*/
var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert('R$' + valorEmReal);
/* + ligar nomes */