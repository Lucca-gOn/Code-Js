let prompt = require('prompt-sync')();

// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero;
do {
    numero = prompt("Informe um número que não seja diferente de 0: ")
} while (numero != "0");