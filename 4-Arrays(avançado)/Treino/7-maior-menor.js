const numeros = []
const indiceMaior = []
const indiceMenor = []
let maior = 0
let menor = 0

for(let i = 0; i < 5; i++){
    numeros.push(Math.round(Math.random()*10))
    console.log(numeros[i])
}

/*for(let i = 0; i < numeros.length; i++){
    if(i === 0){
        maior = numeros[i]
        menor = numeros [i]
        indiceMaior.push(i)
        indiceMenor.push(i)
    }
} */
maior = numeros.reduce(function (a, b) {
    return Math.max(a, b)
})
menor = numeros.reduce(function(a, b){
    return Math.min(a, b)
})
console.log('Maior valor: ',maior)
console.log('Menor valor: ',menor)
