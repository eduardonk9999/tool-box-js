//formantando, pegando elementos, form basico, para dar um norte.

//Mostrando campo de select no corpo do HTML

let pegaElemento = function(){
  //pegando o valor inner do elemento
  // var campo_select = document.querySelector("#options");
  // var indece_selecionado = campo_select.options.selectedIndex;
  // var valor_selecionado = campo_select.options[indece_selecionado].innerHTML;
  // document.querySelector("#opcao_selecionada").innerHTML = valor_selecionado;
 
  //pegando só value
  var valor_selecionado = document.querySelector("#options").value;
  document.querySelector("#opcao_selecionada").innerHTML = valor_selecionado;

} 
pegaElemento();

let btnMostra = document.querySelector("#mostrar_opcao");

btnMostra.onclick = pegaElemento;


//Pegando infos dos inputs do tipo radios

//Radio button
var checaInput = function(){
  var radio = document.getElementsByName('genero');
  
  var radio_selecionado;

  for (var a = 0; a < radio.length; a++){
    if(radio[a].checked) {
      radio_selecionado = radio[a].value;
      break;
    }
  }

  let conteudoSelecionado = document.querySelector("#radio_selecionado");
  conteudoSelecionado.innerHTML = radio_selecionado;

}

var btnMostraRadio = document.querySelector('#mostrar_radio');
btnMostraRadio.onclick = checaInput;