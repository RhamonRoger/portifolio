let rlsync = require('readline-sync')
let nome = rlsync.question("Qual o seu nome :\n ")
console.log(`Olá, ${nome}`)

let idade = rlsync.question("Qual a sua idade?\n")
console.log(`Sua idade é :  ${idade}`)