let btnAcc = document.querySelectorAll('.accordion');
let i;
let itensCampo = document.querySelector('.itens');
for(i = 0; i < btnAcc.length; i++){
  btnAcc[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let painel = this.nextElementSibling;
    console.log(painel.scrollHeight);
    if(painel.style.maxHeight){
      painel.style.maxHeight = null;
      
    } else {
      painel.style.maxHeight = painel.scrollHeight + 'px';
      console.log(itensCampo);
    }
  })
}