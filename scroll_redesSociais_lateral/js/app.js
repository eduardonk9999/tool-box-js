/*
Salvar elementos em uma variavel;
pegar altura do menu
pegar posicao do conteudo peranto o topo do window
pegar posicao do main peranto o topo do window


*/


let menu = document.querySelector('.list');
let content = document.querySelector('.section');
let footer = document.querySelector('footer');
let somaUm = 0;
let scroll = 0;


function scrollPage(){
  
  // console.log('Esse é o MENU ' + menu.offsetTop);
  // console.log('Esse é o body ' + window.pageYOffset);
  // console.log('Esse é o Conteúdo ' + content.offsetTop);
  
  


  //down
  if((document.body.getBoundingClientRect()).top > scroll){
    

    let subtrai = somaUm--;
    menu.style.top = subtrai + 'px';
    

  } else {
      menu.classList.add('ative');
      somando = somaUm++;
      menu.style.top = somando + 'px';
    
    scroll = (document.body.getBoundingClientRect()).top; 
  }
 

  //reset
  if(window.pageYOffset <= content.offsetTop){
    menu.classList.remove('ative');
    somaUm = 0; 
    subtrai = 0;
    menu.style.top = 'initial';
  }

 

}

window.addEventListener('scroll', scrollPage);