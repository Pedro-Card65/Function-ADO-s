import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE AÇAÍ 2.0\n');

//ENTRADA DE DADOS
console.log('TABELA DE PREÇOS\nPequeno = R$13,50\nMédio = R$15,00\nGrande = R$17,50');
console.log('\nInforme quantos açaís de cada tamanho deseja, em ordem:')
let peq = Number(ler());
let med = Number(ler());
let gra = Number(ler());

//PROCESSAMENTO
let r = total(peq, med, gra);

//SAIDA
console.log(`\nTotal à pagar é R$${r.toFixed(2)}`);

//AREA FUNCTION
function total(a, b, c) {
    let peq = a * 13.5;
    let med = b * 15;
    let gra = c * 17.5;
    let x = peq + med + gra;
    return x;
}
