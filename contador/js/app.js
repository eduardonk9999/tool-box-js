let inicio = document.querySelector(".inicio");
let fim = document.querySelector(".fim");
let passo = document.querySelector(".passo");
let btnEnviar = document.querySelector(".enviar");

function passos() {
  let valorInc = Number(inicio.value);
  let valorFim = Number(fim.value);
  let valorPass = Number(passo.value);

  if (valorInc === 0) {
    alert("Insira o valor no campo Inicial porfavor");
  } else {
    while (valorInc < valorFim) {
      valorInc += valorPass;

      let exibeResultado = document.querySelector(".exibe");
      let img = document.createElement("img");
      img.setAttribute("src", "imgs/hand.png");
      img.classList.add("imgIcone");
      let icone = exibeResultado.appendChild(img);

      exibeResultado.append(`${valorInc}`);
      //exibeResultado.append(`${icone}`);
    }
  }
}

btnEnviar.addEventListener("click", passos);
