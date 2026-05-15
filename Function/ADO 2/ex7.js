import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO AÇAÍ\n');

//ENTRADA DE DADOS
console.log('Açaí de tamanho unico \n Valor = R$13,50');
let n = Number(ler('Informe quantos açais você deseja: '));

//PROCESSAMENTO
let r = total(n);

//SAIDA
console.log(`\nTotal à pagar é R$${r.toFixed(2)}`);

//AREA FUNCTION
function total(a) {
    let x = a * 13.5;
    return x;
}
