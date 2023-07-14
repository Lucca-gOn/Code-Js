let prompt = require('prompt-sync')();

// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let n1 = parseInt(prompt("Informe o primeiro número:"))
let n2 = parseInt(prompt("Informe o segundo número:"))
let n3 = parseInt(prompt("Informe o terceiro número:"))

if (n1 < n2 && n1 < n3 ) {
    console.log(`Seus números estão em ordem crescente!`)
}else{
    console.log(`Seus números não estão em ordem crescente!`)
}




