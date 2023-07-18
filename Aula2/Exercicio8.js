let prompt = require('prompt-sync')();


// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let usuario = prompt("Informe o seu nome de usuário:")
let idade = prompt("Informe a sua idade:")

while (idade < 18) {
    console.log("Idade incorreta!");
    idade = prompt("Informe a sua idade:")
}
console.log("Idade correta!");