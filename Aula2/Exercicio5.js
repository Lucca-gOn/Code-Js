let prompt = require('prompt-sync')();

// Imprimir os primeiros 10 números da sequência de Fibonacci.
let a = 0;
let b = 1

for (let index = 1; index < 11; index++) {
    console.log(a);
    let proximo = a + b
    a = b;
    b = proximo;
    
}