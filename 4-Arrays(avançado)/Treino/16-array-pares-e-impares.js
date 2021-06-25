function par(array){
    let pares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
          pares.push(array[i])
        } 
    }
    return pares
}
function impar(array){
    let impares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0) impares.push(array[i])
    }
    return impares
}
let teste = []
for(let i = 0; i <= 6; i++){
    teste.push(Math.round(Math.random()*10))
}
let pares = par(teste)
let impares = impar(teste)
console.log(`Vetor inicial: ${teste}\nVetor de pares: ${pares.sort((a, b) => b-a)}\nVetor impares: ${impares.sort()}`)
