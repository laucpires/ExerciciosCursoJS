var idade = 65;

if (idade < 18) {
    console.log('Menor de idade.');
    if (idade >= 16) {
        console.log('Voto opcional.');
    }
    else {
        console.log('Não vota.');
    }
}
else {
    if (idade > 64) {
        console.log('Maior de idade. Voto opcional.');
    }
    else {
        console.log('Maior de idade. Voto obrigatório.');
    }
}