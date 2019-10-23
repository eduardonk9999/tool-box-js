function horaAtual() {
    let msg = document.querySelector('#msg');
    let data = new Date();
    let hora = data.getHours();
    let img = document.querySelector('.imagem');
    let msgUser = document.querySelector('.msgUser');

    msg.innerHTML = `A hora atua é: ${hora} horas`;

    if(hora >= 0 && hora <= 12){
        //Bom dia
        msgUser.innerHTML = 'Bom dia!';
        img.src = 'imgs/manha.jpg';

    } else if(hora >= 12 && hora <= 18){
        //Boa tarde
        msgUser.innerHTML = 'Boa tarde!';
        img.src = 'imgs/tarde.jpg';
    } else {
        // Boa noite
        msgUser.innerHTML = 'Boa noite';
        img.src = 'imgs/noite.jpg';
    }

}

horaAtual();