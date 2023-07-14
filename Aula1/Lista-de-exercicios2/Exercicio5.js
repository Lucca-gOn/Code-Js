let prompt = require('prompt-sync')();

// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valorCompra = parseFloat(prompt("Informe o valor da sua compra, (sem mentir em bobão, acredito em você usuario!):"))
if (valorCompra <= 100) {
    console.log("Você não tem desconto!")
} else if (valorCompra >= 100.01) {
    let desconto = (valorCompra) * (0.10) - (valorCompra);
    console.log(`Você ganhou 20% de desconto! Sua compra ficou ${valorCompra} Seu novo valor é de R$ ${desconto}`)
} else if (valorCompra >= 200) {
    let desconto = (valorCompra) * (0.20) - (valorCompra);
    console.log(`Você ganhou 20% de desconto! Seu novo valor é de R$ ${desconto}`)
} else{
    console.log("Valor inválido!")
}