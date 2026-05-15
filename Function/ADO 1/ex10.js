import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA MÉDIA 2.0');

//ENTRADA DE DADOS
let n1 = Number(ler('Informe sua primeira nota: '));
let n2 = Number(ler('Informe sua segunda nota: '));
let n3 = Number(ler('Informe sua terceira nota: '));
let n4 = Number(ler('Informe sua quarta nota: '));
let n5 = Number(ler('Informe sua quinta nota: '));


//PROCESSAMENTO DE DADOS
let r = media(n1, n2, n3, n4, n5);

//SAIDA
console.log(`\nA média é ${r.toFixed(1)}`);

//FUNCION AREA
function media (a, b, c, d, e) {
    let x = (a + b + c + d + e) / 5;
    return x;
}