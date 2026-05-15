import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA ÁREA TRIÂNGULO\n');

//ENTRADA DE DADOS
let base = Number(ler('Informe a base do triângulo: '));
let alt = Number(ler('\nInforme a altura do triângulo: '));

//PROCESSAMENTO DE DADOS
let r = area(base,alt);

//SAIDA
console.log(`\nA área do triângulo é ${r}`);

//FUNCTION AREA
function area(a,b) {
    let x = a * b / 2;
    return x;
}