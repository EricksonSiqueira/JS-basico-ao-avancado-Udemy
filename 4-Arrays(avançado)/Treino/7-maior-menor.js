const numeros = []
const indiceMaior = []
const indiceMenor = []
//gerando 5 numeros
for(let i = 0; i < 5; i++){
    numeros.push(Math.round(Math.random()*10))
    console.log(numeros[i])
}

let maior = numeros.reduce(function (a, b) {
    return Math.max(a, b)
})
let menor = numeros.reduce(function(a, b){
    return Math.min(a, b)
})

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === maior){
        indiceMaior.push(i)
    }
    if(numeros[i] === menor){
        indiceMenor.push(i)
    }
}

console.log(`Maior valor: ${maior} / Indices: ${indiceMaior}`)
console.log(`Maior valor: ${menor} / Indices: ${indiceMenor}`)

