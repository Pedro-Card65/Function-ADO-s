import prompt from 'prompt-sync'
let ler = prompt();

console.log('');

//ENTRADA DE DADOS
console.log('TABELA DE PREÇOS\nPequeno = R$13,50\nMédio = R$15,00\nGrande = R$17,50');
console.log('\nInforme quantos açaís de cada tamanho deseja, em ordem:')
let peq = Number(ler());
let med = Number(ler());
let gra = Number(ler());

let desc = Number(ler('Informe o valor de desconto em porcentagem: '))

//PROCESSAMENTO
let total = soma(peq, med, gra);
let r = desconto(total, desc);

//SAIDA
console.log(`\nTotal à pagar é R$${r.toFixed(2)}`);

//AREA FUNCTION
function soma(a, b, c) {
    let peq = a * 13.5;
    let med = b * 15;
    let gra = c * 17.5;
    let x = peq + med + gra;
    return x;
}

function desconto (a, b) {
    let x = a - (a * (b / 100));
    return x;
}
