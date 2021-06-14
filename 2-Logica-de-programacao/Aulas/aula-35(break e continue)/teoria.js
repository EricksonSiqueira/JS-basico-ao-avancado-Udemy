// continue continua pra proxima iteração
// break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros){
    if (numero === 2) {
        console.log('Pulei o 2')
        continue // pula pra proxima interação
    }

    if (numero === 7) {
        console.log('7 foi encontrado.')
        break // quebra o laço
    }
        console.log(numero)
}

console.log('\n################\n')

const numeros2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let i = 0

while (i < numeros2.length) {

    if (numeros2[i] == 12){
        console.log('Pulei o 12')
        i++ // em while precisamos colocar o incrimento antes do continue
        continue
    }

    if (numeros2[i] == 17) {
        console.log('Achei o 17')
        break
    }
    console.log(numeros2[i])
    i++
}