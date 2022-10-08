var numeroSecreto = parseInt(Math.random() * 11);
var i = 3;
certo = 1;

function Chutar() {
  if (i > 0 && certo == 1) {
    var chute = parseInt(document.getElementById("valor").value);
    console.log("primeiro" + numeroSecreto);
    if (chute == numeroSecreto) {
      console.log("segundo" + numeroSecreto);
      tentativa = "Parabéns, você acertou o número secreto";
      console.log("Parabéns, você acertou o número secreto");
      certo = 0;
    } else if (chute > 10 || chute < 0) {
      console.log("Você chutou um número inválido");
      tentativa = "Você chutou um número inválido";
      i = i + 1;
    } else {
      console.log(bug);
      tentativa = "Você errou";
      console.log("Você errou, tente novamente");
    }
    if (i == 1 && chute != numeroSecreto) {
      var fim = document.getElementById("acabou");
      var acabou = "Suas chances acabaram, resete para tentar novamente";
      fim.innerHTML = acabou;
    }

    var acertoOuErro = document.getElementById("resultado");
    var resultado = tentativa;
    acertoOuErro.innerHTML = resultado;
    console.log(i);
    i = i - 1;
    var numeroDeChutes = document.getElementById("falta");
    var falta = "Digite um número de 0 a 10, você tem " + i + " tentativas";
    numeroDeChutes.innerHTML = falta;
  }
}
function resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  bug = numeroSecreto;
  console.log(numeroSecreto);
  certo = 1;
  i = 3;
  var acertoOuErro = document.getElementById("resultado");
  var resultado = "";
  acertoOuErro.innerHTML = resultado;

  var numeroDeChutes = document.getElementById("falta");
  var falta = "Digite um número de 0 a 10, você tem " + i + " tentativas";
  numeroDeChutes.innerHTML = falta;
  var fim = document.getElementById("acabou");
  var acabou = "";
  fim.innerHTML = acabou;
}