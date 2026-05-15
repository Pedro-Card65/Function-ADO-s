import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA AREA DO QUADRADO\n');

//ENTRADA DE DADOS
let lado = Number(ler('Informe o lado do quadrado: '));

//PROCESSAMENTO
let r = area(lado);

//SAIDA DE DADOS
console.log(`A área do quadrado é ${r}`);

//AREA DAS FUNÇÕES
function area (a) {
    let x = a * a;
    return x;
}