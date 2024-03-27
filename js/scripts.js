let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

// const lampada = () => {

// };

const gerarImagem = () => {
  let qtdimg = document.getElementById("inQtdImg").value;
  let img = document.getElementById("canvas");

  img.innerHTML = "";
  for (i = 0; i < qtdimg; i++) {
    img.innerHTML += `<img src="./img/acesa.jpg" class=imagem alt=""></img>`;
  }
};

const calcular = () => {
  let valorPed = document.getElementById("inValorPedido").value;
  let percDesc = 0;
  let valorDesc = 0;
  let valorLiquido = 0;
  console.log(valorPed);
  switch (true) {
    case valorPed >= 2000 && valorPed > 1500:
      {
        percDesc = 1.5;
        valorDesc = valorPed * (percDesc / 100);
        valorLiquido = valorPed - valorDesc;
      }
      break;
    case valorPed >= 1500 && valorPed > 1000:
      {
        percDesc = 1.0;
        valorDesc = valorPed * (percDesc / 100);
        valorLiquido = valorPed - valorDesc;
      }
      break;
    case valorPed >= 1000 && valorPed > 500:
      {
        percDesc = 0.8;
        valorDesc = valorPed * (percDesc / 100);
        valorLiquido = valorPed - valorDesc;
      }
      break;
    case valorPed >= 500 && valorPed < 1000:
      {
        percDesc = 0.5;
        valorDesc = valorPed * (percDesc / 100);
        valorLiquido = valorPed - valorDesc;
      }
      break;
    default:
      break;
  }
  document.getElementById("inPercDesc").value = percDesc;
  document.getElementById("inValDesc").value = valorDesc;
  document.getElementById("inValFinal").value = valorLiquido;
};



const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block");

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    (msgErro.className = "verde"));
};