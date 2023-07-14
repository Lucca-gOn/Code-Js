let prompt = require('prompt-sync')();

// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anoNascimento = parseInt(prompt("Informe o ano do seu nascimeno:"))
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

let idade = anoAtual - anoNascimento;

if (idade > 18){
    console.log(`Maior de idade! Sua idade é de ${idade} anos`)
}else{
    console.log(`Menor de idade, sua idade é de ${idade} anos`)
}