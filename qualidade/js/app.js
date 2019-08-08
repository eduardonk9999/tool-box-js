function verificar() {
  let anoNascimento = document.querySelector('#textoano');
  let date = new Date();
  let ano = date.getFullYear();
  let msg = document.querySelector('#res');
 

  if(anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
      alert('ERRO');
  } else {
      let idade = ano - Number(anoNascimento.value);
      let valorSex = document.getElementsByName('radsex');
      let genero = '';
      let img = document.createElement('img');
      img.setAttribute('id', 'imgs/foto.png');
      
      anoNascimento.value = '';
      img.setAttribute('src', 'imgs/');
      if(valorSex[0].checked) {
        genero = 'Homem';
        if(idade >= 0 && idade < 10){
          //Criança
          img.setAttribute('src', 'imgs/meninobaby.jpg');

        } else if(idade < 21){
          //Jovem
          img.setAttribute('src', 'imgs/homemjovem.jpg');
        } else if(idade < 50){
          //Adulto
          img.setAttribute('src', 'imgs/homem.jpg');
        } else{
          //Idoso
          img.setAttribute('src', 'imgs/homemidoso.jpg');
  
        }
      } else if(valorSex[1].checked){
          genero = 'Mulher'
          if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imgs/meninababy.jpg');
          } else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'imgs/mulherjovem.jpg');
          } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'imgs/mulher.jpg');
          } else{
            //Idoso
            img.setAttribute('src', 'imgs/mulheridosa.jpg');
          }
      }
      
      msg.innerHTML = `Dectamos ${genero} de ${idade} anos`;
      img.classList.add('capaImg');
      msg.appendChild(img);

      
  } 
  

}

const btn = document.querySelector('#btnExecuta');
btn.addEventListener('click', verificar);