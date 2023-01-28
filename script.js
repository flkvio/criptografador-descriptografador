let entrada = document.getElementById("entrada");
entrada.focus();

let saida = document.getElementById("saida");

let botaoDeCodificar = document.getElementById("botao-de-codificar");
let botaoDeCopiar = document.getElementById("copy");
botaoDeCodificar.onclick = codificar;

saida.readOnly = true;
function codificar() {
  let entrada = document.decoder.form1.value;
  console.log(entrada);
  let letrasArmazenadas = "";

  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] == "e") {
      letrasArmazenadas += "enter";
    } else if (entrada[i] == "i") {
      letrasArmazenadas += "imes";
    } else if (entrada[i] == "a") {
      letrasArmazenadas += "ai";
    } else if (entrada[i] == "o") {
      letrasArmazenadas += "ober";
    } else if (entrada[i] == "u") {
      letrasArmazenadas += "ufat";
    } else {
      letrasArmazenadas += entrada[i];
    }
    document.decoder.form2.value = letrasArmazenadas;
    console.log(letrasArmazenadas);
  }
}

function decodificar() {
  let entrada = document.decoder.form1.value;
  let letrasArmazenadas = "";
  console.log(entrada);
  document.decoder.form2.value = entrada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiar() {
  let textoPraSerCopiado = document.getElementById("saida");
  textoPraSerCopiado.select();
  document.execCommand("copy");
  alert('Copiado para área de transferência.');
}

document.getElementById("copy").addEventListener("click", copiar);

entrada.value = "";
saida.value = "";