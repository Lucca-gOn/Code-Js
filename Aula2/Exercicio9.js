let prompt = require('prompt-sync')();

// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numero = parseInt(prompt("Informe um número que deseja até 0:"))

while (numero >= 0) {
    console.log(numero);
    numero --
}