//Faça um programa que leia 5 valores numéricos e guarde-os em uma lista. No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista. 
function maiorMenor(min, max, numbers) {
    const numeros = []
    let maior = []
    let menor = []
    for (let i = 0; i < numbers; i++) {

        numeros.push(Math.floor(Math.random() * (max - min) + min))
        if (i === 0) {
            maior[0] = i
            maior[1] = numeros[i]
            menor[0] = i
            menor[1] = numeros[i]
        }
        if (numeros[i] > maior[1]) {
            maior[0] = i
            maior[1] = numeros[i]
        }
        if (numeros[i] < menor[1]) {
            menor[0] = i
            menor[1] = numeros[i]
        }
    }
    console.log(numeros)
    console.log(`Maior número é ${maior[1]} na posição ${maior[0]}`)
    console.log(`Menor número é ${menor[1]} na posição ${menor[0]}`)
}

maiorMenor(10, 20, 30)
