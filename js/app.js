var calculadora =
 (function (){
  //Processo para alterar o tamanho das teclas quando pressionadas, vou utilizar seletors ID, mas sei que poderia usar classes.
  function alterarImagem1(){
    document.getElementById("1").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemUm(){
    document.getElementById("1").style="width: 22%";
    document.getElementById("1").style="height:62.91px";
  }

  function alterarImagem2(){
    document.getElementById("2").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemDois(){
    document.getElementById("2").style="width: 22%";
    document.getElementById("2").style="height:62.91px";
  }

  function alterarImagem3(){
    document.getElementById("3").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemTres(){
    document.getElementById("3").style="width: 22%";
    document.getElementById("3").style="height:62.91px";
  }

  function alterarImagem4(){
    document.getElementById("4").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemQuatro(){
    document.getElementById("4").style="width: 22%";
    document.getElementById("4").style="height:62.91px";
  }

  function alterarImagem5(){
    document.getElementById("5").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemCinco(){
    document.getElementById("5").style="width: 22%";
    document.getElementById("5").style="height:62.91px";
  }

  function alterarImagem6(){
    document.getElementById("6").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemSeis(){
    document.getElementById("6").style="width: 22%";
    document.getElementById("6").style="height:62.91px";
  }


  function alterarImagem7(){
    document.getElementById("7").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemSete(){
    document.getElementById("7").style="width: 22%";
    document.getElementById("7").style="height:62.91px";
  }

  function alterarImagem8(){
    document.getElementById("8").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemOito(){
    document.getElementById("8").style="width: 22%";
    document.getElementById("8").style="height:62.91px";
  }

  function alterarImagem9(){
    document.getElementById("9").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemNove(){
    document.getElementById("9").style="width: 22%";
    document.getElementById("9").style="height:62.91px";
  }

  function alterarImagemLiga(){
    document.getElementById("on").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemOn(){
    document.getElementById("on").style="width: 22%";
    document.getElementById("on").style="height:62.91px";
  }

  function alterarImagemSinal(){
    document.getElementById("sign").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemSign(){
    document.getElementById("sign").style="width: 22%";
    document.getElementById("sign").style="height:62.91px";
  }

  function alterarImagemRaiz(){
    document.getElementById("raiz").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemraiz(){
    document.getElementById("raiz").style="width: 22%";
    document.getElementById("raiz").style="height:62.91px";
  }

  function alterarImagemDividido(){
    document.getElementById("dividido").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemdividido(){
    document.getElementById("dividido").style="width: 22%";
    document.getElementById("dividido").style="height:62.91px";
  }

  function alterarImagemMultiplica(){
    document.getElementById("por").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemmultiplica(){
    document.getElementById("por").style="width: 22%";
    document.getElementById("por").style="height:62.91px";
  }

  function alterarImagemMenos(){
    document.getElementById("menos").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemmenos(){
    document.getElementById("menos").style="width: 22%";
    document.getElementById("menos").style="height:62.91px";
  }

  function alterarImagemPonto(){
    document.getElementById("ponto").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemponto(){
    document.getElementById("ponto").style="width: 22%";
    document.getElementById("ponto").style="height:62.91px";
  }

  function alterarImagem0(){
    document.getElementById("0").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemZero(){
    document.getElementById("0").style="width: 22%";
    document.getElementById("0").style="height:62.91px";
  }

  function alterarImagemIgual(){
    document.getElementById("igual").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemigual(){
    document.getElementById("igual").style="width: 22%";
    document.getElementById("igual").style="height:62.91px";
  }

  function alterarImagemMais(){
    document.getElementById("mais").style="transform: scale(0.91, 0.91)";
  }
  function alterarImagemmais(){
    document.getElementById("mais").style="width: 90%";
    document.getElementById("mais").style="height:100%";
  }
  //Função abaixo serve para atribuir as mundanças de tamanho definidas nas funções acima.
  function MudarTamanho(){
    document.getElementById("1").onclick=alterarImagem1
    document.getElementById("1").onmouseout=alterarImagemUm
    document.getElementById("2").onclick=alterarImagem2
    document.getElementById("2").onmouseout=alterarImagemDois
    document.getElementById("3").onclick=alterarImagem3
    document.getElementById("3").onmouseout=alterarImagemTres
    document.getElementById("4").onclick=alterarImagem4
    document.getElementById("4").onmouseout=alterarImagemQuatro
    document.getElementById("5").onclick=alterarImagem5
    document.getElementById("5").onmouseout=alterarImagemCinco
    document.getElementById("6").onclick=alterarImagem6
    document.getElementById("6").onmouseout=alterarImagemSeis
    document.getElementById("7").onclick=alterarImagem7
    document.getElementById("7").onmouseout=alterarImagemSete
    document.getElementById("8").onclick=alterarImagem8
    document.getElementById("8").onmouseout=alterarImagemOito
    document.getElementById("9").onclick=alterarImagem9
    document.getElementById("9").onmouseout=alterarImagemNove
    document.getElementById("on").onclick=alterarImagemLiga
    document.getElementById("on").onmouseout=alterarImagemOn
    document.getElementById("sign").onclick=alterarImagemSinal
    document.getElementById("sign").onmouseout=alterarImagemSign
    document.getElementById("raiz").onclick=alterarImagemRaiz
    document.getElementById("raiz").onmouseout=alterarImagemraiz
    document.getElementById("dividido").onclick=alterarImagemDividido
    document.getElementById("dividido").onmouseout=alterarImagemdividido
    document.getElementById("por").onclick=alterarImagemMultiplica
    document.getElementById("por").onmouseout=alterarImagemmultiplica
    document.getElementById("menos").onclick=alterarImagemMenos
    document.getElementById("menos").onmouseout=alterarImagemmenos
    document.getElementById("ponto").onclick=alterarImagemPonto
    document.getElementById("ponto").onmouseout=alterarImagemponto
    document.getElementById("0").onclick=alterarImagem0
    document.getElementById("0").onmouseout=alterarImagemZero
    document.getElementById("igual").onclick=alterarImagemIgual
    document.getElementById("igual").onmouseout=alterarImagemigual
    document.getElementById("mais").onclick=alterarImagemMais
    document.getElementById("mais").onmouseout=alterarImagemmais
  }
  //Fim do Processo para alterar o tamanho das teclas

  //Operações Matemáticas
  var objeto = {
       Display: document.getElementById("display"),
       valorDisplay: "0",
       Operacao: "",
       primeirovalor: 0,
       segundoValor: 0,
       resultado: 0,
       auxTeclaIgual: false,
  }

  //Teclas de operações pressionadas, não aparecem na tela.
  document.getElementById('mais').addEventListener("click", function()
  {
    document.getElementById('display').innerHTML = "";
    objeto.Operacao = "+";
  });

  document.getElementById('menos').addEventListener("click", function()
  {
    document.getElementById('display').innerHTML = "";
    objeto.Operacao = "-";
  });

  document.getElementById('por').addEventListener("click", function()
  {
    document.getElementById('display').innerHTML = "";
    objeto.Operacao = "*";
  });

  document.getElementById('dividido').addEventListener("click", function()
  {
    document.getElementById('display').innerHTML = "";
    objeto.Operacao = "/";
  });

  document.getElementById('igual').addEventListener("click", function()
  {
    Igual();
  });

  document.getElementById('ponto').addEventListener("click", function()
  {
    pointCalc();
  });

  document.getElementById('sign').addEventListener("click", function()
  {
    //Esta Função faz com que o sinal de menos apareça ou não no visor da tela, quando a tecla +/- é pressionada.
    AdicionarMenos();
  });
  //Fim do processo
  document.getElementById('on').addEventListener("click", function()
  {
    document.getElementById('display').innerHTML = "0";
    objeto.Display = document.getElementById("display");
    objeto.valorDisplay = "0";
    objeto.Operacao = "";
    objeto.primeirovalor = 0;
    objeto.segundoValor= 0;
    objeto.resultado= 0;
    objeto.auxTeclaIgual = false;
  });
  //Função para o sinal de ponto.
  function pointCalc() {
    var display = document.getElementById("display").innerHTML;
    if(display.indexOf('.') != -1) return;
      if(!display) () =>  document.getElementById("display").innerHTML = '0';
        function insertPoint() {
          document.getElementById("display").innerHTML += '.'
        };
        insertPoint()

        return parseFloat(display)
    }
    //Aparecer Sinal de Menos quando clica a tecla +/- e sumir quando pressionada navamente, além disso, evita que o sinal apareça quando o número é zero.
  function AdicionarMenos(){
      var tela = document.getElementById('display')
      if(tela.innerHTML.indexOf('-') == 0){
        tela.innerHTML = tela.innerHTML.substr(1,12);
      }else if(tela.innerHTML != "0"){
        tela.innerHTML = "-" + tela.innerHTML
      }
  };
  //Função para limitar em oito o número de algarismos que aparecem no visor da calculadora.(Primeira Parte que verifica se é um número.)
  function LimitedeCaracteres(teclas){
    var teclas = document.getElementsByClassName('tecla');
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", function(e)
      {
        const tecla = e.currentTarget.id;
        if (!isNaN(tecla)) //verifica que a tecla seja um numero
          limiteCaracteres(tecla);
      });
    }
  };
  //Função para limitar em oito o número de algarismos que aparecem no visor da calculadora.(Segunda parte, que coloca em prática o limite de 8 caracteres.)
  function limiteCaracteres(tecla){
    var tela = document.getElementById('display');
    if (tela.innerHTML.length < 8){
      if(tela.innerHTML == "0" && tecla != "0"){
        tela.innerHTML = tecla;
      } else if(tela.innerHTML != "0"){
        tela.innerHTML = tela.innerHTML + tecla;
      }
    }
    if (objeto.Operacao === ""){
      objeto.primeirovalor = getDisplay();
    } else{
      objeto.segundoValor = getDisplay();
    }
  }

  function getDisplay(){
    return  document.getElementById('display').innerHTML;
  }
  //Resultado das operações Matemáticas
   function Igual(){
    console.log(objeto);
		realizarOperacao(objeto.primeirovalor, objeto.segundoValor, objeto.Operacao);
    console.log(objeto);
		objeto.primeirovalor = objeto.resultado;
		if (objeto.resultado.toString().length < 9){
			objeto.valorDisplay = objeto.resultado.toString();
		} else {
			objeto.valorDisplay = objeto.resultado.toString().slice(0,8) + "...";
		}
		objeto.auxTeclaIgual = true;
		atualizarDisplay();
	}
  //Operações Matmáticas
 function realizarOperacao(primeirovalor, segundoValor, Operacao){
		switch(objeto.Operacao){
			case "+":
				objeto.resultado = parseFloat(primeirovalor) + parseFloat(segundoValor);
			break;
			case "-":
				objeto.resultado = eval(primeirovalor - segundoValor);
			break;
			case "*":
				objeto.resultado = eval(primeirovalor * segundoValor);
			break;
			case "/":
				objeto.resultado = eval(primeirovalor / segundoValor);
			break;
		}
	}
  function atualizarDisplay(){
    var tela = document.getElementById('display');
		tela.innerHTML = objeto.valorDisplay;
	}
  MudarTamanho();
  LimitedeCaracteres();
}());
