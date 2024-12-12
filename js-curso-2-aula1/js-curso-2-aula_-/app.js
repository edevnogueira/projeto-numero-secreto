let numeroRepetidoLista = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function passarMouse() {
    let botao = document.querySelectorAll('button');
    botao.forEach(valor => {
        if (valor.disabled) {
            valor.style.cursor = 'not-allowed';
        } else {
            valor.style.cursor = 'pointer';
        }
    });
}

function exibirTexto(tag, texto) {
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemTela() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e ' + numeroLimite);
}
exibirMensagemTela();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let tentativas = `Parabéns! Você acertou o número secreto com ${numeroTentativas} ${palavraTentativa}`;
        exibirTexto('p', tentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor');
    } else {
        exibirTexto('p', 'O número secreto é maior');
    }
    numeroTentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeElementosLista = numeroRepetidoLista.length;

    if (quatidadeElementosLista == numeroLimite) {
        numeroRepetidoLista = [];
    }

    if (numeroRepetidoLista.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroRepetidoLista.push(numeroEscolhido);
        console.log(numeroRepetidoLista)
        return numeroEscolhido
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}