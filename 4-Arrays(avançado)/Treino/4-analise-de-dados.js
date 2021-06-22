const vetor = [4, 9, 2, 3]
let noves = 0
let posTres = vetor.indexOf(3)
let pares = []
for(let i = 0; i < 4; i++){
    if(vetor[i] === 9){
        noves++
    }
    if(vetor[i] % 2 === 0){
        pares.push(vetor[i])
    }
}
console.log(`Quantidade de noves: ${noves}.\nPosição do primeiro número três: ${posTres}.
Valores pares: ${pares}`)