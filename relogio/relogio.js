//Script para relógio
let atualizaRelogio = window.setInterval(function(){
  let objetoRelogio = document.querySelector('#relogio');


  let dateTime = new Date();
  let hora = dateTime.getHours();
  let minutos = dateTime.getMinutes();
  let segundos = dateTime.getSeconds()
  
  function formata_tempo (time){
    if (time >= 0 && time <= 9){
      var formatando_tempo = time.toString();
      formatando_tempo = `0${formatando_tempo}`;
    } else {
      var formatando_tempo = time.toString();
    }
    return formatando_tempo;
  }

  var relogiAtual = objetoRelogio.innerHTML = `${formata_tempo(hora)}:${minutos}:${formata_tempo(segundos)}`;
  //console.log(relogiAtual);


}, 1000);