import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA METADE\n');

//ENTRADA DE DADOS
let n = Number(ler("Informe um número: "));

//PROCESSAMENTO
let r = metade(n);

//SAIDA
console.log(`A metade de ${n} é ${r.toFixed(1)}`);

//AREA DAS FUNCTIONS
function metade (a) {
    let x = a / 2;
    return x;
}