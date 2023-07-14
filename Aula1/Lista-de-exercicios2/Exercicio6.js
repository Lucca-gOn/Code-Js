let prompt = require('prompt-sync')();
// Exercício 6: Cálculo de IMC

// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let pesoAtual = parseFloat(prompt("Informe o seu peso atual:"));
console.log()
let alturaAtual = parseFloat(prompt("Informe a sua altura em metros:"))
console.log()

let imc = pesoAtual / (alturaAtual * alturaAtual);
let imcAtual = imc.toFixed(2);

if (imcAtual <= 18.5) {
    console.log("Abaixo do peso")
    console.log(`Seu imc é de ${imcAtual}`)
} else if (imcAtual>= 18.5 && imcAtual <= 24.9 ) {
    console.log("Peso normal")
    console.log(`Seu imc é de ${imcAtual}`)
} else if ( imcAtual >= 25.0 && imcAtual <= 29.9){
    console.log("Sobrepeso")
    console.log(`Seu imc é de ${imcAtual}`)
} else if ( imcAtual >= 30.0 && imcAtual <=34.9){
    console.log("Obesidade grau 1")
    console.log(`Seu imc é de ${imcAtual}`)
} else if ( imcAtual >= 35.0 && imcAtual <=39.9){
    console.log("Obesidade grau 2")
    console.log(`Seu imc é de ${imcAtual}`)
} else if ( imcAtual >= 40){
    console.log("Obesidade grau 3")
    console.log(`Seu imc é de ${imcAtual}`)
}