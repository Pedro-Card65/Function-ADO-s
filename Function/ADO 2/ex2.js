import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO CUPOM\n');

//ENTRADA DE DADOS
let comp = Number(ler('Informe o valor da compra: '));
let desc = Number(ler('Informe o valor do cupom em porcentagem: '));

//PROCESSAMENTO
let r = final(comp, desc);

//SAIDA
console.log(`Compra finalizada! O total é de R$${r}`);

//AREA FUNCTION
function final (a, b) {
    let x = a - (a * (b / 100));
    return x;
}


