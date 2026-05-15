import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO DOBRO\n');

let n1 = Number(ler('Informe um número: '));

let r = dobro(n1);

console.log(`O dobro de ${n1} é ${r}`);

//AREA DA FUNÇÃO
function dobro (a) {
    let x = a * 2;
    return x;
}