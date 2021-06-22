/**Exercício Array 03: Crie um programa que vai gerar cinco números aleatórios e colocar em um array. Depois disso, mostre a listagem de números gerados e também indique o menor e o maior valor que estão na tupla.
 */

const vetor = []
for(let i = 0; i <= 5; i++){
    vetor.push((Math.random()*(10)).toFixed(2))
    console.log(vetor[i])
}