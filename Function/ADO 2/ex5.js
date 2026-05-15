import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE PARCELAMENTO\n');

//ENTRADA DE DADOS
let total = Number(ler('Informe o valor total da compra: '));
let parc = Number(ler('Informe em quantas vezes deseja parcelar: '));

//PROCESSAMENTO
let r = final (total, parc);

//SAIDA
console.log(`Sua compra de R$${total} em ${parc}x de R$${r.toFixed(2)} foi concluida`)

//AREA FUNCTION
function final (a, b) {
    let x = a / b;
    return x;
}
