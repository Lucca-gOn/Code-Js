let prompt = require('prompt-sync')();

// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.
let n1 = 0;
let n2 = 1;
while (n2 <= 100) {
    n1 += n2; 
    n2 ++;
}
console.log(`A soma dos números de 1 a 100 é: ${n1}`);
