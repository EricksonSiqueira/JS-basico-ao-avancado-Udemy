function achaNumero (vetor, n){
    const indice = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === n){
            indice.push(i)
        }
    }
    return indice
}

console.log(achaNumero([2, 3, 4, 2, 5, 2, 9, 0 ,2], 2))