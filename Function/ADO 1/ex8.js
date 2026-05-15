import prompt from  'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO PERIMETRO OCTÁGONO\n');

//ENTRADA DE DADOS
let lado = Number(ler('Informe um lado do octágono: '))

//PROCESSAMENTO DE DADOS
let r = perimetro(lado)

//SAIDA
console.log(`O perímetro do octágono é ${r}`);

//FUNCTION AREA
function perimetro(a) {
    let x = a * 8;
    return x;
}