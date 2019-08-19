let valorInicialTabuada = document.querySelector(".valorTab");
let btnEnvia = document.querySelector(".calculaTab");

function montaTabuada() {
  let valorPCalcula = Number(valorInicialTabuada.value);
  console.log(valorPCalcula);
  let imprime = document.querySelector(".res");
  for (let i = 1; i < 11; i++) {
    const calculaTabuada = i * valorPCalcula;

    let valorUM = document.createElement("p");
    valorUM.append(`${i} x ${valorPCalcula} = ${calculaTabuada}`);

    imprime.append(valorUM);
  }
  console.log("TESTE");
}

btnEnvia.addEventListener("click", montaTabuada);
