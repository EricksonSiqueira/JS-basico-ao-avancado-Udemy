// Calcular a soma dos números impares maiores que 10 e menores que 30
function somaImpares10A30(){
    let soma = 0

    for(let i = 11;i <= 30;i += 2){
        soma += i
    }
    return soma
}
console.log(somaImpares10A30())
