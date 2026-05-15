import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA AREA RETÂNGULO\n');

//ENTRADA DE DADOS
let base = Number(ler('Informe a base do retângulo: '));
let alt = Number(ler('\nInforme a altura do retângulo: '));

//PROCESSAMENTO DE DADOS
let r = area(base, alt);

//SAIDA
console.log(`\nA área do retângulo (${base} por ${alt}) é ${r}`)

//AREA FUNCTION
function area(a, b) {
    let x = a * b;
    return x;
}