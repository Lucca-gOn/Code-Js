let prompt = require('prompt-sync')();

// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin; e a senha é senha123;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let nomeUser = prompt("Nome de usuário:")
let senha = parseInt(prompt("Senha:"))

if (nomeUser == "admin" && senha == 123) {
    console.log(`Bem vindo ${nomeUser}! Seu login foi efetuado com sucesso.`)
} else {
    console.log(`Tente novamente! Usuário ou senha incorreto`)
}