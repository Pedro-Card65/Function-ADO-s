import prompt from 'prompt-sync'
let ler = prompt();

console.log("PROGRAMA DA SOMA\n")

let n1 = Number(ler('Informe um número: '));
let n2 = Number(ler('\nInforme o segundo número: '))

let r = soma (n1,n2)

console.log(`A soma de ${n1} + ${n2} é ${r}`)

function soma (a, b){
    let r = a + b;
    return r
}