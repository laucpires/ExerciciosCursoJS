let numeros = document.getElementById('numeros');
let lista = document.getElementById('selectNum');
let res = document.querySelector('div#res');
let vetor = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }
    else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function adicionar() {
    if(isNumero(numeros.value) && !inLista(numeros.value, vetor)) {
        vetor.push(Number(numeros.value));
        let item = document.createElement('option');
        item.text = `Valor ${numeros.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    }
    else {
        alert('Valor inválido.');
    }
    numeros.value = '';
    numeros.focus();
}

function resultado() {
    if (vetor.length == 0) {
        alert('Adicione pelo menos um número para gerar o relatório.');
    }
    else {
        let total = vetor.length;
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;

        for (let pos in vetor) {
            soma += vetor[pos];
            if (vetor[pos] > maior)
                maior = vetor[pos];
            if (vetor[pos] < menor)
                menor = vetor[pos];
        }

        media = soma/total;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
        res.innerHTML += `<p>A média de valores é ${media}.</p>`;
    }
}