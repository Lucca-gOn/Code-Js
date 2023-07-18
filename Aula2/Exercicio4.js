let prompt = require('prompt-sync')();

// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let n1 = parseInt(prompt("Informe o número que gostaria de saber a tabuada:"))

for (let index = 1; index < 10; index++) {
    const element  = [index];
    console.log(`${n1} X ${index} = ${element * n1}`);
}
