import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO TRIPLO');

let n = Number(ler('Informe um número: '));

let r = triplo(n)

console.log(`O triplo de ${n} é ${r}`);

//AREA DAS FUNÇÕES
function triplo(a){
    let x = a * 3;
    return x;
}