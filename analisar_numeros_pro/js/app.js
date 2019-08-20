let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function isLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adcionar() {
  if (isNumero(num.value) && !isLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adcionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adcionar valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados<p/>`;
    res.innerHTML += `<p>Meu maior valor é ${maior}<p/>`;
    res.innerHTML += `<p>Meu menor valor é ${menor}<p/>`;
    res.innerHTML += `<p>A soma de todos meus valores é ${soma}<p/>`;
    res.innerHTML += `<p>A Média dos meus valores é:  ${media}<p/>`;
  }
}
