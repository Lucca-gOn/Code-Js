let prompt = require('prompt-sync')();
// ARRAY
// let nomes = ["Odirlei", "Aléxia","Lucas","Paulo","Everton"]
//              0         1       2        3       4

// for (let index = 0; index < nomes.length; index++) {               // index =+ 1 (escolher qualquer número) ele pula, exemplo, de 2 em 2                                                          
//     const element = nomes[index];
//     console.log(element)
// }




// Com posição
// nomes.forEach((element, i) => {
//     console.log(i, element);
// });

// Sem posição
// nomes.forEach(element => {
//     console.log(element);
// });


// const frutas = ["Melancia","Uva","Maça","Banana","Melão"]

// for (let index = 0; index < frutas.length; index++) {
//     const element = frutas[index];
//     console.log(index, element);
// }

// frutas.forEach(element => {
//     console.log(element);
// });


// ---------------------------------------------------------------------------

let salario = 1000;
while (salario < 5000) {
    salario += 1000;
   console.log(salario);
}