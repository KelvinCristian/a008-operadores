// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:


let primeiroNum = prompt("insira um numero")
let segundoNum = prompt("insira outro numero")
Number(primeiroNum)
Number(segundoNum)
console.log("O primeiro numero é maior que segundo?", primeiroNum > segundoNum)
console.log("O primeiro numero é igual ao segundo?", primeiroNum === segundoNum)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNum %  segundoNum === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNum %  primeiroNum === 0)


// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```