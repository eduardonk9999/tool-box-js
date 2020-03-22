let iniciado = false;
let btnInicia = document.querySelector("#comecar_parar");
let elementoCronometro = document.querySelector("#cronometro");
let btnZerar = document.querySelector("#zerar");
let hora_inicio;
let init_conometro;
let hora_atual;
let tempo_passado;
let horas, minutos, segundos, milesegundos;

//quantidade de milesegundos em uma hora: 3600000;
//quantidade de mile em um minuto: 60000


let iniciaCronometro = function(){
  if (!iniciado) {
    iniciado = true;
    btnInicia.innerHTML = "Parar";


    if(!hora_inicio) {
      hora_inicio = new Date().getTime();
    } else {
      hora_inicio = new Date().getTime() - tempo_passado;
    }


    //funcao para tirar zero a esquerda
    function add_letf_zero(number){
      if(number < 10) {
        return "0" + number.toString();
      } else {
        return number.toString();
      }
    }
    //

    
    init_conometro = window.setInterval(function(){
      hora_atual = new Date().getTime();
      tempo_passado = hora_atual - hora_inicio;

      horas = Math.floor(tempo_passado / 3600000);
      resto = tempo_passado - (horas * 3600000);

      minutos = Math.floor(resto / 60000);
      resto -= (minutos * 60000);

      segundos = Math.floor(resto / 1000);
      resto -= (segundos * 1000);

      milesegundos = resto;

      elementoCronometro.innerHTML = `${add_letf_zero(horas)}:${add_letf_zero(minutos)}:${add_letf_zero(segundos)}:${milesegundos}`;


      

    }, 10)

  } else {
    window.clearInterval(init_conometro);
    iniciado = false;
    btnInicia.innerHTML = "Começar";
  }
}


btnInicia.onclick = iniciaCronometro;



btnZerar.addEventListener("click", function(){
  tempo_passado = 0;
  hora_inicio = new Date().getTime();
  elementoCronometro.innerHTML = '00:00:00 000';
});


