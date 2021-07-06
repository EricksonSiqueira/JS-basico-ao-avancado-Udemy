function achaNumero (vetor, n){
    const indice = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === n){
            indice.push(i)
        }
    }
    return indice
}
function achaNumeroFilter(vetor, n){
    const vet = []
    vetor.filter(function(valor, indice){
        if(valor === n) vet.push(indice)
    })
    return vet
}
const vetor = [2, 3, 4, 2, 5, 2, 9, 3 ,2]
console.log(achaNumeroFilter(vetor, 3))
