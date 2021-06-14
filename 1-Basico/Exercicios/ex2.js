let varA = 'a' //b
let varB = 'b' //c
let varC = 'c' //a

let salva

salva = varA
varA = varB
varB = varC
varC = salva

console.log(varA, varB, varC)