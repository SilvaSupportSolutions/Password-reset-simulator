// O código irá ser gerado aleatoriamente para simular o que seria enviado via e-mail
var codigoGerado = "";

function verificarEmail() {
    var email = document.getElementById("email").value;
    var erro = document.getElementById("erroEmail");

    if (email == "" || !email.includes("@") || !email.includes(".")) {
        erro.style.display = "block";
        return;
    }

    erro.style.display = "none";

    codigoGerado = "";

    for (var i = 0; i < 6; i++) {
        codigoGerado += Math.floor(Math.random() * 10);
    }

    alert(
        "Código enviado para: " +
        email +
        "\n\n(Simulação) Seu código é: " +
        codigoGerado
    );

    irParaPasso(2);
}

function verificarCodigo() {
    var digitado = document.getElementById("codigo").value;
    var erro = document.getElementById("erroCodigo");

    if (digitado !== codigoGerado) {
        erro.style.display = "block";
        return;
    }

    erro.style.display = "none";

    irParaPasso(3);
}

// muda quais passos a seguir estão visíveis na tela
function irParaPasso(numero) {
    var passos = document.querySelectorAll(".passo");

    for (var i = 0; i < passos.length; i++) {
        passos[i].classList.remove("ativo");
    }

    document.getElementById("passo" + numero).classList.add("ativo");

    document.getElementById("texto-passo").innerText =
        "Passo " +
        numero +
        " de 3 — " +
        textoDosPasso(numero);
}

function textoDosPasso(n) {
    if (n == 1) return "Informe seu e-mail";
    if (n == 2) return "Verifique o código";
    if (n == 3) return "Crie uma nova senha";
}

function voltarPasso(numero) {
    irParaPasso(numero);
}

function verificarForca() {
    var senha = document.getElementById("novaSenha").value;
    var barra = document.getElementById("forcaBarra");

    var forca = 0;

    if (senha.length >= 6) forca++;
    if (senha.length >= 10) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^a-zA-Z0-9]/.test(senha)) forca++;

    if (forca <= 1) {
        barra.style.width = "25%";
        barra.style.backgroundColor = "red";
    } else if (forca == 2 || forca == 3) {
        barra.style.width = "60%";
        barra.style.backgroundColor = "orange";
    } else {
        barra.style.width = "100%";
        barra.style.backgroundColor = "green";
    }
}

function redefinirSenha() {
    var nova = document.getElementById("novaSenha").value;
    var confirma = document.getElementById("confirmarSenha").value;
    var erro = document.getElementById("erroSenha");

    if (nova.length < 6) {
        erro.innerText = "A senha precisa ter pelo menos 6 caracteres.";
        erro.style.display = "block";
        return;
    }

    if (nova !== confirma) {
        erro.innerText = "As senhas não coincidem.";
        erro.style.display = "block";
        return;
    }

    erro.style.display = "none";

    var passos = document.querySelectorAll(".passo");

    for (var i = 0; i < passos.length; i++) {
        passos[i].style.display = "none";
    }

    document.getElementById("texto-passo").style.display = "none";
    document.getElementById("msgSucesso").style.display = "block";
}
