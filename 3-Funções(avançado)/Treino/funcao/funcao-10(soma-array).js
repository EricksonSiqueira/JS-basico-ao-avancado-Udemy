// Calcular a soma dos números de um array 
function somaArray(ar){
    let soma = 0
    for(let i of ar){
        soma += i
    }
    return soma
}
let array = [1, 4, 5, 1]
console.log(somaArray(array))