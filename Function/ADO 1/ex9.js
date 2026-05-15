import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA MÉDIA');

//ENTRADA DE DADOS
let n1 = Number(ler('\nInforme sua primeira nota: '));
let n2 = Number(ler('\nInforme sua segunda nota: '));
let n3 = Number(ler('\nInforme sua terceira nota: '));


//PROCESSAMENTO DE DADOS
let r = media(n1, n2, n3);

//SAIDA
console.log(`\nA média é ${r.toFixed(1)}`);

//FUNCION AREA
function media (a, b, c) {
    let x = (a + b + c) / 3;
    return x;
}