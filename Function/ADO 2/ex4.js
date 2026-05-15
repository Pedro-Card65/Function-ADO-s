import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA CONVERSÃO REAL EM DOLAR\n');

//ENTRADA DE DADOS
let n = Number(ler('Informe o valor a ser convertido: '));

//PROCESSAMENTO
let r = conv(n)

//SAIDA
console.log(r);

//AREA FUNCTION
function conv (a) {
    let x = a / 5.16;
    return x;
}
