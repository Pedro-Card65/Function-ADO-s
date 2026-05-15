import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA CONVERSÃO KILOS GRAMAS\n');

//ENTRADA DE DADOS
let kg = Number(ler('Informe um peso em kilos: '));

//PROCESSAMENTO
let r = conv(kg);

//SAIDA
console.log(r);

//AREA FUNCTION
function conv (a) {
    let x = a * 1000;
    return x;
}
