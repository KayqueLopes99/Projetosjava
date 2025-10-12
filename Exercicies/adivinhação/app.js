var numeroSecreto = parseInt(Math.random() * 1001);
var tentativasMaximas = 10; /* Defina o número máximo de tentativas*/
var tentativas = 0; /*Inicializa o contador de tentativas */ 
/*número secreto dado em var numeroSecreto = o computador escolhe um número aleátorio com  o random e a multiplicação por 1001 vai fazer com que ele escolhe outros números*/
/*prompt('Digite um número entre 1 e 1000');*/
/*prompt funciona como o alert*/
/*primeiro deve-se guardar o valor != negação*/
/*perguntando enquanto o chute não for o número secreto repita novamente a mensagem*/
while (tentativas < tentativasMaximas){
var chute = prompt('Digite um numero entre 1 e 1000');
/*comparar para acertar*/
/*alert = imprime valores na tela*/
/*se o chute for igual ao número secrefo alert acertou*/
/* == comparar */
if (chute == numeroSecreto) {
    alert('Acertou! : )')
   break; // Sai do loop se o jogador acertar
}
/*else if (chute é maior que o número secreto)*/
else if (chute > numeroSecreto){
  alert('Errou... o numero secreto e menor');
} else if (chute < numeroSecreto){
  alert('Errou... o numero secreto e maior');
}
tentativas++; /* Incrementa o contador de tentativas*/
}
  // Verifica se o jogador usou todas as tentativas sem acertar
if (tentativas === tentativasMaximas) {
    alert('Suas tentativas acabaram. O numero secreto era ' + numeroSecreto);
}