function somaDigitosInteiro (n){
    let s = n.toString()
    let soma = 0
    for (let char of s){
        soma += Number(char)
    }
    return soma
}
console.log(somaDigitosInteiro(1234))
