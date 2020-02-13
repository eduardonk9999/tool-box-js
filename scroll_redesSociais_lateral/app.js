var main = document.querySelector('main');

var redesSociais = document.querySelector('.redes_sociais');
var Posicaopx = 0;
redesSociais.style.top = 0 + "px";
window.addEventListener('scroll', function(){
  
  redesSociais.style.top = Posicaopx + "px";
  // console.log(redesSociais.offsetTop);
  // console.log(window.scrollY);
  if(window.scrollY >= redesSociais.offsetTop){
    Posicaopx++;
  } else{
    Posicaopx = 0;
  }


});
 