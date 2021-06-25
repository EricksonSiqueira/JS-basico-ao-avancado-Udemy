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
console.log(`Vetor inicial: ${teste}\nVetor de pares: ${par(teste)}\nVetor impares: ${impar(teste)}`)
